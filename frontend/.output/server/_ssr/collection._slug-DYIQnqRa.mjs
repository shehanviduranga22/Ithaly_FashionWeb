import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-BaozHYWn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection._slug-DYIQnqRa.js
var import_jsx_runtime = require_jsx_runtime();
function PieceNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-28 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-4xl font-light",
						children: "This plate isn't in the catalogue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/collection",
						className: "mt-8 inline-flex bg-ink text-cream text-[12px] uppercase tracking-[0.2em] py-3.5 px-6",
						children: "Back to the collection"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { PieceNotFound as notFoundComponent };
