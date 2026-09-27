/**
 * Stripe REST helpers (server only).
 *
 * We call the REST API with fetch so no Node-only SDK is bundled into the
 * Worker runtime. Card details are never handled by this app — the customer
 * enters them on Stripe's own hosted Checkout page.
 */

const STRIPE_API = "https://api.stripe.com/v1";

function stripeKey(): string {
  const key = process.env["STRIPE_SECRET_KEY"];
  if (!key) throw new Error("Card payments are not configured yet.");
  return key;
}

async function stripeRequest<T>(
  path: string,
  init?: { method?: string; form?: Record<string, string> },
): Promise<T> {
  const response = await fetch(`${STRIPE_API}${path}`, {
    method: init?.method ?? "GET",
    headers: {
      Authorization: `Bearer ${stripeKey()}`,
      ...(init?.form ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    ...(init?.form ? { body: new URLSearchParams(init.form).toString() } : {}),
  });

  const payload = (await response.json()) as { error?: { message?: string } };
  if (!response.ok) {
    throw new Error(payload.error?.message ?? "Stripe request failed.");
  }
  return payload as T;
}

export type StripeCheckoutSession = {
  id: string;
  url: string | null;
  payment_status: "paid" | "unpaid" | "no_payment_required";
  status: "open" | "complete" | "expired";
};

export type StripeLineItem = {
  name: string;
  description?: string;
  unitAmountAed: number;
  quantity: number;
};

export async function createStripeCheckoutSession(options: {
  orderId: string;
  email?: string | undefined;
  items: StripeLineItem[];
  successUrl: string;
  cancelUrl: string;
}): Promise<StripeCheckoutSession> {
  const form: Record<string, string> = {
    mode: "payment",
    success_url: options.successUrl,
    cancel_url: options.cancelUrl,
    client_reference_id: options.orderId,
    "metadata[order_id]": options.orderId,
  };
  if (options.email) form["customer_email"] = options.email;

  options.items.forEach((item, index) => {
    form[`line_items[${index}][quantity]`] = String(item.quantity);
    form[`line_items[${index}][price_data][currency]`] = "aed";
    form[`line_items[${index}][price_data][unit_amount]`] = String(
      Math.round(item.unitAmountAed * 100),
    );
    form[`line_items[${index}][price_data][product_data][name]`] = item.name;
    if (item.description) {
      form[`line_items[${index}][price_data][product_data][description]`] = item.description;
    }
  });

  return stripeRequest<StripeCheckoutSession>("/checkout/sessions", { method: "POST", form });
}

export async function getStripeCheckoutSession(id: string): Promise<StripeCheckoutSession> {
  return stripeRequest<StripeCheckoutSession>(`/checkout/sessions/${encodeURIComponent(id)}`);
}
