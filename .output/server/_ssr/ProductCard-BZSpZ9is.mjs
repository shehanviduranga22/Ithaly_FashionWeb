import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as formatPrice } from "./products-Ds4FixyM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-BZSpZ9is.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, wide = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "group",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/collection/$slug",
			params: { slug: product.slug },
			className: "block",
			"aria-label": product.name,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-black/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.alt,
							loading: "lazy",
							width: 1024,
							height: 1280,
							className: `w-full ${wide ? "aspect-[16/10]" : "aspect-[4/5]"} object-cover plate-img transition-opacity duration-700 group-hover:opacity-0`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image2,
							alt: product.alt2,
							loading: "lazy",
							width: 1024,
							height: 1280,
							"aria-hidden": "true",
							className: `absolute inset-0 w-full ${wide ? "aspect-[16/10]" : "aspect-[4/5]"} object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-3 left-3 bg-paper/90 text-ink text-[9px] uppercase tracking-[0.25em] px-2.5 py-1",
							children: product.plate
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg sm:text-xl font-medium",
						children: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm tabular-nums text-ink/70",
						children: formatPrice(product.price)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11px] uppercase tracking-[0.15em] text-ink/45",
					children: product.summary
				})
			]
		})
	});
}
//#endregion
export { ProductCard as t };
