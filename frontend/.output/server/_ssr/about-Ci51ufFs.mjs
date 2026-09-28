import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-BaozHYWn.mjs";
import { t as HeroSlideshow } from "./HeroSlideshow-8zIh3d4n.mjs";
import { t as detail_lapel_default } from "./detail-lapel-Cjm3Yr6w.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Ci51ufFs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var maisonSlides = [
	{
		src: "/assets/maison_slideshow%20(1)-Cy6wgn69.png",
		alt: "Interior of a tailoring atelier with a cutting table and bolts of fabric"
	},
	{
		src: "/assets/maison_slideshow%20(2)-CR4IjG4g.png",
		alt: "Close detail of refined tailoring and lapel construction"
	},
	{
		src: "/assets/maison_slideshow%20(3)-PYkrP5_2.png",
		alt: "Man in a camel jacket inside an Italian marble arcade"
	}
];
function About() {
	const storyRef = (0, import_react.useRef)(null);
	const craftRef = (0, import_react.useRef)(null);
	const purposeRef = (0, import_react.useRef)(null);
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
				delay: .12
			});
			gsapWithCSS.utils.toArray("[data-about-label]").forEach((element) => {
				gsapWithCSS.fromTo(element, {
					autoAlpha: 0,
					y: 10
				}, {
					autoAlpha: 1,
					y: 0,
					duration: .9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 88%",
						once: true
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-about-headline]").forEach((element) => {
				gsapWithCSS.fromTo(element, {
					autoAlpha: 0,
					y: 22
				}, {
					autoAlpha: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 82%",
						once: true
					}
				});
			});
			gsapWithCSS.fromTo("[data-story-divider]", { scaleX: 0 }, {
				scaleX: 1,
				duration: 1.05,
				ease: "power3.out",
				transformOrigin: "left center",
				scrollTrigger: {
					trigger: storyRef.current,
					start: "top 78%",
					once: true
				}
			});
			gsapWithCSS.utils.toArray("[data-story-col]").forEach((element, index) => {
				gsapWithCSS.fromTo(element, {
					autoAlpha: 0,
					y: 18
				}, {
					autoAlpha: 1,
					y: 0,
					duration: .9,
					delay: index * .12,
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 82%",
						once: true
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-craft-item]").forEach((element, index) => {
				gsapWithCSS.fromTo(element, {
					autoAlpha: 0,
					y: 16
				}, {
					autoAlpha: 1,
					y: 0,
					duration: .9,
					delay: index * .12,
					ease: "power3.out",
					scrollTrigger: {
						trigger: craftRef.current,
						start: "top 82%",
						once: true
					}
				});
			});
			gsapWithCSS.fromTo("[data-mission-vision]", {
				autoAlpha: 0,
				y: 18
			}, {
				autoAlpha: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				stagger: .15,
				scrollTrigger: {
					trigger: purposeRef.current,
					start: "top 80%",
					once: true
				}
			});
			gsapWithCSS.fromTo("[data-cta-divider]", { scaleX: 0 }, {
				scaleX: 1,
				duration: 1,
				ease: "power3.out",
				transformOrigin: "left center",
				scrollTrigger: {
					trigger: "[data-cta-row]",
					start: "top 85%",
					once: true
				}
			});
		});
		return () => context.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative h-[42vh] min-h-[320px] max-h-[560px] overflow-hidden border-b border-ink/10",
					"aria-label": "Inside the maison",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlideshow, {
						slides: maisonSlides,
						interval: 5e3,
						eyebrow: "No. 01 — The Maison",
						title: "An atelier, not a factory.",
						subtitle: "CIAO D MILANO began with a simple idea: that Italian dressing travels well."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "about-maison-intro",
					"aria-label": "Maison introduction",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "about-micro-label",
							"data-about-label": true,
							"data-page-load-rise": true,
							children: "CIAO D MILANO / THE MAISON"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "about-maison-title",
							"data-about-headline": true,
							"data-page-load-rise": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Italian tailoring," }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "about-maison-title-italic",
								children: "a different horizon."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "about-maison-copy",
							"data-about-headline": true,
							"data-page-load-rise": true,
							children: "Founded in Dubai and drawn from the discipline of Milanese tailoring, the label makes fewer, better pieces for a climate and a life that Italy never designed for."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-maison-meta",
							"data-about-label": true,
							"data-page-load-rise": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MILANO" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "about-maison-line",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DUBAI" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					ref: storyRef,
					className: "about-story-section",
					"aria-label": "The story",
					"data-page-load-rise": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-story-header",
							"data-about-label": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02 / THE STORY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A QUIETER APPROACH" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "about-story-divider",
							"data-story-divider": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-story-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "about-story-col about-story-left",
									"data-story-col": true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "about-story-heading",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "It began with" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "a single roll" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "about-story-heading-italic",
												children: "of Biellese wool."
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "about-story-short-rule",
										"aria-hidden": "true"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "about-story-col about-story-center",
									"data-story-col": true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "about-story-number",
										children: "01"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The first collection was cut from a single roll of Biellese wool and offered to forty people. It sold quietly, by word of mouth, in the way good clothes usually do. That run set the pattern we still follow: natural fibres, honest construction, and a catalogue of numbered plates rather than a wall of endless product." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "about-story-col about-story-right",
									"data-story-col": true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "about-story-number",
										children: "02"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every garment is developed against the Gulf — half-linings instead of full, washed linens, open weaves, colours drawn from plaster and sand. Italian in proportion, Emirati in practicality." })]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					ref: craftRef,
					className: "about-craft-strip",
					"aria-label": "Craft principles",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "about-craft-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-craft-item",
								"data-craft-item": true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "about-craft-index",
										children: "01"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "NATURAL FIBRES" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Selected for climate and touch." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-craft-item",
								"data-craft-item": true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "about-craft-index",
										children: "02"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "HAND FINISHED" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Attention in every detail." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-craft-item",
								"data-craft-item": true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "about-craft-index",
										children: "03"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "QUIET PROPORTIONS" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Designed without excess." })
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					ref: purposeRef,
					className: "about-purpose-section",
					"aria-label": "Mission and Vision",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "about-purpose-header",
							"data-about-label": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03 / MISSION & VISION" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "about-purpose-divider",
							"data-story-divider": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "about-purpose-backdrop",
							children: "03"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "about-purpose-visual",
							"aria-label": "Tailoring detail photograph",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: detail_lapel_default,
								alt: "Close detail of tailoring and lapel craftsmanship",
								loading: "lazy",
								className: "about-purpose-visual-image"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-purpose-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-purpose-column",
								"data-mission-vision": true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "about-purpose-number",
										children: "01"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "OUR MISSION" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "about-purpose-rule",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To make quiet, enduring clothes — Italian in spirit, made for real wear — and to sell them personally, one conversation at a time." })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-purpose-column about-purpose-column-right",
								"data-mission-vision": true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "about-purpose-number",
										children: "02"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "OUR VISION" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "about-purpose-rule",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To become the Gulf's reference point for restrained Italian-style dressing, and to carry the CIAO D MILANO catalogue beyond the UAE in the seasons ahead." })
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "about-signature",
					"aria-label": "Brand signature",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "about-signature-line",
							"data-about-headline": true,
							children: ["MILAN IN DISCIPLINE.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "about-signature-italic",
								children: "DUBAI IN CONTEXT."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "about-signature-sub",
							"data-about-label": true,
							children: "CIAO D MILANO in character."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-signature-mark",
							"data-about-label": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "──────"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EST. MMXXVI" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "──────"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "about-collection",
					"aria-label": "Collection CTA",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "about-collection-divider",
						"data-cta-divider": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/collection",
						className: "about-collection-row",
						"data-cta-row": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "about-collection-number",
								children: "04"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "about-collection-main",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EXPLORE THE COLLECTION" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "NUMBERED PIECES / CURRENT COLLECTION" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "about-collection-arrow",
								"aria-hidden": "true",
								children: "↗"
							})
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { About as component };
