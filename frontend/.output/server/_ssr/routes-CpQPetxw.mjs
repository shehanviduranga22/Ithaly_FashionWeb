import { n as __toESM } from "../_runtime.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as generalWhatsappLink } from "./auth-DeL9dCwQ.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-BaozHYWn.mjs";
import { t as HeroSlideshow } from "./HeroSlideshow-8zIh3d4n.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as featuredProducts } from "./products-BLU4_Spt.mjs";
import { t as ProductCard } from "./ProductCard-bPFSXZwA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CpQPetxw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var home_slideshow__1__default = "/assets/home_slideshow%20(1)-B1EYMxPs.png";
var home_slideshow__2__default = "/assets/home_slideshow%20(2)-Da1c091l.png";
var home_slideshow__3__default = "/assets/home_slideshow%20(3)-bKQWwL0t.png";
var atelier_default = "/assets/atelier-1_6TRPrf.jpg";
var heroSlides = [
	{
		src: home_slideshow__1__default,
		alt: "Man in a charcoal tailored jacket and cream trousers against a warm plaster wall"
	},
	{
		src: home_slideshow__2__default,
		alt: "Man in a cream linen shirt beneath a limestone archway"
	},
	{
		src: home_slideshow__3__default,
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0",
							"data-parallax": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlideshow, { slides: heroSlides })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-[1240px] px-6 lg:px-10 h-full flex flex-col justify-end pb-12 lg:pb-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-cream/70 text-[11px] uppercase tracking-[0.3em] mb-5",
										children: "Autumn — Winter · Collection 01"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
										initial: {
											opacity: 0,
											y: 72
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											duration: 1.1,
											ease: [
												.2,
												.7,
												.2,
												1
											],
											delay: .15
										},
										className: "font-serif text-cream font-normal leading-[0.92] text-4xl sm:text-6xl lg:text-7xl text-balance max-w-[20ch]",
										children: "FUTURE CLASSICS"
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden border-y border-ink/10 bg-ink py-3 text-cream",
					"aria-label": "Collection announcement",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ticker-track flex w-max items-center gap-8 whitespace-nowrap text-[11px] uppercase tracking-[0.3em]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NEW FORMS ✦ MILANO 2026 ✦ LIMITED SERIES" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "NEW FORMS ✦ MILANO 2026 ✦ LIMITED SERIES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "NEW FORMS ✦ MILANO 2026 ✦ LIMITED SERIES"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-20 lg:py-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center text-center",
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
								children: "No. 01 — Provenance"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "exhibition-shell mt-6 w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "exhibition-heading text-4xl sm:text-5xl lg:text-[4rem] leading-[1.02] text-balance max-w-[22ch]",
									children: "A WARDROBE COMPOSED LIKE AN EXIBITION."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "exhibition-copy mt-6 text-ink/70 max-w-[62ch] leading-relaxed text-pretty",
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
								"data-reveal-stagger": true,
								children: featuredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryContactSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function DeliveryContactSection() {
	const sectionRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const section = sectionRef.current;
		if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const context = gsapWithCSS.context(() => {
			const revealItems = section.querySelectorAll("[data-delivery-reveal]");
			const headlineLines = section.querySelectorAll("[data-headline-line]");
			const image = section.querySelector("[data-delivery-image]");
			gsapWithCSS.fromTo(revealItems, {
				autoAlpha: 0,
				y: 28
			}, {
				autoAlpha: 1,
				y: 0,
				duration: .9,
				stagger: .12,
				ease: "power3.out",
				scrollTrigger: {
					trigger: section,
					start: "top 78%",
					once: true
				}
			});
			gsapWithCSS.fromTo(headlineLines, { yPercent: 110 }, {
				yPercent: 0,
				duration: 1.1,
				stagger: .12,
				ease: "power4.out",
				scrollTrigger: {
					trigger: section,
					start: "top 72%",
					once: true
				}
			});
			if (image) {
				gsapWithCSS.fromTo(image, { clipPath: "inset(100% 0 0 0)" }, {
					clipPath: "inset(0% 0 0 0)",
					duration: 1.5,
					ease: "power4.inOut",
					scrollTrigger: {
						trigger: section,
						start: "top 70%",
						once: true
					}
				});
				gsapWithCSS.to(image, {
					yPercent: -5,
					scale: 1.04,
					ease: "none",
					scrollTrigger: {
						trigger: image,
						start: "top bottom",
						end: "bottom top",
						scrub: true
					}
				});
			}
		}, section);
		return () => context.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: sectionRef,
		className: "border-t border-ink/10 bg-cream",
		"aria-labelledby": "private-service-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:gap-20 lg:px-16 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-8 text-[10px] uppercase tracking-[0.3em] text-fawn",
						"data-delivery-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03 / Private Service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-ink/45",
							children: [
								"Milano ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-1 text-fawn",
									children: "→"
								}),
								" Dubai"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "private-service-title",
						className: "mt-14 max-w-[10ch] font-sans text-[clamp(2.6rem,5.6vw,5.5rem)] font-medium uppercase leading-[0.86] tracking-[-0.045em] text-ink sm:mt-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									"data-headline-line": true,
									children: "Delivered with"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									"data-headline-line": true,
									children: "the same care"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block overflow-hidden font-serif text-[1.06em] font-normal italic normal-case tracking-[-0.025em] text-fawn",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									"data-headline-line": true,
									children: "as it was made."
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-9 max-w-[38rem] text-base leading-relaxed text-ink/65 sm:text-lg",
						"data-delivery-reveal": true,
						children: "Every piece leaves our atelier with intention — from our hands to your door."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 grid border-y border-ink/15 sm:grid-cols-3",
						"data-delivery-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-ink/15 py-5 sm:border-b-0 sm:border-r sm:pr-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-[0.2em] text-fawn",
										children: "01"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-[11px] font-medium uppercase tracking-[0.18em]",
										children: "Complimentary delivery"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-serif text-2xl",
										children: "AED 1,000+"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-ink/50",
										children: "UAE orders"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-ink/15 py-5 sm:border-b-0 sm:border-r sm:px-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-[0.2em] text-fawn",
										children: "02"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-[11px] font-medium uppercase tracking-[0.18em]",
										children: "Delivery time"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-serif text-2xl",
										children: "2—4 days"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-ink/50",
										children: "Across the UAE"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-5 sm:pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-[0.2em] text-fawn",
										children: "03"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-[11px] font-medium uppercase tracking-[0.18em]",
										children: "Private assistance"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-serif text-2xl",
										children: "01:01"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-ink/50",
										children: "Sizing · Fabric · Fittings"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14",
						"data-delivery-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: generalWhatsappLink,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group flex w-full items-center justify-between border-y border-ink py-5 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-500 hover:bg-ink hover:px-5 hover:text-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp concierge" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl font-normal transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1",
								children: "↗"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-[11px] uppercase tracking-[0.18em] text-ink/45",
							children: [
								"Prefer a private conversation?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-ink transition-colors hover:text-fawn",
									children: "Contact the maison ↗"
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "relative min-h-[500px] overflow-hidden sm:min-h-[680px] lg:min-h-[780px]",
				"data-delivery-reveal": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: atelier_default,
					alt: "The CIAO D MILANO atelier, where garments are cut and finished by hand",
					className: "absolute inset-0 h-[108%] w-full object-cover",
					"data-delivery-image": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-cream drop-shadow-sm",
					children: "Private service / CIAO D MILANO"
				})]
			})]
		})
	});
}
//#endregion
export { Home as component };
