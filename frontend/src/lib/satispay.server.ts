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

const HOSTS = {
  production: "authservices.satispay.com",
  sandbox: "staging.authservices.satispay.com",
} as const;

/** AED -> EUR conversion. Satispay settles in EUR only; adjust as needed. */
export const AED_TO_EUR = 0.245;

export function aedToEurCents(amountAed: number): number {
  return Math.max(1, Math.round(amountAed * AED_TO_EUR * 100));
}

function host(): string {
  const env = process.env["SATISPAY_ENV"] === "sandbox" ? "sandbox" : "production";
  return HOSTS[env];
}

function keyId(): string {
  const value = process.env["SATISPAY_KEY_ID"];
  if (!value) throw new Error("Satispay is not configured yet.");
  return value;
}

function privateKeyPem(): string {
  const value = process.env["SATISPAY_PRIVATE_KEY"];
  if (!value) throw new Error("Satispay is not configured yet.");
  return value.replace(/\\n/g, "\n");
}

function base64(bytes: ArrayBuffer): string {
  const view = new Uint8Array(bytes);
  let binary = "";
  for (const byte of view) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function pemToBytes(pem: string): ArrayBuffer {
  const body = pem
    .replace(/-----BEGIN [^-]+-----/g, "")
    .replace(/-----END [^-]+-----/g, "")
    .replace(/\s+/g, "");
  const binary = atob(body);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

async function sign(message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToBytes(privateKeyPem()),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(message),
  );
  return base64(signature);
}

async function satispayRequest<T>(
  method: "GET" | "POST",
  path: string,
  body?: unknown,
): Promise<T> {
  const payload = body === undefined ? "" : JSON.stringify(body);
  const digest = `SHA-256=${base64(
    await crypto.subtle.digest("SHA-256", new TextEncoder().encode(payload)),
  )}`;
  const date = new Date().toUTCString();
  const signingString = [
    `(request-target): ${method.toLowerCase()} ${path}`,
    `host: ${host()}`,
    `date: ${date}`,
    `digest: ${digest}`,
  ].join("\n");

  const signature = await sign(signingString);

  const response = await fetch(`https://${host()}${path}`, {
    method,
    headers: {
      Host: host(),
      Date: date,
      Digest: digest,
      "Content-Type": "application/json",
      Authorization: `Signature keyId="${keyId()}", algorithm="rsa-sha256", headers="(request-target) host date digest", signature="${signature}"`,
    },
    ...(method === "POST" ? { body: payload } : {}),
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Satispay request failed (${response.status}): ${text.slice(0, 300)}`);
  }
  return JSON.parse(text) as T;
}

export type SatispayPayment = {
  id: string;
  status: "PENDING" | "ACCEPTED" | "CANCELED" | "AUTHORIZED";
  redirect_url?: string;
  amount_unit: number;
  currency: string;
};

export async function createSatispayPayment(options: {
  orderId: string;
  amountEurCents: number;
  description: string;
  redirectUrl: string;
}): Promise<SatispayPayment> {
  return satispayRequest<SatispayPayment>("POST", "/g_business/v1/payments", {
    flow: "MATCH_CODE",
    amount_unit: options.amountEurCents,
    currency: "EUR",
    description: options.description,
    external_code: options.orderId,
    callback_url: `${options.redirectUrl}&satispay_id={uuid}`,
    redirect_url: options.redirectUrl,
  });
}

export async function getSatispayPayment(id: string): Promise<SatispayPayment> {
  return satispayRequest<SatispayPayment>(
    "GET",
    `/g_business/v1/payments/${encodeURIComponent(id)}`,
  );
}
