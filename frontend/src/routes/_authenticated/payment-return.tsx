import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { confirmPayment } from "@/lib/payments.functions";
import { useCart } from "@/lib/cart";
import { site, whatsappLink } from "@/lib/site";

type Search = { order?: string; method?: string; session_id?: string };

export const Route = createFileRoute("/_authenticated/payment-return")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    order: typeof search["order"] === "string" ? search["order"] : undefined,
    method: typeof search["method"] === "string" ? search["method"] : undefined,
    session_id: typeof search["session_id"] === "string" ? search["session_id"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Payment — CIAO D MILANO" },
      { name: "description", content: "Your CIAO D MILANO payment confirmation." },
      { property: "og:title", content: "Payment — CIAO D MILANO" },
      { property: "og:description", content: "Your payment confirmation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PaymentReturnPage,
});

function PaymentReturnPage() {
  const { order, session_id } = Route.useSearch();
  const check = useServerFn(confirmPayment);
  const { clear } = useCart();
  const [state, setState] = useState<"checking" | "paid" | "unpaid" | "error">("checking");
  const started = useRef(false);

  useEffect(() => {
    if (!order || started.current) return;
    started.current = true;
    (async () => {
      try {
        const result = await check({
          data: { orderId: order, ...(session_id ? { sessionId: session_id } : {}) },
        });
        if (result.paid) {
          clear();
          setState("paid");
        } else {
          setState("unpaid");
        }
      } catch {
        setState("error");
      }
    })();
  }, [order, session_id, check, clear]);

  const reference = order ? order.slice(0, 8).toUpperCase() : "";

  return (
    <div className="text-ink">
      <SiteHeader />
      <main className="bg-cream">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-20 lg:py-28">
          <div className="mx-auto max-w-[34rem] text-center">
            {state === "checking" && (
              <>
                <p className="text-[11px] uppercase tracking-[0.3em] text-fawn">One moment</p>
                <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-medium">
                  Confirming your payment
                </h1>
              </>
            )}

            {state === "paid" && (
              <>
                <p className="text-[11px] uppercase tracking-[0.3em] text-fawn">Payment received</p>
                <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-medium">Thank you</h1>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  Your payment for order {reference} is confirmed. Our atelier will be in touch with
                  your delivery window.
                </p>
              </>
            )}

            {(state === "unpaid" || state === "error") && (
              <>
                <p className="text-[11px] uppercase tracking-[0.3em] text-fawn">Not completed</p>
                <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-medium">
                  Payment pending
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  We could not confirm payment for order {reference}. Nothing has been charged — you
                  can try again from your bag, or message the atelier and we will help.
                </p>
              </>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/account"
                className="bg-ink px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream"
              >
                View my orders
              </Link>
              <a
                href={whatsappLink(
                  `Hello ${site.name}, I need help with order ${reference || "my recent order"}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="border border-ink/20 px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em]"
              >
                Message the atelier
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
