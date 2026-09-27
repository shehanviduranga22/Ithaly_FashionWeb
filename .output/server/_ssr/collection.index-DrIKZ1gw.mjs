import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B9yzvQiR.mjs";
import { t as HeroSlideshow } from "./HeroSlideshow-B348ghwl.mjs";
import { a as products, t as categories } from "./products-Ds4FixyM.mjs";
import { t as ProductCard } from "./ProductCard-BZSpZ9is.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection.index-DrIKZ1gw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var collectionSlides = [
	{
		src: products[0]?.image ?? "",
		alt: products[0]?.alt ?? "Tailored jacket from the collection"
	},
	{
		src: products[1]?.image2 ?? "",
		alt: products[1]?.alt2 ?? "Linen shirt from the collection"
	},
	{
		src: products[2]?.image3 ?? "",
		alt: products[2]?.alt3 ?? "Tailored trousers from the collection"
	}
];
function Collection() {
	const [active, setActive] = (0, import_react.useState)("All");
	const visible = active === "All" ? products : products.filter((p) => p.category === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative h-[42vh] min-h-[320px] max-h-[560px] overflow-hidden border-b border-ink/10",
					"aria-label": "Collection highlights",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlideshow, {
						slides: collectionSlides,
						interval: 4500
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-16 lg:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
								children: "No. 04 — The Collection"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-light",
								children: "Plates by category"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em]",
								children: ["All", ...categories].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActive(cat),
									className: active === cat ? "text-ink border-b border-ink pb-0.5" : "text-ink/55 transition-colors hover:text-ink pb-0.5",
									children: cat
								}, cat))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10",
							children: visible.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-14 text-[12px] uppercase tracking-[0.2em] text-ink/50",
							children: [
								"Every plate can be ordered or reserved on WhatsApp ·",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-ink/70 hover:text-ink transition-colors",
									children: "Contact the maison"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Collection as component };
