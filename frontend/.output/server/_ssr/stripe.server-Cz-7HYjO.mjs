import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/stripe.server-Cz-7HYjO.js
/**
* Stripe REST helpers (server only).
*
* We call the REST API with fetch so no Node-only SDK is bundled into the
* Worker runtime. Card details are never handled by this app — the customer
* enters them on Stripe's own hosted Checkout page.
*/
var STRIPE_API = "https://api.stripe.com/v1";
function stripeKey() {
	const key = processModule.env["STRIPE_SECRET_KEY"];
	if (!key) throw new Error("Card payments are not configured yet.");
	return key;
}
async function stripeRequest(path, init) {
	const response = await fetch(`${STRIPE_API}${path}`, {
		method: init?.method ?? "GET",
		headers: {
			Authorization: `Bearer ${stripeKey()}`,
			...init?.form ? { "Content-Type": "application/x-www-form-urlencoded" } : {}
		},
		...init?.form ? { body: new URLSearchParams(init.form).toString() } : {}
	});
	const payload = await response.json();
	if (!response.ok) throw new Error(payload.error?.message ?? "Stripe request failed.");
	return payload;
}
async function createStripeCheckoutSession(options) {
	const form = {
		mode: "payment",
		success_url: options.successUrl,
		cancel_url: options.cancelUrl,
		client_reference_id: options.orderId,
		"metadata[order_id]": options.orderId
	};
	if (options.email) form["customer_email"] = options.email;
	options.items.forEach((item, index) => {
		form[`line_items[${index}][quantity]`] = String(item.quantity);
		form[`line_items[${index}][price_data][currency]`] = "aed";
		form[`line_items[${index}][price_data][unit_amount]`] = String(Math.round(item.unitAmountAed * 100));
		form[`line_items[${index}][price_data][product_data][name]`] = item.name;
		if (item.description) form[`line_items[${index}][price_data][product_data][description]`] = item.description;
	});
	return stripeRequest("/checkout/sessions", {
		method: "POST",
		form
	});
}
async function getStripeCheckoutSession(id) {
	return stripeRequest(`/checkout/sessions/${encodeURIComponent(id)}`);
}
//#endregion
export { createStripeCheckoutSession, getStripeCheckoutSession };
