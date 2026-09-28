import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, Facebook } from "lucide-react";
import { generalWhatsappLink, site } from "@/lib/site";

const socials = [
  { href: site.instagramUrl, label: "Instagram", Icon: Instagram },
  { href: generalWhatsappLink, label: "WhatsApp", Icon: MessageCircle },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
  { href: "https://facebook.com/ciaodmilano", label: "Facebook", Icon: Facebook },
];

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-cream/15 bg-ink text-cream">
      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-end lg:px-10">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-[0.14em]">{site.name}</p>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-cream/55">{site.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="site-footer-social inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink ring-1 ring-cream transition-all hover:bg-white hover:ring-white"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cream/70">
          <Link to="/delivery" className="site-footer-link transition-colors hover:text-ink">
            Delivery
          </Link>
          <Link to="/about" className="site-footer-link transition-colors hover:text-ink">
            Maison
          </Link>
          <Link to="/contact" className="site-footer-link transition-colors hover:text-ink">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-2 px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-cream/40 lg:px-10">
          <span>© {new Date().getFullYear()} {site.name} — All plates reserved</span>
          <span>Collection 01 · Dubai</span>
        </div>
      </div>
    </footer>
  );
}
