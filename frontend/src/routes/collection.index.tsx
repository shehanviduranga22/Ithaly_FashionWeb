import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { HeroSlideshow, type Slide } from "@/components/HeroSlideshow";
import { categories, products, type Category } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);
import collectionSlide1 from "@/assets/collection_slideshow (1).png";
import collectionSlide2 from "@/assets/collection_slideshow (2).png";
import collectionSlide3 from "@/assets/collection_slideshow (3).png";

const collectionSlides: Slide[] = [
  { src: collectionSlide1, alt: "Tailored jacket from the collection" },
  { src: collectionSlide2, alt: "Linen shirt from the collection" },
  { src: collectionSlide3, alt: "Tailored trousers from the collection" },
];

const title = "Collection — Shirts, Trousers, Jackets & Tees | CIAO D MILANO";
const description =
  "Browse the CIAO D MILANO collection: Italian-inspired t-shirts, shirts, trousers and jackets with sizes, colours and AED prices. Order on WhatsApp.";

export const Route = createFileRoute("/collection/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/collection" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
  component: Collection,
});

function Collection() {
  const [active, setActive] = useState<Category | "All">("All");
  const visible = active === "All" ? products : products.filter((p) => p.category === active);
  const collectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-page-load-rise]",
        { autoAlpha: 0, y: 46 },
        { autoAlpha: 1, y: 0, duration: 1.1, ease: "power3.out", stagger: 0.08, delay: 0.15 },
      );

      gsap.fromTo(
        ".collection-landing-panel",
        { autoAlpha: 0, y: 46 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: collectionRef.current, start: "top 72%", once: true },
        },
      );

      gsap.utils.toArray<HTMLElement>(".collection-product-card").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 84%", once: true },
          },
        );
      });
    }, collectionRef);

    return () => context.revert();
  }, []);

  return (
    <div className="text-ink">
      <SiteHeader />

      <main className="bg-paper" ref={collectionRef}>
        <section
          className="collection-landing-panel relative h-[42vh] min-h-[320px] max-h-[560px] overflow-hidden border-b border-ink/10"
          aria-label="Collection highlights"
        >
          <HeroSlideshow
            slides={collectionSlides}
            interval={4500}
            eyebrow="No. 04 — The Collection"
            title="PLATES BY CATEGORY"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        </section>

        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24">
          <div
            className="collection-landing-panel flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-6"
            data-page-load-rise
          >
            <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em]">
              {(["All", ...categories] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={
                    active === cat
                      ? "text-ink border-b border-ink pb-0.5"
                      : "text-ink/55 transition-colors hover:text-ink pb-0.5"
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10" data-reveal-stagger>
            {visible.map((product) => (
              <div key={product.slug} className="collection-product-card" data-page-load-rise>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <p className="mt-14 text-[12px] uppercase tracking-[0.2em] text-ink/50" data-page-load-rise>
            Every plate can be ordered or reserved on WhatsApp ·{" "}
            <Link to="/contact" className="text-ink/70 transition-colors hover:text-ink">
              Contact the maison
            </Link>
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
