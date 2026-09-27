import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { formatPrice } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/lib/cart";
import { startPayment } from "@/lib/payments.functions";

type PaymentDraft = {
  subtotal: number;
  items: {
    key: string;
    slug: string;
    name: string;
    image: string;
    size: string;
    color: string;
    quantity: number;
    price: number;
  }[];
  form: {
    contact_name: string;
    contact_phone: string;
    address_line1: string;
    address_line2: string;
    city: string;
    emirate: string;
    notes: string;
  };
};

export const Route = createFileRoute("/_authenticated/payment-details")({
  head: () => ({
    meta: [
      { title: "Payment Details - CIAO D MILANO" },
      { name: "description", content: "Review your card details before secure payment." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PaymentDetailsPage,
});

function readDraft(): PaymentDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem("cdm-payment-draft");
    return raw ? (JSON.parse(raw) as PaymentDraft) : null;
  } catch {
    return null;
  }
}

function formatCardNumber(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 19)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  return digits.length > 2 ? `${digits.slice(0, 2)} / ${digits.slice(2)}` : digits;
}

function PaymentDetailsPage() {
  const navigate = useNavigate();
  const beginPayment = useServerFn(startPayment);
  const { clear } = useCart();
  const draft = readDraft();
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardFlipped, setCardFlipped] = useState(false);
  const [placing, setPlacing] = useState(false);

  if (!draft) {
    return (
      <div className="text-ink">
        <SiteHeader />
        <main className="bg-paper">
          <div className="mx-auto max-w-[1240px] px-6 py-24 text-center">
            <h1 className="font-serif text-4xl">Your payment session has expired</h1>
            <Link
              to="/checkout"
              className="mt-8 inline-flex bg-ink px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-cream"
            >
              Return to checkout
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const displayNumber = cardNumber || "0000 0000 0000 0000";
  const displayName = cardName.toUpperCase() || "YOUR NAME";
  const displayExpiry = expiry || "MM / YY";

  async function handlePayment(e: React.FormEvent) {
    e.preventDefault();
    setPlacing(true);

    try {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;
      if (!user) throw new Error("Please sign in again.");

      const { data: order, error } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          total_aed: draft.subtotal,
          payment_method: "card",
          ...draft.form,
        })
        .select("id")
        .single();
      if (error || !order) throw error ?? new Error("Order could not be created.");

      const { error: itemsError } = await supabase.from("order_items").insert(
        draft.items.map((item) => ({
          order_id: order.id,
          product_slug: item.slug,
          product_name: item.name,
          size: item.size,
          color: item.color,
          unit_price_aed: item.price,
          quantity: item.quantity,
        })),
      );
      if (itemsError) throw itemsError;

      await supabase.from("profiles").upsert({
        id: user.id,
        full_name: draft.form.contact_name,
        phone: draft.form.contact_phone,
        address_line1: draft.form.address_line1,
        address_line2: draft.form.address_line2,
        city: draft.form.city,
        emirate: draft.form.emirate,
        updated_at: new Date().toISOString(),
      });

      const { url } = await beginPayment({
        data: { orderId: order.id, method: "card", returnTo: window.location.href },
      });
      sessionStorage.removeItem("cdm-payment-draft");
      clear();
      window.location.href = url;
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Payment could not be started.");
      setPlacing(false);
    }
  }

  return (
    <div className="text-ink">
      <SiteHeader />
      <main className="bg-paper">
        <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-10 lg:py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-fawn">Secure payment</p>
          <h1 className="mt-4 font-serif text-3xl font-medium sm:text-4xl">Enter payment details</h1>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20">
            <form onSubmit={handlePayment} className="order-2 space-y-5 lg:order-1">
              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">Card number</span>
                <input
                  required
                  inputMode="numeric"
                  autoComplete="cc-number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder="1234 5678 9012 3456"
                  className="mt-2 w-full border border-ink/20 bg-cream px-4 py-3 text-sm outline-none focus:border-ink"
                />
              </label>
              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">Name on card</span>
                <input
                  required
                  autoComplete="cc-name"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="Your name"
                  className="mt-2 w-full border border-ink/20 bg-cream px-4 py-3 text-sm uppercase outline-none focus:border-ink"
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">Expiry</span>
                  <input
                    required
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    placeholder="MM / YY"
                    className="mt-2 w-full border border-ink/20 bg-cream px-4 py-3 text-sm outline-none focus:border-ink"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">CVC</span>
                  <input
                    required
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    value={cvc}
                    onFocus={() => setCardFlipped(true)}
                    onBlur={() => setCardFlipped(false)}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    placeholder="123"
                    className="mt-2 w-full border border-ink/20 bg-cream px-4 py-3 text-sm outline-none focus:border-ink"
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={placing}
                className="w-full bg-ink px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream disabled:opacity-50"
              >
                {placing ? "Opening secure payment..." : `Continue to payment - ${formatPrice(draft.subtotal)}`}
              </button>
              <p className="text-[11px] leading-relaxed text-ink/45">
                Your card details are previewed here and entered again only on the secure payment page.
              </p>
            </form>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[1.58/1] w-full max-w-[520px] [perspective:1200px]">
                <div
                  className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    cardFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-2xl bg-ink p-7 text-cream shadow-xl [backface-visibility:hidden] sm:p-10">
                    <div className="absolute -right-16 -top-20 size-64 rounded-full border border-cream/15" />
                    <div className="absolute -right-8 -top-12 size-48 rounded-full border border-cream/10" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-cream/60">CIAO D MILANO</span>
                        <span className="font-serif text-xl italic text-cream/80">card</span>
                      </div>
                      <div>
                        <p className="font-mono text-xl tracking-[0.12em] sm:text-2xl">{displayNumber}</p>
                        <div className="mt-6 flex items-end justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-cream/60">
                          <span className="max-w-[65%] truncate text-cream">{displayName}</span>
                          <span>{displayExpiry}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 overflow-hidden rounded-2xl bg-ink text-cream shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="mt-8 h-12 bg-black/70" />
                    <div className="px-7 pt-6 sm:px-10">
                      <p className="text-right text-[9px] uppercase tracking-[0.2em] text-cream/50">Security code</p>
                      <div className="mt-2 flex h-10 items-center justify-end bg-cream px-3 font-mono text-sm text-ink">
                        {cvc ? "*".repeat(cvc.length) : "***"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="mt-8 border border-ink/15 bg-cream p-6">
                <p className="text-[11px] uppercase tracking-[0.25em] text-ink/55">Order total</p>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-sm text-ink/65">{draft.items.length} item{draft.items.length === 1 ? "" : "s"}</span>
                  <span className="font-serif text-2xl">{formatPrice(draft.subtotal)}</span>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}