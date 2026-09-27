import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhatsAppButton-BrkOH2D5.js
var import_jsx_runtime = require_jsx_runtime();
function WhatsAppButton({ href, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: `inline-flex items-center gap-2.5 bg-ink text-cream text-[12px] uppercase tracking-[0.2em] py-3.5 px-6 ring-1 ring-ink transition-colors hover:bg-ink/85 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 grid place-items-center size-5 rounded-full bg-cream/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-cream/70" })
		}), children]
	});
}
//#endregion
export { WhatsAppButton as t };
