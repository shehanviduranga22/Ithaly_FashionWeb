import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { HeroSlideshow, type Slide } from "@/components/HeroSlideshow";
import { Input } from "@/components/ui/input";
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
  const [query, setQuery] = useState("");

  const visible = products.filter((product) => {
    const matchesCategory = active === "All" || product.category === active;
    const searchableText = `${product.name} ${product.category} ${product.plate} ${product.summary}`.toLowerCase();
    const matchesQuery = searchableText.includes(query.trim().toLowerCase());

    return matchesCategory && matchesQuery;
  });

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
            className="collection-landing-panel flex flex-col gap-6 border-b border-ink/15 pb-6 lg:flex-row lg:items-end lg:justify-between"
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

            <label className="relative block w-full max-w-sm">
              <span className="sr-only">Search collection items</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" />
              <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search collection"
                className="h-11 border border-ink/15 bg-white pl-9 text-sm text-ink placeholder:text-ink/45 focus-visible:ring-ink/20"
              />
            </label>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10" data-reveal-stagger>
            {visible.length > 0 ? (
              visible.map((product) => (
                <div key={product.slug} className="collection-product-card" data-page-load-rise>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-span-full rounded-[1.5rem] border border-dashed border-ink/15 bg-white/50 p-10 text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink/50">No items found</p>
                <p className="mt-3 text-sm text-ink/70">
                  Try another keyword or switch back to the full collection.
                </p>
              </div>
            )}
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
