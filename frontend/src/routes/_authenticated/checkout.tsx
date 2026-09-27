import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/lib/cart";
import { getAuthToken } from "@/lib/auth";
import { formatPrice } from "@/data/products";
import { startPayment, type PaymentMethod } from "@/lib/payments.functions";

export const Route = createFileRoute("/_authenticated/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — CIAO D MILANO" },
      {
        name: "description",
        content: "Confirm your delivery details and place your CIAO D MILANO order.",
      },
      { property: "og:title", content: "Checkout — CIAO D MILANO" },
      {
        property: "og:description",
        content: "Confirm your delivery details and place your order.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

const methods: { id: PaymentMethod; name: string; hint: string }[] = [
  {
    id: "card",
    name: "Card",
    hint: "Visa, Mastercard and Amex. You enter your card details on Stripe's secure page.",
  },
  {
    id: "satispay",
    name: "Satispay",
    hint: "You are redirected to Satispay to approve the payment in the app.",
  },
];

type SavedDeliveryDetails = {
  full_name: string;
  phone: string;
  address_line1: string;
  address_line2: string;
  city: string;
  emirate: string;
};

function CheckoutPage() {
  const navigate = useNavigate();
  const { items, subtotal } = useCart();
  const beginPayment = useServerFn(startPayment);
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [form, setForm] = useState({
    contact_name: "",
    contact_phone: "",
    address_line1: "",
    address_line2: "",
    city: "",
    emirate: "",
    notes: "",
  });
  const [placing, setPlacing] = useState(false);
  const [savedAddress, setSavedAddress] = useState<SavedDeliveryDetails | null>(null);
  const [editingAddress, setEditingAddress] = useState(false);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      fetch("http://localhost:4000/api/account/details", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(async (response) => {
          if (!response.ok) throw new Error("Could not load saved address.");
          return (await response.json()) as { details: SavedDeliveryDetails | null };
        })
        .then(({ details }) => {
          if (!details) return;
          setSavedAddress(details);
          setForm((prev) => ({
            ...prev,
            contact_name: details.full_name,
            contact_phone: details.phone,
            address_line1: details.address_line1,
            address_line2: details.address_line2,
            city: details.city,
            emirate: details.emirate,
          }));
        })
        .catch(() => toast.error("Could not load your saved address."));
      return;
    }

    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;
      if (!user) return;
      const { data: row } = await supabase
        .from("profiles")
        .select("full_name, phone, address_line1, address_line2, city, emirate")
        .eq("id", user.id)
        .maybeSingle();
      if (!row) return;
      setForm((prev) => ({
        ...prev,
        contact_name: row.full_name ?? prev.contact_name,
        contact_phone: row.phone ?? prev.contact_phone,
        address_line1: row.address_line1 ?? prev.address_line1,
        address_line2: row.address_line2 ?? prev.address_line2,
        city: row.city ?? prev.city,
        emirate: row.emirate ?? prev.emirate,
      }));
    })();
  }, []);

  async function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;

    if (method === "card") {
      sessionStorage.setItem(
        "cdm-payment-draft",
        JSON.stringify({ items, subtotal, form }),
      );
      navigate({ to: "/payment-details" });
      return;
    }

    setPlacing(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;
      if (!user) throw new Error("Please sign in again.");

      const { data: order, error } = await supabase
        .from("orders")
        .insert({ user_id: user.id, total_aed: subtotal, payment_method: method, ...form })
        .select("id")
        .single();
      if (error || !order) throw error ?? new Error("Order could not be created.");

      const { error: itemsError } = await supabase.from("order_items").insert(
        items.map((i) => ({
          order_id: order.id,
          product_slug: i.slug,
          product_name: i.name,
          size: i.size,
          color: i.color,
          unit_price_aed: i.price,
          quantity: i.quantity,
        })),
      );
      if (itemsError) throw itemsError;

      await supabase.from("profiles").upsert({
        id: user.id,
        full_name: form.contact_name,
        phone: form.contact_phone,
        address_line1: form.address_line1,
        address_line2: form.address_line2,
        city: form.city,
        emirate: form.emirate,
        updated_at: new Date().toISOString(),
      });

      const { url } = await beginPayment({
        data: { orderId: order.id, method, returnTo: window.location.href },
      });
      window.location.href = url;
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Your payment could not be started.",
      );
      setPlacing(false);
    }
  }

  function field(label: string, key: keyof typeof form, required = false, autoComplete?: string) {
    return (
      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">{label}</span>
        <input
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          required={required}
          autoComplete={autoComplete}
          className="mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
        />
      </label>
    );
  }

  return (
    <div className="text-ink">
      <SiteHeader />
      <main className="bg-paper">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-14 lg:py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-fawn">Checkout</p>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-medium">Delivery & payment</h1>

          {items.length === 0 ? (
            <div className="mt-10 border-t border-ink/15 pt-10">
              <p className="text-sm text-ink/60">Your bag is empty.</p>
              <button
                type="button"
                onClick={() => navigate({ to: "/collection" })}
                className="mt-6 bg-ink px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream"
              >
                Browse the collection
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
              <form id="checkout-form" onSubmit={placeOrder} className="space-y-4">
                {savedAddress && !editingAddress && (
                  <div className="border border-ink/15 bg-cream p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-fawn">
                          Saved delivery address
                        </p>
                        <p className="mt-4 font-medium">{savedAddress.full_name}</p>
                        <p className="mt-1 text-sm text-ink/70">{savedAddress.phone}</p>
                        <p className="mt-3 text-sm leading-relaxed text-ink/70">
                          {savedAddress.address_line1}
                          {savedAddress.address_line2 && <><br />{savedAddress.address_line2}</>}
                          <br />{savedAddress.city}, {savedAddress.emirate}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setEditingAddress(true)}
                        className="shrink-0 border border-ink/20 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] hover:border-ink/50"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                )}
                {field("Full name", "contact_name", true, "name")}
                {field("Phone", "contact_phone", true, "tel")}
                {field("Address", "address_line1", true, "address-line1")}
                {field("Apartment, villa, floor", "address_line2", false, "address-line2")}
                <div className="grid grid-cols-2 gap-4">
                  {field("City", "city", true, "address-level2")}
                  {field("Emirate", "emirate", true, "address-level1")}
                </div>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
                    Notes for the atelier
                  </span>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    className="mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                  />
                </label>

                <button
                  type="submit"
                  disabled={placing}
                  className="bg-ink px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream disabled:opacity-50"
                >
                  {placing ? "Opening payment…" : "Place order"}
                </button>
              </form>

              <div className="space-y-8">
                <fieldset>
                  <legend className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
                    Payment method
                  </legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {methods.map((option) => (
                      <label
                        key={option.id}
                        className={`cursor-pointer border p-5 transition-colors ${
                          method === option.id
                            ? "border-ink bg-cream"
                            : "border-ink/20 hover:border-ink/40"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <input
                            form="checkout-form"
                            type="radio"
                            name="payment_method"
                            value={option.id}
                            checked={method === option.id}
                            onChange={() => setMethod(option.id)}
                            className="accent-ink"
                          />
                          <span className="text-[12px] font-medium uppercase tracking-[0.2em]">
                            {option.name}
                          </span>
                        </span>
                        <span className="mt-2 block text-[12px] leading-relaxed text-ink/55">
                          {option.hint}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <aside className="h-fit border border-ink/15 bg-cream p-7">
                <p className="text-[11px] uppercase tracking-[0.25em] text-ink/55">Your order</p>
                <ul className="mt-5 space-y-4">
                  {items.map((i) => (
                    <li key={i.key} className="flex justify-between gap-4 text-sm">
                      <span className="text-ink/70">
                        {i.quantity} × {i.name}
                        <span className="block text-[11px] uppercase tracking-[0.15em] text-ink/45">
                          Size {i.size} · {i.color}
                        </span>
                      </span>
                      <span className="tabular-nums">{formatPrice(i.price * i.quantity)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-baseline justify-between border-t border-ink/10 pt-4">
                  <span className="text-sm text-ink/70">Total</span>
                  <span className="font-serif text-2xl tabular-nums">{formatPrice(subtotal)}</span>
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-ink/55">
                  Payment is completed on a secure page hosted by Stripe or Satispay. Satispay
                  settles in euro, converted from your AED total.
                </p>
                </aside>
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
