import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as useCart, i as getAuthToken, l as whatsappLink, s as site } from "./auth-DeL9dCwQ.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-d3oh0FjW.mjs";
import { a as products, r as formatPrice } from "./products-BLU4_Spt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./collection._slug-D48Qjbc_.mjs";
import { t as ProductCard } from "./ProductCard-ByuymUSR.mjs";
import { t as WhatsAppButton } from "./WhatsAppButton-BrkOH2D5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection._slug-JgEq2TEs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const { product } = Route.useLoaderData();
	const [size, setSize] = (0, import_react.useState)(product.sizes[Math.min(1, product.sizes.length - 1)] ?? "");
	const [color, setColor] = (0, import_react.useState)(product.colors[0]?.name ?? "");
	const [photo, setPhoto] = (0, import_react.useState)(0);
	const { add } = useCart();
	const navigate = useNavigate();
	const related = products.filter((p) => p.category === product.category && p.slug !== product.slug);
	const gallery = [
		{
			src: product.image,
			alt: product.alt
		},
		{
			src: product.image2,
			alt: product.alt2
		},
		{
			src: product.image3,
			alt: product.alt3
		}
	];
	const currentPhoto = gallery[photo] ?? gallery[0];
	const orderLink = whatsappLink(`Hello ${site.name}, I would like to order the ${product.name} (${product.plate}) — size ${size}, colour ${color}, ${formatPrice(product.price)}.`);
	async function buyNow() {
		add({
			slug: product.slug,
			name: product.name,
			image: product.image,
			price: product.price,
			size,
			color
		});
		navigate({ to: getAuthToken() ? "/checkout" : "/auth" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream border-b border-ink/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-14 lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] uppercase tracking-[0.3em] text-fawn mb-10",
						children: [
							product.plate,
							" — ",
							product.category
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-black/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: currentPhoto.src,
								alt: currentPhoto.alt,
								width: 1024,
								height: 1280,
								className: "w-full aspect-[4/5] object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex gap-3",
							role: "group",
							"aria-label": "Photos",
							children: gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPhoto(i),
								"aria-label": `Photo ${i + 1}`,
								"aria-pressed": i === photo,
								className: `w-20 overflow-hidden rounded-[min(1vw,12px)] transition-opacity ${i === photo ? "ring-2 ring-ink ring-offset-2 ring-offset-cream" : "opacity-60 hover:opacity-100"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: g.src,
									alt: "",
									loading: "lazy",
									width: 1024,
									height: 1280,
									className: "w-full aspect-square object-cover"
								})
							}, g.src))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-serif text-3xl sm:text-4xl font-light text-balance max-w-[24ch]",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-2xl tabular-nums shrink-0",
									children: formatPrice(product.price)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-ink/70 max-w-[48ch] leading-relaxed text-pretty",
								children: product.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[12px] uppercase tracking-[0.15em] text-ink/45",
								children: product.fabric
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] uppercase tracking-[0.25em] text-ink/55 mb-3",
									children: ["Size — ", size]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSize(s),
										"aria-pressed": s === size,
										className: `min-w-11 h-11 px-3 grid place-items-center rounded-[min(1vw,12px)] text-[12px] transition-colors ${s === size ? "border-2 border-ink bg-ink text-cream" : "border border-ink/20 hover:border-ink/50"}`,
										children: s
									}, s))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] uppercase tracking-[0.25em] text-ink/55 mb-3",
									children: ["Colour — ", color]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-3",
									children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setColor(c.name),
										"aria-label": c.name,
										"aria-pressed": c.name === color,
										style: { backgroundColor: c.hex },
										className: `size-8 rounded-full shrink-0 ${c.name === color ? "ring-2 ring-ink ring-offset-2 ring-offset-cream" : "ring-1 ring-ink/15"}`
									}, c.name))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											add({
												slug: product.slug,
												name: product.name,
												image: product.image,
												price: product.price,
												size,
												color
											});
											toast.success(`${product.name} added to your bag.`);
										},
										className: "inline-flex items-center bg-ink px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-90",
										children: "Add to bag"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: buyNow,
										className: "inline-flex items-center border border-ink bg-cream px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream",
										children: "Buy now"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
										href: orderLink,
										children: "Order on WhatsApp"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/cart",
										className: "inline-flex items-center text-[12px] uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-ink py-3.5 px-1",
										children: "View bag"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-[12px] text-ink/50 leading-relaxed",
								children: "Complimentary fit consultation · Ships across the UAE in 2–4 days."
							})
						] })]
					})]
				})
			}), related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-16 lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between border-b border-ink/15 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] uppercase tracking-[0.3em] text-ink/60",
							children: ["More in ", product.category]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collection",
							className: "text-[11px] uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-ink",
							children: "All pieces"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10",
						children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
					})]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProductDetail as component };
