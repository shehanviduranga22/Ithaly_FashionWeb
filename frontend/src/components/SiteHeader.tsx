import { Link } from "@tanstack/react-router";
import { ShoppingBag, User } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header sticky top-0 z-50 border-b border-cream/15 bg-ink/95 text-cream backdrop-blur-sm transition-all duration-400 ${scrolled ? "is-scrolled" : ""}`}>
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-7">
          <Link to="/" className="site-brand font-serif text-lg font-medium tracking-[0.14em] text-cream sm:text-xl">
            CIAO D MILANO
          </Link>
          <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-cream/70 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link transition-colors hover:text-cream"
                activeProps={{ className: "nav-link active text-cream" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.22em] text-cream/70">
          <Link to="/contact" className="nav-link hidden transition-colors hover:text-cream sm:inline">
            Enquire
          </Link>
          <Link
            to={user ? "/account" : "/auth"}
            className="nav-link flex items-center gap-2 transition-colors hover:text-cream"
            aria-label={user ? "My account" : "Sign in"}
          >
            <User className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{user ? "Account" : "Sign in"}</span>
          </Link>
          <Link
            to="/cart"
            className="nav-link relative flex items-center gap-2 transition-colors hover:text-cream"
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
      <nav className="flex items-center gap-6 px-6 pb-3 text-[11px] uppercase tracking-[0.22em] text-cream/70 md:hidden">
        {nav.map((item) => (
          <Link key={item.to} to={item.to} activeProps={{ className: "text-cream" }} className="nav-link">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
