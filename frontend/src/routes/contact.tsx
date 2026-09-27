import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Instagram, MessageCircle, Mail, Facebook } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generalWhatsappLink, site, whatsappLink } from "@/lib/site";

const title = "Contact CIAO D MILANO — WhatsApp, Email & Instagram";
const description =
  "Contact CIAO D MILANO in Dubai: message us on WhatsApp, send an enquiry through the form, or reach us by email and Instagram.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    window.open(
      whatsappLink(
        `Hello ${site.name}.\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  }

  const field =
    "w-full bg-cream border border-ink/15 rounded-[min(1vw,12px)] px-4 py-3 text-sm placeholder:text-ink/35 focus:outline-none focus:border-ink/40";
  const label = "block text-[11px] uppercase tracking-[0.2em] text-ink/55 mb-2";

  return (
    <div className="text-ink">
      <SiteHeader />

      <main className="bg-cream">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-fawn">No. 06 — Contact</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-normal leading-[1.02] text-balance max-w-[20ch]">
              Write to the maison.
            </h1>
            <p className="mt-6 text-ink/70 max-w-[48ch] leading-relaxed text-pretty">
              For sizing, fabric, availability or a private fitting in Dubai — WhatsApp is the
              fastest way to reach us, and we answer personally.
            </p>

            <WhatsAppButton href={generalWhatsappLink} className="mt-8">
              Order / Enquire on WhatsApp
            </WhatsAppButton>

            <dl className="mt-12 space-y-6 border-t border-ink/15 pt-8 text-[15px]">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-ink/55">WhatsApp</dt>
                <dd className="mt-1.5 flex items-center gap-2.5">
                  <MessageCircle className="h-4 w-4 text-fawn" strokeWidth={1.75} />
                  <a href={generalWhatsappLink} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-fawn transition-colors">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-ink/55">Email</dt>
                <dd className="mt-1.5 flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-fawn" strokeWidth={1.75} />
                  <a href={`mailto:${site.email}`} className="font-medium hover:text-fawn transition-colors">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-ink/55">Instagram</dt>
                <dd className="mt-1.5 flex items-center gap-2.5">
                  <Instagram className="h-4 w-4 text-fawn" strokeWidth={1.75} />
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-fawn transition-colors"
                  >
                    {site.instagramHandle}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-ink/55">Facebook</dt>
                <dd className="mt-1.5 flex items-center gap-2.5">
                  <Facebook className="h-4 w-4 text-fawn" strokeWidth={1.75} />
                  <a
                    href="https://facebook.com/ciaodmilano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-fawn transition-colors"
                  >
                    @ciaodmilano
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-ink/55">Atelier</dt>
                <dd className="mt-1 text-ink/70">{site.city} — by appointment</dd>
              </div>
            </dl>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-[min(1vw,12px)] bg-paper ring-1 ring-black/5 p-7 sm:p-9"
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-ink/55">Send an enquiry</p>
              <div className="mt-6 space-y-5">
                <div>
                  <label className={label} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    className={`${field} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-ink text-cream text-[12px] font-semibold uppercase tracking-[0.2em] py-3.5 rounded-[min(1vw,12px)] ring-1 ring-ink transition-colors hover:bg-ink/85"
                >
                  Send via WhatsApp
                </button>
                <p className="text-[12px] text-ink/50 leading-relaxed">
                  Your message opens in WhatsApp so we can reply straight away.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
