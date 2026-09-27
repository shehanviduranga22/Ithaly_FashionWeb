import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { formatPrice, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product, wide = false }: { product: Product; wide?: boolean }) {
  const { add } = useCart();

  function quickAdd() {
    add({
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      size: product.sizes[0] ?? "",
      color: product.colors[0]?.name ?? "",
    });
    toast.success(`${product.name} added to your bag`);
  }

  return (
    <article className="group" data-reveal>
      <Link
        to="/collection/$slug"
        params={{ slug: product.slug }}
        className="block"
        aria-label={product.name}
      >
        <div className="relative overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-black/5">
          <img
            src={product.image}
            alt={product.alt}
            loading="lazy"
            width={1024}
            height={1280}
            className={`w-full ${wide ? "aspect-[16/10]" : "aspect-[4/5]"} object-cover plate-img transition-opacity duration-700 group-hover:opacity-0`}
          />
          <img
            src={product.image2}
            alt={product.alt2}
            loading="lazy"
            width={1024}
            height={1280}
            aria-hidden="true"
            className={`absolute inset-0 w-full ${wide ? "aspect-[16/10]" : "aspect-[4/5]"} object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
          />
          <span className="product-card-tag absolute left-3 top-3 text-ink text-[9px] uppercase tracking-[0.25em] px-2.5 py-1.5">
            {product.plate}
          </span>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-lg sm:text-xl font-medium">{product.name}</h3>
          <span className="text-sm tabular-nums text-ink/70">{formatPrice(product.price)}</span>
        </div>
        <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-ink/45">{product.summary}</p>
      </Link>
      <button
        type="button"
        onClick={quickAdd}
        className="mt-3 inline-flex translate-y-2 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/55 opacity-0 transition-[opacity,transform,color] duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:text-ink focus-visible:translate-y-0 focus-visible:opacity-100"
      >
        Quick add <Plus className="size-3.5" aria-hidden="true" />
      </button>
    </article>
  );
}
