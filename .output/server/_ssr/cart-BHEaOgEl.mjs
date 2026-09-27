import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useCart } from "./site-BddHkowg.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B9yzvQiR.mjs";
import { r as formatPrice } from "./products-Ds4FixyM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-BHEaOgEl.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { items, subtotal, setQuantity, remove } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-14 lg:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
							children: "Shopping bag"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-serif text-3xl sm:text-4xl font-medium",
							children: "Your selection"
						}),
						items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 border-t border-ink/15 pt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink/60",
								children: "Your bag is empty."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/collection",
								className: "mt-6 inline-flex bg-ink px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream",
								children: "Browse the collection"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "divide-y divide-ink/10 border-y border-ink/15",
								children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-5 py-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: item.name,
										width: 160,
										height: 200,
										className: "h-28 w-24 shrink-0 object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-baseline justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "font-serif text-xl font-medium",
													children: item.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm tabular-nums",
													children: formatPrice(item.price * item.quantity)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-[11px] uppercase tracking-[0.15em] text-ink/50",
												children: [
													"Size ",
													item.size,
													" · ",
													item.color
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex items-center gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center border border-ink/20",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															"aria-label": "Decrease quantity",
															onClick: () => setQuantity(item.key, item.quantity - 1),
															className: "size-9 text-sm",
															children: "−"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "w-8 text-center text-sm tabular-nums",
															children: item.quantity
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															"aria-label": "Increase quantity",
															onClick: () => setQuantity(item.key, item.quantity + 1),
															className: "size-9 text-sm",
															children: "+"
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => remove(item.key),
													className: "text-[11px] uppercase tracking-[0.2em] text-ink/45 hover:text-ink",
													children: "Remove"
												})]
											})
										]
									})]
								}, item.key))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "h-fit border border-ink/15 bg-cream p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-[0.25em] text-ink/55",
										children: "Summary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-baseline justify-between border-b border-ink/10 pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-ink/70",
											children: "Subtotal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif text-2xl tabular-nums",
											children: formatPrice(subtotal)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-[12px] leading-relaxed text-ink/55",
										children: "Delivery across the UAE is complimentary on orders above AED 500. Duties and taxes are shown at checkout."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/checkout",
										className: "mt-6 block bg-ink py-3.5 text-center text-[12px] font-medium uppercase tracking-[0.2em] text-cream",
										children: "Proceed to checkout"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/collection",
										className: "mt-3 block py-2 text-center text-[11px] uppercase tracking-[0.2em] text-ink/55 hover:text-ink",
										children: "Continue shopping"
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { CartPage as component };
