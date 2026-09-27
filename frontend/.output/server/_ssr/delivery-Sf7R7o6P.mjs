import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as generalWhatsappLink } from "./auth-DeL9dCwQ.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-d3oh0FjW.mjs";
import { t as HeroSlideshow } from "./HeroSlideshow-DY5MQzEZ.mjs";
import { t as detail_lapel_default } from "./detail-lapel-Cjm3Yr6w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/delivery-Sf7R7o6P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var deliverySlides = [
	{
		src: "/assets/delivery_slideshow%20(1)-BRhtDaAO.png",
		alt: "Tailored camel jacket prepared in soft atelier light"
	},
	{
		src: "/assets/delivery_slideshow%20(2)-BoXu4Z8m.png",
		alt: "Pleated wool trousers folded on a marble plinth"
	},
	{
		src: "/assets/delivery_slideshow%20(3)-C4jpXN4M.png",
		alt: "Tailoring atelier where each order is prepared by hand"
	}
];
var journeyStages = [
	{
		number: "01",
		title: "ORDER RECEIVED",
		text: "Your order is confirmed personally."
	},
	{
		number: "02",
		title: "ATELIER PREPARATION",
		text: "Wrapped, checked and prepared."
	},
	{
		number: "03",
		title: "PRIVATE DISPATCH",
		text: "Tracked delivery across the Emirates."
	},
	{
		number: "04",
		title: "AT YOUR DOOR",
		text: "Delivered within the expected window."
	}
];
var deliveryDetails = [
	{
		number: "01",
		title: "ACROSS THE EMIRATES",
		detail: "Dubai · Abu Dhabi · Sharjah · Ajman · Ras Al Khaimah · Fujairah · Umm Al Quwain",
		value: "UAE"
	},
	{
		number: "02",
		title: "TIMING",
		detail: "2—4 working days for Dubai and Sharjah. 3—5 working days for northern Emirates.",
		value: "2—5 DAYS"
	},
	{
		number: "03",
		title: "CHARGES",
		detail: "AED 30 within the UAE. Complimentary above AED 1,000.",
		value: "AED 30"
	},
	{
		number: "04",
		title: "ORDERING",
		detail: "Orders are confirmed over WhatsApp. We share size, colour and delivery details.",
		value: "WHATSAPP"
	},
	{
		number: "05",
		title: "EXCHANGES",
		detail: "Unworn pieces may be exchanged for a different size within 7 days.",
		value: "7 DAYS"
	},
	{
		number: "06",
		title: "INTERNATIONAL",
		detail: "International delivery is planned for a future season.",
		value: "SOON"
	}
];
function Delivery() {
	const [openDetail, setOpenDetail] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative h-[42vh] min-h-[320px] max-h-[560px] overflow-hidden border-b border-ink/10",
					"aria-label": "Atelier to door",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlideshow, {
						slides: deliverySlides,
						interval: 5500,
						eyebrow: "No. 05 — Delivery",
						title: "CONSIDERED, FROM ATELIER TO DOOR.",
						subtitle: "Everything is packed by hand in Dubai and sent with a tracked courier."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "delivery-page-shell",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "delivery-intro",
							"data-delivery-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "delivery-intro-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "delivery-label",
										children: "DELIVERY / PRIVATE SERVICE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "delivery-intro-heading",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "From our atelier," }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "delivery-intro-italic",
											children: "to your door."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "delivery-intro-text",
										children: "Every order leaves the atelier wrapped, tracked, and personally considered."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "delivery-intro-facts",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "delivery-infographic-block delivery-infographic-block-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "delivery-stat-number",
										children: "2—4"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "delivery-stat-label",
										children: "WORKING DAYS"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "delivery-infographic-block delivery-infographic-block-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "delivery-stat-number",
										children: "AED 30"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "delivery-stat-label",
										children: "UAE FLAT RATE"
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "delivery-journey",
							"data-delivery-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "delivery-label",
									children: "01 / THE JOURNEY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "delivery-journey-line",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "delivery-journey-grid",
									children: journeyStages.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "delivery-stage",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "delivery-stage-number",
												children: stage.number
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: stage.title }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: stage.text })
										]
									}, stage.number))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "delivery-statement",
							"data-delivery-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "delivery-label delivery-statement-label",
									children: "THE CIAO D MILANO STANDARD"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: ["Delivery is not the final step.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "It is part of the experience." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "WRAPPED · TRACKED · PERSONALLY CONSIDERED" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "delivery-details",
							"data-delivery-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "delivery-details-header",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "delivery-label",
									children: "02 / THE FINE PRINT"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: ["DELIVERY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DETAILS" })] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "delivery-detail-list",
								children: deliveryDetails.map((detail, index) => {
									const isOpen = openDetail === index;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `delivery-detail-row ${isOpen ? "is-open" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "delivery-detail-toggle",
											onClick: () => setOpenDetail(isOpen ? null : index),
											"aria-expanded": isOpen,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "delivery-detail-number",
													children: detail.number
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "delivery-detail-title",
													children: detail.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "delivery-detail-value",
													children: detail.value
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `delivery-detail-panel ${isOpen ? "is-open" : ""}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: detail.detail })
										})]
									}, detail.number);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "delivery-packaging",
							"data-delivery-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "delivery-packaging-image-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: detail_lapel_default,
									alt: "Hand-wrapped luxury garment detail with premium tailoring craftsmanship"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "delivery-packaging-caption",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PACKED BY HAND" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CIAO D MILANO / DUBAI" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "delivery-packaging-copy",
								children: ["EVERY PIECE LEAVES", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WITH INTENTION." })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "delivery-private-assistance",
							"data-delivery-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "delivery-private-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "delivery-label delivery-label-light",
										children: "03 / PRIVATE CONCIERGE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: ["Need something", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "more personal?" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“For sizing, delivery arrangements or a private request, speak directly with our atelier.”" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "delivery-private-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "delivery-private-cta",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WHATSAPP CONCIERGE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Available for private assistance" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: generalWhatsappLink,
									target: "_blank",
									rel: "noreferrer noopener",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CONTACT THE ATELIER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "↗"
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "delivery-signature",
							"data-delivery-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "delivery-signature-line",
									children: "FROM OUR HANDS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "delivery-signature-line delivery-signature-line-italic",
									children: "TO YOURS."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "delivery-signature-divider",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "delivery-signature-meta",
									children: "CIAO D MILANO"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "delivery-signature-sub",
									children: "MILANESE TAILORING · DUBAI"
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
export { Delivery as component };
