import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DeL9dCwQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "cdm-cart-v1";
var CartContext = (0, import_react.createContext)(null);
function itemKey(slug, size, color) {
	return `${slug}|${size}|${color}`;
}
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw) setItems(JSON.parse(raw));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		} catch {}
	}, [items]);
	const value = (0, import_react.useMemo)(() => {
		return {
			items,
			count: items.reduce((n, i) => n + i.quantity, 0),
			subtotal: items.reduce((n, i) => n + i.quantity * i.price, 0),
			add: (item, quantity = 1) => {
				const key = itemKey(item.slug, item.size, item.color);
				setItems((prev) => {
					if (prev.find((i) => i.key === key)) return prev.map((i) => i.key === key ? {
						...i,
						quantity: i.quantity + quantity
					} : i);
					return [...prev, {
						...item,
						key,
						quantity
					}];
				});
			},
			setQuantity: (key, quantity) => setItems((prev) => quantity <= 0 ? prev.filter((i) => i.key !== key) : prev.map((i) => i.key === key ? {
				...i,
				quantity
			} : i)),
			remove: (key) => setItems((prev) => prev.filter((i) => i.key !== key)),
			clear: () => setItems([])
		};
	}, [items]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value,
		children
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart must be used inside CartProvider");
	return ctx;
}
/**
* Brand + contact configuration.
* Update these values with the real business details.
*/
var site = {
	name: "CIAO D MILANO",
	tagline: "Milanese tailoring · Dubai, UAE",
	email: "atelier@ciaodmilano.ae",
	phoneDisplay: "+971 50 000 0000",
	/** Digits only, international format — used to build wa.me links. */
	whatsappNumber: "971500000000",
	instagramHandle: "@ciaodmilano",
	instagramUrl: "https://instagram.com/ciaodmilano",
	city: "Dubai, United Arab Emirates"
};
function whatsappLink(message) {
	return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
var generalWhatsappLink = whatsappLink(`Hello ${site.name}, I would like to enquire about your collection.`);
var tokenKey = "cdm-auth-token";
var userKey = "cdm-auth-user";
function getAuthToken() {
	if (typeof window === "undefined") return null;
	return window.localStorage.getItem(tokenKey);
}
function getStoredUser() {
	if (typeof window === "undefined") return null;
	const raw = window.localStorage.getItem(userKey);
	if (!raw) return null;
	try {
		return JSON.parse(raw);
	} catch {
		window.localStorage.removeItem(userKey);
		return null;
	}
}
function saveAuthSession(token, user) {
	window.localStorage.setItem(tokenKey, token);
	window.localStorage.setItem(userKey, JSON.stringify(user));
}
function clearAuthSession() {
	window.localStorage.removeItem(tokenKey);
	window.localStorage.removeItem(userKey);
}
//#endregion
export { getStoredUser as a, useCart as c, getAuthToken as i, whatsappLink as l, clearAuthSession as n, saveAuthSession as o, generalWhatsappLink as r, site as s, CartProvider as t };
