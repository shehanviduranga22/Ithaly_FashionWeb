import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { HeroSlideshow, type Slide } from "@/components/HeroSlideshow";
import { categories, products, type Category } from "@/data/products";
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

  return (
    <div className="text-ink">
      <SiteHeader />

      <main className="bg-paper">
        <section
          className="relative h-[42vh] min-h-[320px] max-h-[560px] overflow-hidden border-b border-ink/10"
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

        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-6">
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

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" data-reveal-stagger>
            {visible.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <p className="mt-14 text-[12px] uppercase tracking-[0.2em] text-ink/50">
            Every plate can be ordered or reserved on WhatsApp ·{" "}
            <Link to="/contact" className="text-ink/70 hover:text-ink transition-colors">
              Contact the maison
            </Link>
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
