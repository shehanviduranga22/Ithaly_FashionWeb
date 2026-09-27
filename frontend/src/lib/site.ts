/**
 * Brand + contact configuration.
 * Update these values with the real business details.
 */
export const site = {
  name: "CIAO D MILANO",
  tagline: "Milanese tailoring · Dubai, UAE",
  email: "atelier@ciaodmilano.ae",
  phoneDisplay: "+971 50 000 0000",
  /** Digits only, international format — used to build wa.me links. */
  whatsappNumber: "971500000000",
  instagramHandle: "@ciaodmilano",
  instagramUrl: "https://instagram.com/ciaodmilano",
  city: "Dubai, United Arab Emirates",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const generalWhatsappLink = whatsappLink(
  `Hello ${site.name}, I would like to enquire about your collection.`,
);
