import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/satispay.server-OV8r4DT-.js
/**
* Satispay Business API helpers (server only).
*
* Requests are signed with the merchant RSA key using the HTTP Signature
* scheme Satispay requires. Web payments are created with a redirect_url, so
* the customer completes the payment on Satispay and is sent back to us.
*
* Required secrets:
*  - SATISPAY_KEY_ID       key id returned when the RSA key was activated
*  - SATISPAY_PRIVATE_KEY  the PKCS#8 PEM private key
*  - SATISPAY_ENV          "production" (default) or "sandbox"
*/
var HOSTS = {
	production: "authservices.satispay.com",
	sandbox: "staging.authservices.satispay.com"
};
/** AED -> EUR conversion. Satispay settles in EUR only; adjust as needed. */
var AED_TO_EUR = .245;
function aedToEurCents(amountAed) {
	return Math.max(1, Math.round(amountAed * AED_TO_EUR * 100));
}
function host() {
	return HOSTS[processModule.env["SATISPAY_ENV"] === "sandbox" ? "sandbox" : "production"];
}
function keyId() {
	const value = processModule.env["SATISPAY_KEY_ID"];
	if (!value) throw new Error("Satispay is not configured yet.");
	return value;
}
function privateKeyPem() {
	const value = processModule.env["SATISPAY_PRIVATE_KEY"];
	if (!value) throw new Error("Satispay is not configured yet.");
	return value.replace(/\\n/g, "\n");
}
function base64(bytes) {
	const view = new Uint8Array(bytes);
	let binary = "";
	for (const byte of view) binary += String.fromCharCode(byte);
	return btoa(binary);
}
function pemToBytes(pem) {
	const body = pem.replace(/-----BEGIN [^-]+-----/g, "").replace(/-----END [^-]+-----/g, "").replace(/\s+/g, "");
	const binary = atob(body);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
	return bytes.buffer;
}
async function sign(message) {
	const key = await crypto.subtle.importKey("pkcs8", pemToBytes(privateKeyPem()), {
		name: "RSASSA-PKCS1-v1_5",
		hash: "SHA-256"
	}, false, ["sign"]);
	return base64(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(message)));
}
async function satispayRequest(method, path, body) {
	const payload = body === void 0 ? "" : JSON.stringify(body);
	const digest = `SHA-256=${base64(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(payload)))}`;
	const date = (/* @__PURE__ */ new Date()).toUTCString();
	const signature = await sign([
		`(request-target): ${method.toLowerCase()} ${path}`,
		`host: ${host()}`,
		`date: ${date}`,
		`digest: ${digest}`
	].join("\n"));
	const response = await fetch(`https://${host()}${path}`, {
		method,
		headers: {
			Host: host(),
			Date: date,
			Digest: digest,
			"Content-Type": "application/json",
			Authorization: `Signature keyId="${keyId()}", algorithm="rsa-sha256", headers="(request-target) host date digest", signature="${signature}"`
		},
		...method === "POST" ? { body: payload } : {}
	});
	const text = await response.text();
	if (!response.ok) throw new Error(`Satispay request failed (${response.status}): ${text.slice(0, 300)}`);
	return JSON.parse(text);
}
async function createSatispayPayment(options) {
	return satispayRequest("POST", "/g_business/v1/payments", {
		flow: "MATCH_CODE",
		amount_unit: options.amountEurCents,
		currency: "EUR",
		description: options.description,
		external_code: options.orderId,
		callback_url: `${options.redirectUrl}&satispay_id={uuid}`,
		redirect_url: options.redirectUrl
	});
}
async function getSatispayPayment(id) {
	return satispayRequest("GET", `/g_business/v1/payments/${encodeURIComponent(id)}`);
}
//#endregion
export { aedToEurCents, createSatispayPayment, getSatispayPayment };
