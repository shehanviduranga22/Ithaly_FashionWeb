import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/products";

export const Route = createFileRoute("/cart")({
  head: () => {
    const title = "Shopping Bag — CIAO D MILANO";
    const description =
      "Review the pieces in your CIAO D MILANO shopping bag and continue to checkout with UAE delivery.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, setQuantity, remove } = useCart();

  return (
    <div className="flex min-h-screen flex-col text-ink">
      <SiteHeader />
      <main className="flex-1 bg-paper">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-14 lg:py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-fawn">Shopping bag</p>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-medium">Your selection</h1>

          {items.length === 0 ? (
            <div className="mt-10 border-t border-ink/15 pt-10">
              <p className="text-sm text-ink/60">Your bag is empty.</p>
              <Link
                to="/collection"
                className="mt-6 inline-flex bg-ink px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream"
              >
                Browse the collection
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
              <ul className="divide-y divide-ink/10 border-y border-ink/15">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-5 py-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={160}
                      height={200}
                      className="h-28 w-24 shrink-0 object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h2 className="font-serif text-xl font-medium">{item.name}</h2>
                        <span className="text-sm tabular-nums">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-ink/50">
                        Size {item.size} · {item.color}
                      </p>

                      <div className="mt-auto flex items-end justify-between gap-4 pt-5">
                        <div className="flex items-center border border-ink/20 bg-paper">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQuantity(item.key, item.quantity - 1)}
                            className="size-9 text-sm transition-colors hover:bg-ink hover:text-cream"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">{item.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQuantity(item.key, item.quantity + 1)}
                            className="size-9 text-sm transition-colors hover:bg-ink hover:text-cream"
                          >
                            +
                          </button>
                        </div>

                        <div className="ml-auto flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => remove(item.key)}
                            className="bg-ink px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-cream transition-opacity hover:opacity-90"
                          >
                            Remove
                          </button>
                          <Link
                            to="/checkout"
                            className="bg-ink px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-cream transition-opacity hover:opacity-90"
                          >
                            Buy now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="h-fit border border-ink/15 bg-cream p-7">
                <p className="text-[11px] uppercase tracking-[0.25em] text-ink/55">Summary</p>
                <div className="mt-5 flex items-baseline justify-between border-b border-ink/10 pb-4">
                  <span className="text-sm text-ink/70">Subtotal</span>
                  <span className="font-serif text-2xl tabular-nums">{formatPrice(subtotal)}</span>
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-ink/55">
                  Delivery across the UAE is complimentary on orders above AED 500. Duties and taxes
                  are shown at checkout.
                </p>
                <Link
                  to="/checkout"
                  className="mt-6 block bg-ink py-3.5 text-center text-[12px] font-medium uppercase tracking-[0.2em] text-cream"
                >
                  Proceed to checkout
                </Link>
                <Link
                  to="/collection"
                  className="mt-3 block py-2 text-center text-[11px] uppercase tracking-[0.2em] text-ink/55 hover:text-ink"
                >
                  Continue shopping
                </Link>
              </aside>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
