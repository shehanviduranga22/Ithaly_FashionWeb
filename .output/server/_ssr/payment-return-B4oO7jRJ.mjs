import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as whatsappLink, i as useCart, r as site } from "./site-BddHkowg.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B9yzvQiR.mjs";
import { r as useServerFn, t as confirmPayment } from "./payments.functions-TlABjn8v.mjs";
import { t as Route } from "./payment-return-DCvOjPSB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-return-B4oO7jRJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PaymentReturnPage() {
	const { order, session_id } = Route.useSearch();
	const check = useServerFn(confirmPayment);
	const { clear } = useCart();
	const [state, setState] = (0, import_react.useState)("checking");
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!order || started.current) return;
		started.current = true;
		(async () => {
			try {
				if ((await check({ data: {
					orderId: order,
					...session_id ? { sessionId: session_id } : {}
				} })).paid) {
					clear();
					setState("paid");
				} else setState("unpaid");
			} catch {
				setState("error");
			}
		})();
	}, [
		order,
		session_id,
		check,
		clear
	]);
	const reference = order ? order.slice(0, 8).toUpperCase() : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "bg-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-20 lg:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[34rem] text-center",
						children: [
							state === "checking" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
								children: "One moment"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-serif text-3xl sm:text-4xl font-medium",
								children: "Confirming your payment"
							})] }),
							state === "paid" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
									children: "Payment received"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 font-serif text-3xl sm:text-4xl font-medium",
									children: "Thank you"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm leading-relaxed text-ink/65",
									children: [
										"Your payment for order ",
										reference,
										" is confirmed. Our atelier will be in touch with your delivery window."
									]
								})
							] }),
							(state === "unpaid" || state === "error") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
									children: "Not completed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 font-serif text-3xl sm:text-4xl font-medium",
									children: "Payment pending"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm leading-relaxed text-ink/65",
									children: [
										"We could not confirm payment for order ",
										reference,
										". Nothing has been charged — you can try again from your bag, or message the atelier and we will help."
									]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/account",
									className: "bg-ink px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream",
									children: "View my orders"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: whatsappLink(`Hello ${site.name}, I need help with order ${reference || "my recent order"}.`),
									target: "_blank",
									rel: "noreferrer",
									className: "border border-ink/20 px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em]",
									children: "Message the atelier"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { PaymentReturnPage as component };
