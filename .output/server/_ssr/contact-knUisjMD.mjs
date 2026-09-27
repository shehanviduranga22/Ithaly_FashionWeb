import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as whatsappLink, n as generalWhatsappLink, r as site } from "./site-BddHkowg.mjs";
import { a as Instagram, i as Mail, o as Facebook, r as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B9yzvQiR.mjs";
import { t as WhatsAppButton } from "./WhatsAppButton-BrkOH2D5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-knUisjMD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	function handleSubmit(e) {
		e.preventDefault();
		window.open(whatsappLink(`Hello ${site.name}.\n\nName: ${name}\nEmail: ${email}\n\n${message}`), "_blank", "noopener,noreferrer");
	}
	const field = "w-full bg-cream border border-ink/15 rounded-[min(1vw,12px)] px-4 py-3 text-sm placeholder:text-ink/35 focus:outline-none focus:border-ink/40";
	const label = "block text-[11px] uppercase tracking-[0.2em] text-ink/55 mb-2";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "bg-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
							children: "No. 06 — Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-serif text-4xl sm:text-5xl font-normal leading-[1.02] text-balance max-w-[20ch]",
							children: "Write to the maison."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-ink/70 max-w-[48ch] leading-relaxed text-pretty",
							children: "For sizing, fabric, availability or a private fitting in Dubai — WhatsApp is the fastest way to reach us, and we answer personally."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
							href: generalWhatsappLink,
							className: "mt-8",
							children: "Order / Enquire on WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-12 space-y-6 border-t border-ink/15 pt-8 text-[15px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-[0.25em] text-ink/55",
									children: "WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1.5 flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "h-4 w-4 text-fawn",
										strokeWidth: 1.75
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: generalWhatsappLink,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "font-medium hover:text-fawn transition-colors",
										children: site.phoneDisplay
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-[0.25em] text-ink/55",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1.5 flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "h-4 w-4 text-fawn",
										strokeWidth: 1.75
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${site.email}`,
										className: "font-medium hover:text-fawn transition-colors",
										children: site.email
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-[0.25em] text-ink/55",
									children: "Instagram"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1.5 flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
										className: "h-4 w-4 text-fawn",
										strokeWidth: 1.75
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: site.instagramUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "font-medium hover:text-fawn transition-colors",
										children: site.instagramHandle
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-[0.25em] text-ink/55",
									children: "Facebook"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1.5 flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
										className: "h-4 w-4 text-fawn",
										strokeWidth: 1.75
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://facebook.com/ciaodmilano",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "font-medium hover:text-fawn transition-colors",
										children: "@ciaodmilano"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-[0.25em] text-ink/55",
									children: "Atelier"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1 text-ink/70",
									children: [site.city, " — by appointment"]
								})] })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "rounded-[min(1vw,12px)] bg-paper ring-1 ring-black/5 p-7 sm:p-9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.25em] text-ink/55",
							children: "Send an enquiry"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: label,
									htmlFor: "name",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									required: true,
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: "Your full name",
									className: field
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: label,
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "you@example.com",
									className: field
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: label,
									htmlFor: "message",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									rows: 4,
									required: true,
									value: message,
									onChange: (e) => setMessage(e.target.value),
									placeholder: "How can we help?",
									className: `${field} resize-none`
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full bg-ink text-cream text-[12px] font-semibold uppercase tracking-[0.2em] py-3.5 rounded-[min(1vw,12px)] ring-1 ring-ink transition-colors hover:bg-ink/85",
									children: "Send via WhatsApp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] text-ink/50 leading-relaxed",
									children: "Your message opens in WhatsApp so we can reply straight away."
								})
							]
						})]
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Contact as component };
