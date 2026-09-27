import { Link } from "@tanstack/react-router";
import { ShoppingBag, User } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/hooks/useAuth";

const nav = [
  { to: "/collection", label: "Collection" },
  { to: "/about", label: "Maison" },
  { to: "/delivery", label: "Delivery" },
] as const;

export function SiteHeader() {
  const { count } = useCart();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-ink/95 text-cream backdrop-blur-sm border-b border-cream/15">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <Link to="/" className="font-serif text-lg sm:text-xl tracking-[0.14em] font-medium text-cream">
            CIAO D MILANO
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-cream/70">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors hover:text-cream"
                activeProps={{ className: "text-cream" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.22em] text-cream/70">
          <Link
            to="/contact"
            className="hidden sm:inline transition-colors hover:text-cream"
          >
            Enquire
          </Link>
          <Link
            to={user ? "/account" : "/auth"}
            className="flex items-center gap-2 transition-colors hover:text-cream"
            aria-label={user ? "My account" : "Sign in"}
          >
            <User className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{user ? "Account" : "Sign in"}</span>
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center gap-2 transition-colors hover:text-cream"
            aria-label={`Shopping bag, ${count} item${count === 1 ? "" : "s"}`}
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Bag</span>
            {count > 0 && (
              <span className="grid size-4 place-items-center rounded-full bg-ink text-[9px] font-medium text-cream tabular-nums">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
      <nav className="md:hidden flex items-center gap-6 px-6 pb-3 text-[11px] uppercase tracking-[0.22em] text-cream/70">
        {nav.map((item) => (
          <Link key={item.to} to={item.to} activeProps={{ className: "text-cream" }}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
