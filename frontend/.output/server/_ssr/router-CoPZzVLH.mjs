import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { i as getAuthToken, s as site, t as CartProvider } from "./auth-DeL9dCwQ.mjs";
import { M as redirect, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$12 } from "./collection._slug-D48Qjbc_.mjs";
import { t as Route$13 } from "./payment-return-Cr_5yEAm.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CoPZzVLH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BuASJYEB.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
gsapWithCSS.registerPlugin(ScrollTrigger);
function SiteMotion() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			lerp: .08,
			smoothWheel: true
		});
		const raf = (time) => {
			lenis.raf(time * 1e3);
		};
		lenis.on("scroll", ScrollTrigger.update);
		const context = gsapWithCSS.context(() => {
			gsapWithCSS.ticker.add(raf);
			gsapWithCSS.ticker.lagSmoothing(0);
			gsapWithCSS.utils.toArray("[data-reveal]").forEach((element) => {
				gsapWithCSS.fromTo(element, {
					autoAlpha: 0,
					y: 42
				}, {
					autoAlpha: 1,
					y: 0,
					duration: 1.15,
					delay: Number(element.dataset.revealDelay ?? 0),
					ease: "power2.out",
					scrollTrigger: {
						trigger: element,
						start: "top 86%",
						once: true
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-reveal-stagger]").forEach((group) => {
				const children = group.children;
				gsapWithCSS.fromTo(children, {
					autoAlpha: 0,
					y: 24
				}, {
					autoAlpha: 1,
					y: 0,
					duration: .95,
					stagger: .12,
					ease: "power2.out",
					scrollTrigger: {
						trigger: group,
						start: "top 84%",
						once: true
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-reveal-image]").forEach((element) => {
				gsapWithCSS.fromTo(element, {
					clipPath: "inset(12% 0 12% 0)",
					scale: 1.04
				}, {
					clipPath: "inset(0% 0 0% 0)",
					scale: 1,
					duration: 1.35,
					ease: "power3.inOut",
					scrollTrigger: {
						trigger: element,
						start: "top 84%",
						once: true
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-parallax]").forEach((element) => {
				gsapWithCSS.to(element, {
					yPercent: 14,
					scale: 1.08,
					ease: "none",
					scrollTrigger: {
						trigger: element,
						start: "top top",
						end: "bottom top",
						scrub: true
					}
				});
			});
		});
		return () => {
			gsapWithCSS.ticker.remove(raf);
			lenis.off("scroll", ScrollTrigger.update);
			context.revert();
			lenis.destroy();
		};
	}, [pathname]);
	return null;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CIAO D MILANO — Luxury Italian-Style Clothing, Dubai" },
			{
				name: "description",
				content: "CIAO D MILANO: Italian-inspired luxury menswear in Dubai. Jackets, shirts, trousers and tees, ordered on WhatsApp."
			},
			{
				property: "og:site_name",
				content: "CIAO D MILANO"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteMotion, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		] })
	});
}
var $$splitComponentImporter$10 = () => import("./routes-yGH4fuEz.mjs");
var title$4 = "CIAO D MILANO — Luxury Italian-Style Clothing in Dubai, UAE";
var description$4 = "CIAO D MILANO is a luxury Italian-inspired menswear label in Dubai. Discover tailored jackets, shirts, trousers and tees — order or enquire on WhatsApp.";
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$10 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$4 },
			{
				name: "description",
				content: description$4
			},
			{
				property: "og:title",
				content: title$4
			},
			{
				property: "og:description",
				content: description$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ClothingStore",
				name: site.name,
				description: description$4,
				address: {
					"@type": "PostalAddress",
					addressLocality: "Dubai",
					addressCountry: "AE"
				},
				email: site.email,
				telephone: `+${site.whatsappNumber}`,
				sameAs: [site.instagramUrl]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./route-Di7iQBCH.mjs");
var Route$9 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		if (!getAuthToken()) throw redirect({ to: "/auth" });
		return {};
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./about-DrjSmQ4B.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var title$3 = "About CIAO D MILANO — Italian-Inspired Tailoring in Dubai";
var description$3 = "The story behind CIAO D MILANO: an Italian-inspired menswear maison based in Dubai, built on quiet tailoring, natural fibres and small, considered runs.";
var Route$8 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: title$3 },
			{
				name: "description",
				content: description$3
			},
			{
				property: "og:title",
				content: title$3
			},
			{
				property: "og:description",
				content: description$3
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./auth-uRYtrZom.mjs");
var Route$7 = createFileRoute("/auth")({
	head: () => {
		const title = "Client Account — Sign In or Register | CIAO D MILANO";
		const description = "Sign in to your CIAO D MILANO client account to save your details, review your cart and complete an order.";
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: "/auth"
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./cart-CRYd5GRP.mjs");
var Route$6 = createFileRoute("/cart")({
	head: () => {
		const title = "Shopping Bag — CIAO D MILANO";
		const description = "Review the pieces in your CIAO D MILANO shopping bag and continue to checkout with UAE delivery.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "robots",
				content: "noindex"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-EZcmnVPx.mjs");
var title$2 = "Contact CIAO D MILANO — WhatsApp, Email & Instagram";
var description$2 = "Contact CIAO D MILANO in Dubai: message us on WhatsApp, send an enquiry through the form, or reach us by email and Instagram.";
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: title$2 },
			{
				name: "description",
				content: description$2
			},
			{
				property: "og:title",
				content: title$2
			},
			{
				property: "og:description",
				content: description$2
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./delivery-Sf7R7o6P.mjs");
var title$1 = "Delivery Information — CIAO D MILANO, UAE";
var description$1 = "UAE delivery information for CIAO D MILANO: 2–4 working days from Dubai, complimentary shipping above AED 1,000, cash or transfer on confirmation.";
var Route$4 = createFileRoute("/delivery")({
	head: () => ({
		meta: [
			{ title: title$1 },
			{
				name: "description",
				content: description$1
			},
			{
				property: "og:title",
				content: title$1
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/delivery"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/delivery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./account-yqTCpWpw.mjs");
var Route$3 = createFileRoute("/_authenticated/account")({
	head: () => ({ meta: [
		{ title: "My Account — CIAO D MILANO" },
		{
			name: "description",
			content: "Manage your CIAO D MILANO client details, delivery address and order history."
		},
		{
			property: "og:title",
			content: "My Account — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Manage your client details, delivery address and order history."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./checkout-BL3CBRIU.mjs");
var Route$2 = createFileRoute("/_authenticated/checkout")({
	head: () => ({ meta: [
		{ title: "Checkout — CIAO D MILANO" },
		{
			name: "description",
			content: "Confirm your delivery details and place your CIAO D MILANO order."
		},
		{
			property: "og:title",
			content: "Checkout — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Confirm your delivery details and place your order."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./payment-details-COZAFU_I.mjs");
var Route$1 = createFileRoute("/_authenticated/payment-details")({
	head: () => ({ meta: [
		{ title: "Payment Details - CIAO D MILANO" },
		{
			name: "description",
			content: "Review your card details before secure payment."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./collection.index-eOVfH7lF.mjs");
var title = "Collection — Shirts, Trousers, Jackets & Tees | CIAO D MILANO";
var description = "Browse the CIAO D MILANO collection: Italian-inspired t-shirts, shirts, trousers and jackets with sizes, colours and AED prices. Order on WhatsApp.";
var Route = createFileRoute("/collection/")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/collection"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/collection"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var AuthenticatedRouteRoute = Route$9.update({
	id: "/_authenticated",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$8.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var AuthRoute = Route$7.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$11
});
var CartRoute = Route$6.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var DeliveryRoute = Route$4.update({
	id: "/delivery",
	path: "/delivery",
	getParentRoute: () => Route$11
});
var AuthenticatedAccountRoute = Route$3.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedCheckoutRoute = Route$2.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedPaymentDetailsRoute = Route$1.update({
	id: "/payment-details",
	path: "/payment-details",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedPaymentReturnRoute = Route$13.update({
	id: "/payment-return",
	path: "/payment-return",
	getParentRoute: () => AuthenticatedRouteRoute
});
var CollectionIndexRoute = Route.update({
	id: "/collection/",
	path: "/collection/",
	getParentRoute: () => Route$11
});
var CollectionSlugRoute = Route$12.update({
	id: "/collection/$slug",
	path: "/collection/$slug",
	getParentRoute: () => Route$11
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedAccountRoute,
	AuthenticatedCheckoutRoute,
	AuthenticatedPaymentDetailsRoute,
	AuthenticatedPaymentReturnRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AboutRoute,
	AuthRoute,
	CartRoute,
	ContactRoute,
	DeliveryRoute,
	CollectionSlugRoute,
	CollectionIndexRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
