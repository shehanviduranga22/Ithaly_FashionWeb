import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HeroSlideshow-B348ghwl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroSlideshow({ slides, interval = 5e3 }) {
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (slides.length < 2) return;
		const id = setInterval(() => {
			setActive((i) => (i + 1) % slides.length);
		}, interval);
		return () => clearInterval(id);
	}, [slides.length, interval]);
	if (slides.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [slides.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: slide.src,
		alt: i === active ? slide.alt : "",
		"aria-hidden": i !== active,
		width: 1920,
		height: 1088,
		loading: i === active ? "eager" : "lazy",
		className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-out ${i === active ? "opacity-100" : "opacity-0"}`
	}, slide.src)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute bottom-4 right-6 lg:right-10 z-20 flex items-center gap-2",
		children: slides.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": `Go to slide ${i + 1}`,
			onClick: () => setActive(i),
			className: `h-1 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-cream" : "w-3 bg-cream/40 hover:bg-cream/70"}`
		}, i))
	})] });
}
//#endregion
export { HeroSlideshow as t };
