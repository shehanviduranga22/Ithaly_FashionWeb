import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as useCart } from "./auth-DeL9dCwQ.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Plus } from "../_libs/lucide-react.mjs";
import { r as formatPrice } from "./products-BLU4_Spt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-ByuymUSR.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, wide = false }) {
	const { add } = useCart();
	function quickAdd() {
		add({
			slug: product.slug,
			name: product.name,
			image: product.image,
			price: product.price,
			size: product.sizes[0] ?? "",
			color: product.colors[0]?.name ?? ""
		});
		toast.success(`${product.name} added to your bag`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group",
		"data-reveal": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
							className: "product-card-tag absolute left-3 top-3 text-ink text-[9px] uppercase tracking-[0.25em] px-2.5 py-1.5",
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: quickAdd,
			className: "mt-3 inline-flex translate-y-2 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/55 opacity-0 transition-[opacity,transform,color] duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:text-ink focus-visible:translate-y-0 focus-visible:opacity-100",
			children: ["Quick add ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
				className: "size-3.5",
				"aria-hidden": "true"
			})]
		})]
	});
}
//#endregion
export { ProductCard as t };
