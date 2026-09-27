import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as generalWhatsappLink, r as site } from "./site-BddHkowg.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B9yzvQiR.mjs";
import { t as HeroSlideshow } from "./HeroSlideshow-B348ghwl.mjs";
import { t as hero_slide_3_default } from "./hero-slide-3-5wvjYLpZ.mjs";
import { n as featuredProducts } from "./products-Ds4FixyM.mjs";
import { n as hero_slide_2_default, t as hero_campaign_default } from "./hero-slide-2-Du7Y8Siz.mjs";
import { t as ProductCard } from "./ProductCard-BZSpZ9is.mjs";
import { t as WhatsAppButton } from "./WhatsAppButton-BrkOH2D5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BxwrpxRA.js
var import_jsx_runtime = require_jsx_runtime();
var heroSlides = [
	{
		src: hero_campaign_default,
		alt: "Man in a charcoal tailored jacket and cream trousers against a warm plaster wall"
	},
	{
		src: hero_slide_2_default,
		alt: "Man in a cream linen shirt beneath a limestone archway"
	},
	{
		src: hero_slide_3_default,
		alt: "Man in a camel double-breasted jacket in an Italian marble arcade"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative h-[74vh] min-h-[520px] w-full overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlideshow, { slides: heroSlides }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-[1240px] px-6 lg:px-10 h-full flex flex-col justify-end pb-12 lg:pb-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "unveil text-cream/70 text-[11px] uppercase tracking-[0.3em] mb-5",
										children: "Autumn — Winter · Collection 01"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "unveil unveil-d1 font-serif text-cream font-normal leading-[0.92] text-4xl sm:text-6xl lg:text-7xl text-balance max-w-[20ch]",
										children: "The Milanese Atelier"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "unveil unveil-d2 mt-5 text-cream/80 max-w-[46ch] text-pretty leading-relaxed",
										children: "Quiet tailoring, cut and finished in the spirit of the Italian maison — released in numbered plates."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "unveil unveil-d3 mt-8 flex flex-wrap items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/collection",
											className: "inline-flex items-center gap-2 bg-cream text-ink text-[11px] font-semibold uppercase tracking-[0.2em] py-3.5 px-6 ring-1 ring-cream/40 transition-colors hover:bg-white",
											children: "View the Collection"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/about",
											className: "inline-flex items-center gap-2 text-cream/85 text-[11px] uppercase tracking-[0.2em] py-3.5 px-2 transition-colors hover:text-cream",
											children: "Our Story →"
										})]
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-20 lg:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid lg:grid-cols-12 gap-10 lg:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
									children: "No. 01 — Provenance"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.05] text-balance max-w-[30ch]",
									children: "A wardrobe composed like an exhibition."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-ink/70 max-w-[52ch] leading-relaxed text-pretty",
									children: "Each piece is presented as a numbered plate in our catalogue — considered proportions, natural fibres, and an unhurried approach to dressing. CIAO D MILANO, at home in the Gulf, tailors for the man who values restraint over noise."
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 lg:mt-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between border-b border-ink/15 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.3em] text-ink/60",
									children: "No. 02 — Featured Plates"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/collection",
									className: "text-[11px] uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-ink",
									children: "All pieces"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10",
								children: featuredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-cream border-t border-ink/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
								children: "No. 03 — Delivery & Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-3xl sm:text-4xl font-normal text-balance max-w-[20ch]",
								children: "Considered, from atelier to door."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 space-y-4 text-[15px] text-ink/75 leading-relaxed",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif text-fawn text-lg leading-none",
											children: "i"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-pretty",
											children: "Complimentary delivery across the UAE on orders above AED 1,000; 2–4 working days from Dubai."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif text-fawn text-lg leading-none",
											children: "ii"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-pretty",
											children: "International delivery is planned for a future season. For now we ship within the Emirates."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif text-fawn text-lg leading-none",
											children: "iii"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-pretty",
											children: [
												"For sizing, fabric or a private fitting, write to",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-ink",
													children: site.email
												}),
												" or message us on WhatsApp."
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
								href: generalWhatsappLink,
								className: "mt-8",
								children: "Order / Enquire on WhatsApp"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[min(1vw,12px)] bg-paper ring-1 ring-black/5 p-7 sm:p-9 self-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.25em] text-ink/55",
									children: "Prefer to write instead?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-ink/70 leading-relaxed text-pretty",
									children: "Send us a note through the contact page and we will reply within one working day — sizing advice, fabric swatches, or a private appointment in Dubai."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "mt-7 inline-flex items-center text-[12px] uppercase tracking-[0.2em] text-ink/70 transition-colors hover:text-ink",
									children: "Go to contact →"
								})
							]
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
