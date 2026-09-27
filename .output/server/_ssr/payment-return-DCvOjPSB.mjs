import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-return-DCvOjPSB.js
var $$splitComponentImporter = () => import("./payment-return-B4oO7jRJ.mjs");
var Route = createFileRoute("/_authenticated/payment-return")({
	validateSearch: (search) => ({
		order: typeof search["order"] === "string" ? search["order"] : void 0,
		method: typeof search["method"] === "string" ? search["method"] : void 0,
		session_id: typeof search["session_id"] === "string" ? search["session_id"] : void 0
	}),
	head: () => ({ meta: [
		{ title: "Payment — CIAO D MILANO" },
		{
			name: "description",
			content: "Your CIAO D MILANO payment confirmation."
		},
		{
			property: "og:title",
			content: "Payment — CIAO D MILANO"
		},
		{
			property: "og:description",
			content: "Your payment confirmation."
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
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
