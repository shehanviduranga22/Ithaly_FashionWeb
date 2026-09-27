import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { O as isRedirect, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-BFFE07zL.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CTk6q4bo.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-UH_Jp6hR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payments.functions-TlABjn8v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Starts a payment for an order the signed-in customer owns and returns the
* URL the browser should be sent to (Stripe Checkout or Satispay).
*/
var startPayment = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => {
	if (!input.orderId) throw new Error("Missing order.");
	if (input.method !== "card" && input.method !== "satispay") throw new Error("Unsupported payment method.");
	return input;
}).handler(createSsrRpc("c58bf8e773292ff55e71b89fab0fad0ff9e488d2e88cb96ff3f8267d2be2b78f"));
/** Re-checks the provider after the customer returns and settles the order. */
var confirmPayment = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => {
	if (!input.orderId) throw new Error("Missing order.");
	return input;
}).handler(createSsrRpc("b671332314d2bd1d8f8d0c6225c69e0aef185a50c5f9493ec0c7847eba3afbc7"));
//#endregion
export { startPayment as n, useServerFn as r, confirmPayment as t };
