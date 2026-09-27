import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { formatPrice, products } from "@/data/products";
import { useAuth } from "@/hooks/useAuth";
import { getAuthToken, getStoredUser } from "@/lib/auth";

const authApiUrl = import.meta.env.VITE_AUTH_API_URL ?? "http://localhost:4000";

type Profile = {
  full_name: string;
  phone: string;
  address_line1: string;
  address_line2: string;
  city: string;
  emirate: string;
};

type OrderRow = {
  id: string;
  createdAt: string;
  status: string;
  totalAmount: number;
  items: { slug?: string; name: string; image?: string; size: string; color: string; quantity: number; price?: number }[];
  address: Profile;
  paymentMethod: string;
};

const empty: Profile = {
  full_name: "",
  phone: "",
  address_line1: "",
  address_line2: "",
  city: "",
  emirate: "",
};

export const Route = createFileRoute("/_authenticated/account")({
  head: () => ({
    meta: [
      { title: "My Account — CIAO D MILANO" },
      {
        name: "description",
        content:
          "Manage your CIAO D MILANO client details, delivery address and order history.",
      },
      { property: "og:title", content: "My Account — CIAO D MILANO" },
      {
        property: "og:description",
        content: "Manage your client details, delivery address and order history.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile>(empty);
  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [savedDetails, setSavedDetails] = useState<Profile | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const stored = getStoredUser();
    if (!stored) return;
    setEmail(stored.email);
    const headers = { Authorization: `Bearer ${getAuthToken() ?? ""}` };
    Promise.all([
      fetch(`${authApiUrl}/api/account/details`, { headers }),
      fetch(`${authApiUrl}/api/order-details`, { headers }),
    ])
      .then(async ([detailsResponse, ordersResponse]) => {
        if (!detailsResponse.ok) throw new Error("Could not load delivery details.");
        if (!ordersResponse.ok) throw new Error("Could not load order history.");
        const detailsData = (await detailsResponse.json()) as { details: Profile | null };
        const ordersData = (await ordersResponse.json()) as { orders: OrderRow[] };
        return { detailsData, ordersData };
      })
      .then(({ detailsData, ordersData }) => {
        setSavedDetails(detailsData.details);
        setOrders(ordersData.orders);
      })
      .catch(() => toast.error("Could not load your account history."));
  }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const response = await fetch(`${authApiUrl}/api/account/details`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthToken() ?? ""}`,
        },
        body: JSON.stringify(profile),
      });
      const result = (await response.json()) as { message?: string; details?: Profile };
      if (!response.ok || !result.details) throw new Error(result.message ?? "Details could not be saved.");
      setSavedDetails(result.details);
      setProfile(empty);
      toast.success("Delivery details saved.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Details could not be saved.");
    } finally {
      setSaving(false);
    }
  }

  const storedUser = getStoredUser();
  const displayName = storedUser?.fullName || user?.email?.split("@")[0] || "Client";
  const initials = displayName
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  function field(label: string, key: keyof Profile, autoComplete?: string) {
    return (
      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">{label}</span>
        <input
          value={profile[key]}
          onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
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
          <div className="mt-4 grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <section className="border border-ink/15 bg-cream p-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-fawn">Client account</p>
              <div className="mt-6 flex items-center gap-5">
                <div
                  className="grid size-20 shrink-0 place-items-center rounded-full bg-ink font-serif text-2xl text-cream"
                  aria-label={`${displayName} account picture`}
                  role="img"
                >
                  {initials || "C"}
                </div>
                <div className="min-w-0">
                  <h1 className="font-serif text-3xl font-medium">{displayName}</h1>
                  <p className="mt-2 truncate text-sm text-ink/55">{email}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  signOut();
                  navigate({ to: "/" });
                }}
                className="mt-8 w-full border border-ink/20 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] hover:border-ink/50"
              >
                Sign out
              </button>
              {savedDetails && (
                <div className="mt-6 border border-ink/15 bg-paper p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-fawn">Saved delivery details</p>
                  <div className="mt-4 space-y-1 text-sm text-ink/70">
                    <p className="font-medium text-ink">{savedDetails.full_name}</p>
                    <p>{savedDetails.phone}</p>
                    <p>{savedDetails.address_line1}</p>
                    {savedDetails.address_line2 && <p>{savedDetails.address_line2}</p>}
                    <p>{savedDetails.city}, {savedDetails.emirate}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setProfile(savedDetails);
                      setSavedDetails(null);
                    }}
                    className="mt-5 border border-ink/20 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] hover:border-ink/50"
                  >
                    Edit details
                  </button>
                </div>
              )}
            </section>

            <form onSubmit={save} className="space-y-4">
              <h2 className="font-serif text-2xl font-medium">Details & delivery address</h2>
              {field("Full name", "full_name", "name")}
              {field("Phone", "phone", "tel")}
              {field("Address", "address_line1", "address-line1")}
              {field("Apartment, villa, floor", "address_line2", "address-line2")}
              <div className="grid grid-cols-2 gap-4">
                {field("City", "city", "address-level2")}
                {field("Emirate", "emirate", "address-level1")}
              </div>
              <button
                type="submit"
                disabled={saving}
                className="bg-ink px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream disabled:opacity-50"
              >
                Save details
              </button>
            </form>
          </div>

          <section className="mt-16">
              <h2 className="font-serif text-2xl font-medium">Order history</h2>
              {orders.length === 0 ? (
                <p className="mt-4 text-sm text-ink/55">
                  No orders yet.{" "}
                  <Link to="/collection" className="underline decoration-ink/30 underline-offset-4">
                    Browse the collection
                  </Link>
                  .
                </p>
              ) : (
                <ul className="mt-5 grid gap-6">
                  {orders.map((order) => (
                    <li key={order.id} className="border border-ink/15 bg-cream p-5 lg:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-ink/10 pb-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-fawn">Order</p>
                          <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-ink/55">
                            {new Date(order.createdAt).toLocaleDateString("en-AE")} · {order.status.replace(/_/g, " ")}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[11px] uppercase tracking-[0.16em] text-ink/55">Total</p>
                          <p className="mt-1 font-serif text-2xl">{formatPrice(Number(order.totalAmount))}</p>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {order.items.map((item, index) => {
                          const product = item.slug ? products.find((candidate) => candidate.slug === item.slug) : undefined;
                          const image = item.image || product?.image;
                          return (
                            <div key={`${order.id}-${item.slug ?? item.name}-${index}`} className="flex gap-3 border border-ink/10 bg-paper p-2.5">
                              {image ? (
                                <img src={image} alt={item.name} className="size-16 shrink-0 object-cover" />
                              ) : (
                                <div className="size-16 shrink-0 bg-ink/10" aria-hidden="true" />
                              )}
                              <div className="min-w-0 py-1">
                                <p className="font-medium">{item.name}</p>
                                <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ink/55">
                                  {item.quantity} × {item.size} · {item.color}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-4 grid gap-5 border-t border-ink/10 pt-4 sm:grid-cols-2">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-fawn">Delivered to</p>
                          <p className="mt-3 text-sm leading-relaxed text-ink/70">
                            <span className="font-medium text-ink">{order.address.full_name}</span><br />
                            {order.address.phone}<br />
                            {order.address.address_line1}
                            {order.address.address_line2 && <><br />{order.address.address_line2}</>}
                            <br />{order.address.city}, {order.address.emirate}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-fawn">Payment</p>
                          <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink/70">{order.paymentMethod}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
