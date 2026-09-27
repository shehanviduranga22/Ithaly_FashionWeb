import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as generalWhatsappLink } from "./site-BddHkowg.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B9yzvQiR.mjs";
import { t as HeroSlideshow } from "./HeroSlideshow-B348ghwl.mjs";
import { t as atelier_default } from "./atelier-CxhNlGaA.mjs";
import { n as p_trouser_sartoria_3_default, t as p_jacket_crociera_3_default } from "./p-jacket-crociera-3-BoR-R95E.mjs";
import { t as WhatsAppButton } from "./WhatsAppButton-BrkOH2D5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/delivery-gpqxA1th.js
var import_jsx_runtime = require_jsx_runtime();
var deliverySlides = [
	{
		src: p_jacket_crociera_3_default,
		alt: "Tailored camel jacket prepared in soft atelier light"
	},
	{
		src: p_trouser_sartoria_3_default,
		alt: "Pleated wool trousers folded on a marble plinth"
	},
	{
		src: atelier_default,
		alt: "Tailoring atelier where each order is prepared by hand"
	}
];
var points = [
	{
		numeral: "i",
		heading: "Across the Emirates",
		body: "We deliver to every emirate — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain — dispatched from our Dubai atelier."
	},
	{
		numeral: "ii",
		heading: "Timing",
		body: "2–4 working days for Dubai and Sharjah, 3–5 working days for the northern emirates. Orders confirmed before 14:00 are dispatched the same day."
	},
	{
		numeral: "iii",
		heading: "Charges",
		body: "Flat AED 30 within the UAE. Complimentary on orders above AED 1,000. Every piece is wrapped in tissue and boxed."
	},
	{
		numeral: "iv",
		heading: "Ordering",
		body: "Orders are confirmed over WhatsApp. We agree size, colour and delivery address, then share payment details before dispatch."
	},
	{
		numeral: "v",
		heading: "Exchanges",
		body: "Unworn pieces may be exchanged for a different size within 7 days of delivery. Message us and we will arrange the collection."
	},
	{
		numeral: "vi",
		heading: "International",
		body: "International delivery is planned for a future season. If you are outside the UAE, write to us and we will handle your order personally."
	}
];
function Delivery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative h-[42vh] min-h-[320px] max-h-[560px] overflow-hidden border-b border-ink/10",
					"aria-label": "Atelier to door",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlideshow, {
						slides: deliverySlides,
						interval: 5500
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-16 lg:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
							children: "No. 05 — Delivery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-serif text-4xl sm:text-5xl font-light leading-[1.02] text-balance max-w-[22ch]",
							children: "Considered, from atelier to door."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-ink/70 max-w-[54ch] leading-relaxed text-pretty",
							children: "Everything is packed by hand in Dubai and sent with a tracked courier. Below is how delivery works across the United Arab Emirates."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid sm:grid-cols-2 gap-x-16 gap-y-10 border-t border-ink/15 pt-10",
							children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-fawn text-xl leading-none pt-1",
									children: point.numeral
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-xl sm:text-2xl font-medium",
									children: point.heading
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-ink/70 leading-relaxed text-pretty max-w-[44ch]",
									children: point.body
								})] })]
							}, point.numeral))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
							href: generalWhatsappLink,
							className: "mt-14",
							children: "Ask about delivery on WhatsApp"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Delivery as component };
