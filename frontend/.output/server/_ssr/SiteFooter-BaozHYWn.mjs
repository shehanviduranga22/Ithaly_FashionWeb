import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as getStoredUser, c as useCart, n as clearAuthSession, r as generalWhatsappLink, s as site } from "./auth-DeL9dCwQ.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mail, i as MessageCircle, n as ShoppingBag, o as Instagram, s as Facebook, t as User } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-BaozHYWn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useAuth() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = getStoredUser();
		setUser(stored ? {
			id: stored.id,
			email: stored.email,
			user_metadata: { full_name: stored.fullName }
		} : null);
	}, []);
	return {
		user,
		loading,
		signOut: () => {
			clearAuthSession();
			setUser(null);
		}
	};
}
var nav = [
	{
		to: "/collection",
		label: "Collection"
	},
	{
		to: "/about",
		label: "Maison"
	},
	{
		to: "/delivery",
		label: "Delivery"
	}
];
function SiteHeader() {
	const { count } = useCart();
	const { user } = useAuth();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `site-header sticky top-0 z-50 border-b border-cream/15 bg-ink/95 text-cream backdrop-blur-sm transition-all duration-400 ${scrolled ? "is-scrolled" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "site-brand font-serif text-lg font-medium tracking-[0.14em] text-cream sm:text-xl",
					children: "CIAO D MILANO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-cream/70 md:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "nav-link transition-colors hover:text-cream",
						activeProps: { className: "nav-link active text-cream" },
						children: item.label
					}, item.to))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-5 text-[11px] uppercase tracking-[0.22em] text-cream/70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "nav-link hidden transition-colors hover:text-cream sm:inline",
						children: "Enquire"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: user ? "/account" : "/auth",
						className: "nav-link flex items-center gap-2 transition-colors hover:text-cream",
						"aria-label": user ? "My account" : "Sign in",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
							className: "size-4",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: user ? "Account" : "Sign in"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cart",
						className: "nav-link relative flex items-center gap-2 transition-colors hover:text-cream",
						"aria-label": `Shopping bag, ${count} item${count === 1 ? "" : "s"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
								className: "size-4",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Bag"
							}),
							count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-4 place-items-center rounded-full bg-ink text-[9px] font-medium text-cream tabular-nums",
								children: count
							})
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex items-center gap-6 px-6 pb-3 text-[11px] uppercase tracking-[0.22em] text-cream/70 md:hidden",
			children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				activeProps: { className: "text-cream" },
				className: "nav-link",
				children: item.label
			}, item.to))
		})]
	});
}
var socials = [
	{
		href: site.instagramUrl,
		label: "Instagram",
		Icon: Instagram
	},
	{
		href: generalWhatsappLink,
		label: "WhatsApp",
		Icon: MessageCircle
	},
	{
		href: `mailto:${site.email}`,
		label: "Email",
		Icon: Mail
	},
	{
		href: "https://facebook.com/ciaodmilano",
		label: "Facebook",
		Icon: Facebook
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer border-t border-cream/15 bg-ink text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1240px] flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-end lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-2xl font-semibold tracking-[0.14em]",
					children: site.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-cream/55",
					children: site.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex items-center gap-3",
					children: socials.map(({ href, label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						target: href.startsWith("mailto:") ? void 0 : "_blank",
						rel: "noopener noreferrer",
						"aria-label": label,
						className: "site-footer-social inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink ring-1 ring-cream transition-all hover:bg-white hover:ring-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-4 w-4",
							strokeWidth: 1.75
						})
					}, label))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cream/70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/delivery",
						className: "site-footer-link transition-colors hover:text-ink",
						children: "Delivery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "site-footer-link transition-colors hover:text-ink",
						children: "Maison"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "site-footer-link transition-colors hover:text-ink",
						children: "Contact"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-cream/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1240px] flex-wrap justify-between gap-2 px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-cream/40 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.name,
					" — All plates reserved"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Collection 01 · Dubai" })]
			})
		})]
	});
}
//#endregion
export { SiteHeader as n, useAuth as r, SiteFooter as t };
