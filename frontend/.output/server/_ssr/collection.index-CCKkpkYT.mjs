import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-BaozHYWn.mjs";
import { t as HeroSlideshow } from "./HeroSlideshow-8zIh3d4n.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { a as products, t as categories } from "./products-BLU4_Spt.mjs";
import { t as ProductCard } from "./ProductCard-bPFSXZwA.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection.index-CCKkpkYT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var collectionSlides = [
	{
		src: "/assets/collection_slideshow%20(1)-CCo8HEiX.png",
		alt: "Tailored jacket from the collection"
	},
	{
		src: "/assets/collection_slideshow%20(2)-VBDAWuJf.png",
		alt: "Linen shirt from the collection"
	},
	{
		src: "/assets/collection_slideshow%20(3)-B-zA4VAi.png",
		alt: "Tailored trousers from the collection"
	}
];
function Collection() {
	const [active, setActive] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)("");
	const visible = products.filter((product) => {
		const matchesCategory = active === "All" || product.category === active;
		const matchesQuery = `${product.name} ${product.category} ${product.plate} ${product.summary}`.toLowerCase().includes(query.trim().toLowerCase());
		return matchesCategory && matchesQuery;
	});
	const collectionRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const context = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo("[data-page-load-rise]", {
				autoAlpha: 0,
				y: 46
			}, {
				autoAlpha: 1,
				y: 0,
				duration: 1.1,
				ease: "power3.out",
				stagger: .08,
				delay: .15
			});
			gsapWithCSS.fromTo(".collection-landing-panel", {
				autoAlpha: 0,
				y: 46
			}, {
				autoAlpha: 1,
				y: 0,
				duration: 1.1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: collectionRef.current,
					start: "top 72%",
					once: true
				}
			});
			gsapWithCSS.utils.toArray(".collection-product-card").forEach((element) => {
				gsapWithCSS.fromTo(element, {
					autoAlpha: 0,
					y: 42
				}, {
					autoAlpha: 1,
					y: 0,
					duration: .9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 84%",
						once: true
					}
				});
			});
		}, collectionRef);
		return () => context.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "bg-paper",
				ref: collectionRef,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "collection-landing-panel relative h-[42vh] min-h-[320px] max-h-[560px] overflow-hidden border-b border-ink/10",
					"aria-label": "Collection highlights",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlideshow, {
						slides: collectionSlides,
						interval: 4500,
						eyebrow: "No. 04 — The Collection",
						title: "PLATES BY CATEGORY"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "collection-landing-panel flex flex-col gap-6 border-b border-ink/15 pb-6 lg:flex-row lg:items-end lg:justify-between",
							"data-page-load-rise": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em]",
								children: ["All", ...categories].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActive(cat),
									className: active === cat ? "text-ink border-b border-ink pb-0.5" : "text-ink/55 transition-colors hover:text-ink pb-0.5",
									children: cat
								}, cat))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "relative block w-full max-w-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Search collection items"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "search",
										value: query,
										onChange: (event) => setQuery(event.target.value),
										placeholder: "Search collection",
										className: "h-11 border border-ink/15 bg-white pl-9 text-sm text-ink placeholder:text-ink/45 focus-visible:ring-ink/20"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10",
							"data-reveal-stagger": true,
							children: visible.length > 0 ? visible.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "collection-product-card",
								"data-page-load-rise": true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product })
							}, product.slug)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-full rounded-[1.5rem] border border-dashed border-ink/15 bg-white/50 p-10 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.2em] text-ink/50",
									children: "No items found"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-ink/70",
									children: "Try another keyword or switch back to the full collection."
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-14 text-[12px] uppercase tracking-[0.2em] text-ink/50",
							"data-page-load-rise": true,
							children: [
								"Every plate can be ordered or reserved on WhatsApp ·",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-ink/70 transition-colors hover:text-ink",
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
