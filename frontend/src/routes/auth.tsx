import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroSlideshow, type Slide } from "@/components/HeroSlideshow";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { saveAuthSession } from "@/lib/auth";
import signUpSlide1 from "@/assets/signUp_slideshow (1).png";
import signUpSlide2 from "@/assets/signUp_slideshow (2).png";
import signUpSlide3 from "@/assets/signUp_slideshow (3).png";

const authSlides: Slide[] = [
  { src: signUpSlide1, alt: "Man in a charcoal tailored jacket and cream trousers" },
  { src: signUpSlide2, alt: "Man in a cream linen shirt beneath a limestone archway" },
  { src: signUpSlide3, alt: "Man in a camel double-breasted jacket in an Italian marble arcade" },
];

const authApiUrl = import.meta.env.VITE_AUTH_API_URL ?? "http://localhost:4000";

function returnAfterSignIn(navigate: ReturnType<typeof useNavigate>) {
  if (document.referrer.startsWith(window.location.origin) && window.history.length > 1) {
    window.history.back();
    return;
  }
  navigate({ to: "/account" });
}

export const Route = createFileRoute("/auth")({
  head: () => {
    const title = "Client Account — Sign In or Register | CIAO D MILANO";
    const description =
      "Sign in to your CIAO D MILANO client account to save your details, review your cart and complete an order.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: "/auth" }],
    };
  },
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);
  const [sentConfirmation, setSentConfirmation] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const response = await fetch(`${authApiUrl}/api/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, email, password }),
        });
        const result = (await response.json()) as {
          message?: string;
          token?: string;
          user?: { id: string; fullName: string; email: string };
        };
        if (!response.ok) throw new Error(result.message ?? "Account creation failed.");
        if (result.token && result.user) saveAuthSession(result.token, result.user);
        toast.success("Account created successfully.");
        setSentConfirmation(true);
      } else {
        const response = await fetch(`${authApiUrl}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const result = (await response.json()) as {
          message?: string;
          token?: string;
          user?: { id: string; fullName: string; email: string };
        };
        if (!response.ok) throw new Error(result.message ?? "Invalid email or password.");
        if (result.token && result.user) saveAuthSession(result.token, result.user);
        toast.success("Login successful.");
        returnAfterSignIn(navigate);
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setBusy(false);
      toast.error("Google sign-in could not be completed.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/account" });
  }

  return (
    <div className="text-ink">
      <SiteHeader />
      <main className="bg-cream">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="mx-auto w-full max-w-[26rem]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-fawn">Client account</p>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-medium">
              {mode === "signin" ? "Sign in" : "Create an account"}
            </h1>
            <p className="mt-3 text-sm text-ink/60 leading-relaxed">
              Save your measurements and delivery details, keep a cart across devices, and review
              past orders.
            </p>

            {sentConfirmation ? (
              <div className="mt-8 border border-ink/15 bg-paper p-6">
                <p className="font-serif text-xl font-medium">Account created</p>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                  Your CIAO D MILANO account is ready. You can now sign in with {email}.
                </p>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleGoogle}
                  disabled={busy}
                  className="mt-8 w-full border border-ink/20 bg-paper py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] transition-colors hover:border-ink/50 disabled:opacity-50"
                >
                  Continue with Google
                </button>

                <div className="my-7 flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-ink/40">
                  <span className="h-px flex-1 bg-ink/15" />
                  or
                  <span className="h-px flex-1 bg-ink/15" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {mode === "signup" && (
                    <label className="block">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
                        Full name
                      </span>
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        autoComplete="name"
                        className="mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                      />
                    </label>
                  )}
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">Email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
                      Password
                    </span>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      autoComplete={mode === "signup" ? "new-password" : "current-password"}
                      className="mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={busy}
                    className="w-full bg-ink py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {mode === "signin" ? "Sign in" : "Create account"}
                  </button>
                </form>

                <p className="mt-6 text-[12px] text-ink/60">
                  {mode === "signin" ? "New to the maison?" : "Already have an account?"}{" "}
                  <button
                    type="button"
                    onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                    className="font-medium uppercase tracking-[0.15em] text-ink underline decoration-ink/30 underline-offset-4"
                  >
                    {mode === "signin" ? "Create an account" : "Sign in"}
                  </button>
                </p>
              </>
            )}

            <p className="mt-10 text-[12px] text-ink/45">
              <Link to="/collection" className="hover:text-ink">
                Return to the collection
              </Link>
            </p>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-ink lg:min-h-0">
              <HeroSlideshow slides={authSlides} interval={5000} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              <p className="absolute bottom-8 left-8 z-10 max-w-[18ch] font-serif text-2xl leading-tight text-cream">
                Dress with intention.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
