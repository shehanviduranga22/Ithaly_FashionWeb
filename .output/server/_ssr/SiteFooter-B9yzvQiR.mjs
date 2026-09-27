import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useCart, n as generalWhatsappLink, r as site } from "./site-BddHkowg.mjs";
import { t as supabase } from "./client-Bxc8_G9k.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Instagram, i as Mail, n as ShoppingBag, o as Facebook, r as MessageCircle, t as User } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-B9yzvQiR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useAuth() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let unsubscribe;
		try {
			const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
				setUser(session?.user ?? null);
				setLoading(false);
			});
			unsubscribe = () => sub.subscription.unsubscribe();
			supabase.auth.getSession().then(({ data }) => {
				setUser(data.session?.user ?? null);
				setLoading(false);
			}).catch(() => setLoading(false));
		} catch {
			setLoading(false);
		}
		return () => unsubscribe?.();
	}, []);
	return {
		user,
		loading,
		signOut: () => supabase.auth.signOut()
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-ink/95 text-cream backdrop-blur-sm border-b border-cream/15",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1240px] px-6 lg:px-10 h-16 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-serif text-lg sm:text-xl tracking-[0.14em] font-medium text-cream",
					children: "CIAO D MILANO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-cream/70",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "transition-colors hover:text-cream",
						activeProps: { className: "text-cream" },
						children: item.label
					}, item.to))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-5 text-[11px] uppercase tracking-[0.22em] text-cream/70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "hidden sm:inline transition-colors hover:text-cream",
						children: "Enquire"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: user ? "/account" : "/auth",
						className: "flex items-center gap-2 transition-colors hover:text-cream",
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
						className: "relative flex items-center gap-2 transition-colors hover:text-cream",
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
			className: "md:hidden flex items-center gap-6 px-6 pb-3 text-[11px] uppercase tracking-[0.22em] text-cream/70",
			children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				activeProps: { className: "text-cream" },
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
		className: "bg-paper border-t border-ink/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-2xl tracking-[0.14em] font-semibold",
					children: site.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[11px] uppercase tracking-[0.22em] text-ink/55 font-medium",
					children: site.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex items-center gap-3",
					children: socials.map(({ href, label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						target: href.startsWith("mailto:") ? void 0 : "_blank",
						rel: "noopener noreferrer",
						"aria-label": label,
						className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream ring-1 ring-ink transition-all hover:bg-ink/85 hover:ring-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-4 w-4",
							strokeWidth: 1.75
						})
					}, label))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-ink/70 font-medium",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/delivery",
						className: "transition-colors hover:text-ink",
						children: "Delivery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "transition-colors hover:text-ink",
						children: "Maison"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "transition-colors hover:text-ink",
						children: "Contact"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-5 text-[10px] uppercase tracking-[0.2em] text-ink/40 flex flex-wrap justify-between gap-2",
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
export { SiteHeader as n, SiteFooter as t };
