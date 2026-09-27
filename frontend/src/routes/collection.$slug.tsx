import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { formatPrice, getProduct, products } from "@/data/products";
import { site, whatsappLink } from "@/lib/site";
import { useCart } from "@/lib/cart";
import { getAuthToken } from "@/lib/auth";

export const Route = createFileRoute("/collection/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Piece not found — CIAO D MILANO" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${formatPrice(product.price)} | CIAO D MILANO`;
    const description = `${product.name}: ${product.description} Sizes ${product.sizes.join(", ")}. Order on WhatsApp.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/collection/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/collection/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            brand: { "@type": "Brand", name: site.name },
            category: product.category,
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "AED",
              availability: "https://schema.org/InStock",
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: PieceNotFound,
  component: ProductDetail,
});

function PieceNotFound() {
  return (
    <div className="text-ink">
      <SiteHeader />
      <main className="bg-paper">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-28 text-center">
          <h1 className="font-serif text-4xl font-light">This plate isn't in the catalogue</h1>
          <Link
            to="/collection"
            className="mt-8 inline-flex bg-ink text-cream text-[12px] uppercase tracking-[0.2em] py-3.5 px-6"
          >
            Back to the collection
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [size, setSize] = useState(
    product.sizes[Math.min(1, product.sizes.length - 1)] ?? "",
  );
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [photo, setPhoto] = useState(0);
  const { add } = useCart();
  const navigate = useNavigate();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug);
  const gallery: { src: string; alt: string }[] = [
    { src: product.image, alt: product.alt },
    { src: product.image2, alt: product.alt2 },
    { src: product.image3, alt: product.alt3 },
  ];
  const currentPhoto = gallery[photo] ?? gallery[0]!;

  const orderLink = whatsappLink(
    `Hello ${site.name}, I would like to order the ${product.name} (${product.plate}) — size ${size}, colour ${color}, ${formatPrice(product.price)}.`,
  );

  async function buyNow() {
    add({
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      size,
      color,
    });

    navigate({ to: getAuthToken() ? "/checkout" : "/auth" });
  }

  return (
    <div className="text-ink">
      <SiteHeader />

      <main>
        <section className="bg-cream border-b border-ink/10">
          <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-14 lg:py-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-fawn mb-10">
              {product.plate} — {product.category}
            </p>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <div className="overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-black/5">
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    width={1024}
                    height={1280}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <div className="mt-3 flex gap-3" role="group" aria-label="Photos">
                  {gallery.map((g, i) => (
                    <button
                      key={g.src}
                      type="button"
                      onClick={() => setPhoto(i)}
                      aria-label={`Photo ${i + 1}`}
                      aria-pressed={i === photo}
                      className={`w-20 overflow-hidden rounded-[min(1vw,12px)] transition-opacity ${
                        i === photo
                          ? "ring-2 ring-ink ring-offset-2 ring-offset-cream"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={g.src}
                        alt=""
                        loading="lazy"
                        width={1024}
                        height={1280}
                        className="w-full aspect-square object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h1 className="font-serif text-3xl sm:text-4xl font-light text-balance max-w-[24ch]">
                    {product.name}
                  </h1>
                  <span className="font-serif text-2xl tabular-nums shrink-0">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <p className="mt-4 text-ink/70 max-w-[48ch] leading-relaxed text-pretty">
                  {product.description}
                </p>
                <p className="mt-3 text-[12px] uppercase tracking-[0.15em] text-ink/45">
                  {product.fabric}
                </p>

                <div className="mt-8">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-ink/55 mb-3">
                    Size — {size}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSize(s)}
                        aria-pressed={s === size}
                        className={`min-w-11 h-11 px-3 grid place-items-center rounded-[min(1vw,12px)] text-[12px] transition-colors ${
                          s === size
                            ? "border-2 border-ink bg-ink text-cream"
                            : "border border-ink/20 hover:border-ink/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-ink/55 mb-3">
                    Colour — {color}
                  </p>
                  <div className="flex gap-3">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setColor(c.name)}
                        aria-label={c.name}
                        aria-pressed={c.name === color}
                        style={{ backgroundColor: c.hex }}
                        className={`size-8 rounded-full shrink-0 ${
                          c.name === color
                            ? "ring-2 ring-ink ring-offset-2 ring-offset-cream"
                            : "ring-1 ring-ink/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      add({
                        slug: product.slug,
                        name: product.name,
                        image: product.image,
                        price: product.price,
                        size,
                        color,
                      });
                      toast.success(`${product.name} added to your bag.`);
                    }}
                    className="inline-flex items-center bg-ink px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-90"
                  >
                    Add to bag
                  </button>
                  <button
                    type="button"
                    onClick={buyNow}
                    className="inline-flex items-center border border-ink bg-cream px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
                  >
                    Buy now
                  </button>
                  <WhatsAppButton href={orderLink}>Order on WhatsApp</WhatsAppButton>
                  <Link
                    to="/cart"
                    className="inline-flex items-center text-[12px] uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-ink py-3.5 px-1"
                  >
                    View bag
                  </Link>
                </div>
                <p className="mt-5 text-[12px] text-ink/50 leading-relaxed">
                  Complimentary fit consultation · Ships across the UAE in 2–4 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-paper">
            <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-16 lg:py-20">
              <div className="flex items-end justify-between border-b border-ink/15 pb-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-ink/60">
                  More in {product.category}
                </p>
                <Link
                  to="/collection"
                  className="text-[11px] uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-ink"
                >
                  All pieces
                </Link>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
