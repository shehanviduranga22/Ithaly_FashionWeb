import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";
import { generalWhatsappLink, site } from "@/lib/site";
import heroImage from "@/assets/home_slideshow (1).png";
import heroSlide2 from "@/assets/home_slideshow (2).png";
import heroSlide3 from "@/assets/home_slideshow (3).png";
import atelierImage from "@/assets/atelier.jpg";
import { HeroSlideshow, type Slide } from "@/components/HeroSlideshow";
import { motion } from "framer-motion";

const heroSlides: Slide[] = [
  {
    src: heroImage,
    alt: "Man in a charcoal tailored jacket and cream trousers against a warm plaster wall",
  },
  { src: heroSlide2, alt: "Man in a cream linen shirt beneath a limestone archway" },
  { src: heroSlide3, alt: "Man in a camel double-breasted jacket in an Italian marble arcade" },
];

const title = "CIAO D MILANO — Luxury Italian-Style Clothing in Dubai, UAE";
const description =
  "CIAO D MILANO is a luxury Italian-inspired menswear label in Dubai. Discover tailored jackets, shirts, trousers and tees — order or enquire on WhatsApp.";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: site.name,
          description,
          address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
          email: site.email,
          telephone: `+${site.whatsappNumber}`,
          sameAs: [site.instagramUrl],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="text-ink">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative h-[74vh] min-h-[520px] w-full overflow-hidden">
          <div className="absolute inset-0" data-parallax>
            <HeroSlideshow slides={heroSlides} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
          <div className="absolute inset-0">
            <div className="mx-auto max-w-[1240px] px-6 lg:px-10 h-full flex flex-col justify-end pb-12 lg:pb-16">
              <p className="text-cream/70 text-[11px] uppercase tracking-[0.3em] mb-5">
                Autumn — Winter · Collection 01
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 72 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 }}
                className="font-serif text-cream font-normal leading-[0.92] text-4xl sm:text-6xl lg:text-7xl text-balance max-w-[20ch]"
              >
                FUTURE CLASSICS
              </motion.h1>
              <p className="unveil unveil-d2 mt-5 text-cream/80 max-w-[46ch] text-pretty leading-relaxed">
                Quiet tailoring, cut and finished in the spirit of the Italian maison — released in
                numbered plates.
              </p>
              <div className="unveil unveil-d3 mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/collection"
                  className="inline-flex items-center gap-2 bg-cream text-ink text-[11px] font-semibold uppercase tracking-[0.2em] py-3.5 px-6 ring-1 ring-cream/40 transition-colors hover:bg-white"
                >
                  View the Collection
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-cream/85 text-[11px] uppercase tracking-[0.2em] py-3.5 px-2 transition-colors hover:text-cream"
                >
                  Our Story →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-ink/10 bg-ink py-3 text-cream" aria-label="Collection announcement">
          <div className="ticker-track flex w-max items-center gap-8 whitespace-nowrap text-[11px] uppercase tracking-[0.3em]">
            <span>NEW FORMS ✦ MILANO 2026 ✦ LIMITED SERIES</span>
            <span aria-hidden="true">NEW FORMS ✦ MILANO 2026 ✦ LIMITED SERIES</span>
            <span aria-hidden="true">NEW FORMS ✦ MILANO 2026 ✦ LIMITED SERIES</span>
          </div>
        </div>

        {/* Intro + featured plates */}
        <section className="bg-paper">
          <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-20 lg:py-28">
            <div className="flex flex-col items-center justify-center text-center" data-reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-fawn">
                No. 01 — Provenance
              </p>
              <div className="exhibition-shell mt-6 w-full">
                <h2 className="exhibition-heading text-4xl sm:text-5xl lg:text-[4rem] leading-[1.02] text-balance max-w-[22ch]">
                  A WARDROBE COMPOSED LIKE AN EXIBITION.
                </h2>
                <p className="exhibition-copy mt-6 text-ink/70 max-w-[62ch] leading-relaxed text-pretty">
                  Each piece is presented as a numbered plate in our catalogue — considered
                  proportions, natural fibres, and an unhurried approach to dressing. CIAO D MILANO,
                  at home in the Gulf, tailors for the man who values restraint over noise.
                </p>
              </div>
            </div>

            <div className="mt-16 lg:mt-24">
              <div className="flex items-end justify-between border-b border-ink/15 pb-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-ink/60">
                  No. 02 — Featured Plates
                </p>
                <Link
                  to="/collection"
                  className="text-[11px] uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-ink"
                >
                  All pieces
                </Link>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" data-reveal-stagger>
                {featuredProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <DeliveryContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}

function DeliveryContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const revealItems = section.querySelectorAll<HTMLElement>("[data-delivery-reveal]");
      const headlineLines = section.querySelectorAll<HTMLElement>("[data-headline-line]");
      const image = section.querySelector<HTMLElement>("[data-delivery-image]");

      gsap.fromTo(
        revealItems,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 78%", once: true },
        },
      );
      gsap.fromTo(
        headlineLines,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: { trigger: section, start: "top 72%", once: true },
        },
      );
      if (image) {
        gsap.fromTo(
          image,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: { trigger: section, start: "top 70%", once: true },
          },
        );
        gsap.to(image, {
          yPercent: -5,
          scale: 1.04,
          ease: "none",
          scrollTrigger: { trigger: image, start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-ink/10 bg-cream" aria-labelledby="private-service-title">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-between gap-8 text-[10px] uppercase tracking-[0.3em] text-fawn" data-delivery-reveal>
            <span>03 / Private Service</span>
            <span className="text-ink/45">Milano <span className="px-1 text-fawn">→</span> Dubai</span>
          </div>

          <h2 id="private-service-title" className="mt-14 max-w-[10ch] font-sans text-[clamp(2.6rem,5.6vw,5.5rem)] font-medium uppercase leading-[0.86] tracking-[-0.045em] text-ink sm:mt-20">
            <span className="block overflow-hidden"><span className="block" data-headline-line>Delivered with</span></span>
            <span className="block overflow-hidden"><span className="block" data-headline-line>the same care</span></span>
            <span className="block overflow-hidden font-serif text-[1.06em] font-normal italic normal-case tracking-[-0.025em] text-fawn"><span className="block" data-headline-line>as it was made.</span></span>
          </h2>

          <p className="mt-9 max-w-[38rem] text-base leading-relaxed text-ink/65 sm:text-lg" data-delivery-reveal>
            Every piece leaves our atelier with intention — from our hands to your door.
          </p>

          <div className="mt-14 grid border-y border-ink/15 sm:grid-cols-3" data-delivery-reveal>
            <div className="border-b border-ink/15 py-5 sm:border-b-0 sm:border-r sm:pr-5">
              <p className="text-[10px] tracking-[0.2em] text-fawn">01</p>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em]">Complimentary delivery</p>
              <p className="mt-2 font-serif text-2xl">AED 1,000+</p>
              <p className="mt-1 text-xs text-ink/50">UAE orders</p>
            </div>
            <div className="border-b border-ink/15 py-5 sm:border-b-0 sm:border-r sm:px-5">
              <p className="text-[10px] tracking-[0.2em] text-fawn">02</p>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em]">Delivery time</p>
              <p className="mt-2 font-serif text-2xl">2—4 days</p>
              <p className="mt-1 text-xs text-ink/50">Across the UAE</p>
            </div>
            <div className="py-5 sm:pl-5">
              <p className="text-[10px] tracking-[0.2em] text-fawn">03</p>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em]">Private assistance</p>
              <p className="mt-2 font-serif text-2xl">01:01</p>
              <p className="mt-1 text-xs text-ink/50">Sizing · Fabric · Fittings</p>
            </div>
          </div>

          <div className="mt-14" data-delivery-reveal>
            <a
              href={generalWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-between border-y border-ink py-5 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-500 hover:bg-ink hover:px-5 hover:text-cream"
            >
              <span>WhatsApp concierge</span>
              <span className="text-xl font-normal transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
            <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-ink/45">
              Prefer a private conversation?{" "}
              <Link to="/contact" className="text-ink transition-colors hover:text-fawn">Contact the maison ↗</Link>
            </p>
          </div>
        </div>

        <figure className="relative min-h-[500px] overflow-hidden sm:min-h-[680px] lg:min-h-[780px]" data-delivery-reveal>
          <img
            src={atelierImage}
            alt="The CIAO D MILANO atelier, where garments are cut and finished by hand"
            className="absolute inset-0 h-[108%] w-full object-cover"
            data-delivery-image
          />
          <figcaption className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-cream drop-shadow-sm">
            Private service / CIAO D MILANO
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
