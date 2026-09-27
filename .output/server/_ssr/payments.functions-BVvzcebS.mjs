import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-BFFE07zL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-UH_Jp6hR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payments.functions-BVvzcebS.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function origin(url) {
	return new URL(url).origin;
}
/**
* Starts a payment for an order the signed-in customer owns and returns the
* URL the browser should be sent to (Stripe Checkout or Satispay).
*/
var startPayment_createServerFn_handler = createServerRpc({
	id: "c58bf8e773292ff55e71b89fab0fad0ff9e488d2e88cb96ff3f8267d2be2b78f",
	name: "startPayment",
	filename: "src/lib/payments.functions.ts"
}, (opts) => startPayment.__executeServer(opts));
var startPayment = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => {
	if (!input.orderId) throw new Error("Missing order.");
	if (input.method !== "card" && input.method !== "satispay") throw new Error("Unsupported payment method.");
	return input;
}).handler(startPayment_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId, claims } = context;
	const { data: order, error } = await supabase.from("orders").select("id, total_aed, contact_name").eq("id", data.orderId).eq("user_id", userId).single();
	if (error || !order) throw new Error("Order not found.");
	const { data: items } = await supabase.from("order_items").select("product_name, size, color, unit_price_aed, quantity").eq("order_id", order.id);
	const base = origin(data.returnTo);
	const reference = order.id.slice(0, 8).toUpperCase();
	const returnUrl = `${base}/payment-return?order=${order.id}&method=${data.method}`;
	if (data.method === "card") {
		const { createStripeCheckoutSession } = await import("./stripe.server-Cz-7HYjO.mjs");
		const email = typeof claims?.["email"] === "string" ? claims["email"] : void 0;
		const session = await createStripeCheckoutSession({
			orderId: order.id,
			email,
			successUrl: `${returnUrl}&session_id={CHECKOUT_SESSION_ID}`,
			cancelUrl: `${base}/checkout?canceled=1`,
			items: items && items.length > 0 ? items.map((i) => ({
				name: i.product_name,
				description: [i.size ? `Size ${i.size}` : null, i.color].filter(Boolean).join(" · "),
				unitAmountAed: Number(i.unit_price_aed),
				quantity: i.quantity
			})) : [{
				name: `CIAO D MILANO order ${reference}`,
				unitAmountAed: Number(order.total_aed),
				quantity: 1
			}]
		});
		if (!session.url) throw new Error("Stripe did not return a payment page.");
		await supabase.from("orders").update({
			payment_method: "card",
			payment_status: "pending",
			payment_ref: session.id,
			payment_currency: "AED",
			payment_amount: Number(order.total_aed)
		}).eq("id", order.id);
		return { url: session.url };
	}
	const { createSatispayPayment, aedToEurCents } = await import("./satispay.server-OV8r4DT-.mjs");
	const amountEurCents = aedToEurCents(Number(order.total_aed));
	const payment = await createSatispayPayment({
		orderId: order.id,
		amountEurCents,
		description: `CIAO D MILANO order ${reference}`,
		redirectUrl: returnUrl
	});
	if (!payment.redirect_url) throw new Error("Satispay did not return a payment page.");
	await supabase.from("orders").update({
		payment_method: "satispay",
		payment_status: "pending",
		payment_ref: payment.id,
		payment_currency: "EUR",
		payment_amount: amountEurCents / 100
	}).eq("id", order.id);
	return { url: payment.redirect_url };
});
var confirmPayment_createServerFn_handler = createServerRpc({
	id: "b671332314d2bd1d8f8d0c6225c69e0aef185a50c5f9493ec0c7847eba3afbc7",
	name: "confirmPayment",
	filename: "src/lib/payments.functions.ts"
}, (opts) => confirmPayment.__executeServer(opts));
var confirmPayment = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => {
	if (!input.orderId) throw new Error("Missing order.");
	return input;
}).handler(confirmPayment_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	const { data: order, error } = await supabase.from("orders").select("id, payment_method, payment_ref, payment_status").eq("id", data.orderId).eq("user_id", userId).single();
	if (error || !order) throw new Error("Order not found.");
	let paid = false;
	if (order.payment_method === "card") {
		const ref = data.sessionId ?? order.payment_ref;
		if (ref) {
			const { getStripeCheckoutSession } = await import("./stripe.server-Cz-7HYjO.mjs");
			paid = (await getStripeCheckoutSession(ref)).payment_status === "paid";
		}
	} else if (order.payment_method === "satispay" && order.payment_ref) {
		const { getSatispayPayment } = await import("./satispay.server-OV8r4DT-.mjs");
		paid = (await getSatispayPayment(order.payment_ref)).status === "ACCEPTED";
	}
	await supabase.from("orders").update({
		payment_status: paid ? "paid" : "unpaid",
		status: paid ? "paid" : "pending_payment"
	}).eq("id", order.id);
	return {
		paid,
		method: order.payment_method
	};
});
//#endregion
export { confirmPayment_createServerFn_handler, startPayment_createServerFn_handler };
