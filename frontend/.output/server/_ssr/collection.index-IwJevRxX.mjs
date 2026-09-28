import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-BaozHYWn.mjs";
import { t as HeroSlideshow } from "./HeroSlideshow-8zIh3d4n.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { a as products, t as categories } from "./products-BLU4_Spt.mjs";
import { t as ProductCard } from "./ProductCard-bPFSXZwA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection.index-IwJevRxX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	const visible = active === "All" ? products : products.filter((p) => p.category === active);
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "collection-landing-panel flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-6",
							"data-page-load-rise": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em]",
								children: ["All", ...categories].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActive(cat),
									className: active === cat ? "text-ink border-b border-ink pb-0.5" : "text-ink/55 transition-colors hover:text-ink pb-0.5",
									children: cat
								}, cat))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10",
							"data-reveal-stagger": true,
							children: visible.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "collection-product-card",
								"data-page-load-rise": true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product })
							}, product.slug))
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
