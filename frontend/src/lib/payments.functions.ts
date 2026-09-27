import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type PaymentMethod = "card" | "satispay";

function origin(url: string): string {
  return new URL(url).origin;
}

/**
 * Starts a payment for an order the signed-in customer owns and returns the
 * URL the browser should be sent to (Stripe Checkout or Satispay).
 */
export const startPayment = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { orderId: string; method: PaymentMethod; returnTo: string }) => {
    if (!input.orderId) throw new Error("Missing order.");
    if (input.method !== "card" && input.method !== "satispay") {
      throw new Error("Unsupported payment method.");
    }
    return input;
  })
  .handler(async ({ data, context }) => {
    const { supabase, userId, claims } = context;

    const { data: order, error } = await supabase
      .from("orders")
      .select("id, total_aed, contact_name")
      .eq("id", data.orderId)
      .eq("user_id", userId)
      .single();
    if (error || !order) throw new Error("Order not found.");

    const { data: items } = await supabase
      .from("order_items")
      .select("product_name, size, color, unit_price_aed, quantity")
      .eq("order_id", order.id);

    const base = origin(data.returnTo);
    const reference = order.id.slice(0, 8).toUpperCase();
    const returnUrl = `${base}/payment-return?order=${order.id}&method=${data.method}`;

    if (data.method === "card") {
      const { createStripeCheckoutSession } = await import("./stripe.server");
      const email = typeof claims?.["email"] === "string" ? (claims["email"] as string) : undefined;
      const session = await createStripeCheckoutSession({
        orderId: order.id,
        email,
        successUrl: `${returnUrl}&session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${base}/checkout?canceled=1`,
        items:
          items && items.length > 0
            ? items.map((i) => ({
                name: i.product_name,
                description: [i.size ? `Size ${i.size}` : null, i.color].filter(Boolean).join(" · "),
                unitAmountAed: Number(i.unit_price_aed),
                quantity: i.quantity,
              }))
            : [
                {
                  name: `CIAO D MILANO order ${reference}`,
                  unitAmountAed: Number(order.total_aed),
                  quantity: 1,
                },
              ],
      });
      if (!session.url) throw new Error("Stripe did not return a payment page.");

      await supabase
        .from("orders")
        .update({
          payment_method: "card",
          payment_status: "pending",
          payment_ref: session.id,
          payment_currency: "AED",
          payment_amount: Number(order.total_aed),
        })
        .eq("id", order.id);

      return { url: session.url };
    }

    const { createSatispayPayment, aedToEurCents } = await import("./satispay.server");
    const amountEurCents = aedToEurCents(Number(order.total_aed));
    const payment = await createSatispayPayment({
      orderId: order.id,
      amountEurCents,
      description: `CIAO D MILANO order ${reference}`,
      redirectUrl: returnUrl,
    });
    if (!payment.redirect_url) throw new Error("Satispay did not return a payment page.");

    await supabase
      .from("orders")
      .update({
        payment_method: "satispay",
        payment_status: "pending",
        payment_ref: payment.id,
        payment_currency: "EUR",
        payment_amount: amountEurCents / 100,
      })
      .eq("id", order.id);

    return { url: payment.redirect_url };
  });

/** Re-checks the provider after the customer returns and settles the order. */
export const confirmPayment = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { orderId: string; sessionId?: string }) => {
    if (!input.orderId) throw new Error("Missing order.");
    return input;
  })
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: order, error } = await supabase
      .from("orders")
      .select("id, payment_method, payment_ref, payment_status")
      .eq("id", data.orderId)
      .eq("user_id", userId)
      .single();
    if (error || !order) throw new Error("Order not found.");

    let paid = false;

    if (order.payment_method === "card") {
      const ref = data.sessionId ?? order.payment_ref;
      if (ref) {
        const { getStripeCheckoutSession } = await import("./stripe.server");
        const session = await getStripeCheckoutSession(ref);
        paid = session.payment_status === "paid";
      }
    } else if (order.payment_method === "satispay" && order.payment_ref) {
      const { getSatispayPayment } = await import("./satispay.server");
      const payment = await getSatispayPayment(order.payment_ref);
      paid = payment.status === "ACCEPTED";
    }

    await supabase
      .from("orders")
      .update({
        payment_status: paid ? "paid" : "unpaid",
        status: paid ? "paid" : "pending_payment",
      })
      .eq("id", order.id);

    return { paid, method: order.payment_method as PaymentMethod | null };
  });
