//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CTk6q4bo.js
var manifest = {
	"b671332314d2bd1d8f8d0c6225c69e0aef185a50c5f9493ec0c7847eba3afbc7": {
		functionName: "confirmPayment_createServerFn_handler",
		importer: () => import("./_ssr/payments.functions-BVvzcebS.mjs")
	},
	"c58bf8e773292ff55e71b89fab0fad0ff9e488d2e88cb96ff3f8267d2be2b78f": {
		functionName: "startPayment_createServerFn_handler",
		importer: () => import("./_ssr/payments.functions-BVvzcebS.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
