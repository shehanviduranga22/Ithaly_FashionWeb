import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-Bxc8_G9k.mjs";
import { _ as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B9yzvQiR.mjs";
import { t as HeroSlideshow } from "./HeroSlideshow-B348ghwl.mjs";
import { t as hero_slide_3_default } from "./hero-slide-3-5wvjYLpZ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as hero_slide_2_default, t as hero_campaign_default } from "./hero-slide-2-Du7Y8Siz.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-D6lqXR4b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		...opts,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
var authSlides = [
	{
		src: hero_campaign_default,
		alt: "Man in a charcoal tailored jacket and cream trousers"
	},
	{
		src: hero_slide_2_default,
		alt: "Man in a cream linen shirt beneath a limestone archway"
	},
	{
		src: hero_slide_3_default,
		alt: "Man in a camel double-breasted jacket in an Italian marble arcade"
	}
];
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [sentConfirmation, setSentConfirmation] = (0, import_react.useState)(false);
	async function handleSubmit(e) {
		e.preventDefault();
		setBusy(true);
		try {
			if (mode === "signup") {
				const { data, error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: window.location.origin,
						data: { full_name: fullName }
					}
				});
				if (error) throw error;
				if (!data.session) {
					setSentConfirmation(true);
					return;
				}
				toast.success("Welcome to the maison.");
				navigate({ to: "/account" });
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				toast.success("Signed in.");
				navigate({ to: "/account" });
			}
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Something went wrong.");
		} finally {
			setBusy(false);
		}
	}
	async function handleGoogle() {
		setBusy(true);
		const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
		if (result.error) {
			setBusy(false);
			toast.error("Google sign-in could not be completed.");
			return;
		}
		if (result.redirected) return;
		navigate({ to: "/account" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "bg-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-16 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-[26rem]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
									children: "Client account"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 font-serif text-3xl sm:text-4xl font-medium",
									children: mode === "signin" ? "Sign in" : "Create an account"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-ink/60 leading-relaxed",
									children: "Save your measurements and delivery details, keep a cart across devices, and review past orders."
								}),
								sentConfirmation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 border border-ink/15 bg-paper p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-xl font-medium",
										children: "Check your email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-ink/65 leading-relaxed",
										children: [
											"We sent a confirmation link to ",
											email,
											". Open it to finish creating your account, then return here to sign in."
										]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: handleGoogle,
										disabled: busy,
										className: "mt-8 w-full border border-ink/20 bg-paper py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] transition-colors hover:border-ink/50 disabled:opacity-50",
										children: "Continue with Google"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "my-7 flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-ink/40",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-ink/15" }),
											"or",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-ink/15" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleSubmit,
										className: "space-y-4",
										children: [
											mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
													children: "Full name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													value: fullName,
													onChange: (e) => setFullName(e.target.value),
													required: true,
													autoComplete: "name",
													className: "mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
													children: "Email"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													value: email,
													onChange: (e) => setEmail(e.target.value),
													required: true,
													autoComplete: "email",
													className: "mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
													children: "Password"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "password",
													value: password,
													onChange: (e) => setPassword(e.target.value),
													required: true,
													minLength: 8,
													autoComplete: mode === "signup" ? "new-password" : "current-password",
													className: "mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												disabled: busy,
												className: "w-full bg-ink py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-90 disabled:opacity-50",
												children: mode === "signin" ? "Sign in" : "Create account"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-6 text-[12px] text-ink/60",
										children: [
											mode === "signin" ? "New to the maison?" : "Already have an account?",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
												className: "font-medium uppercase tracking-[0.15em] text-ink underline decoration-ink/30 underline-offset-4",
												children: mode === "signin" ? "Create an account" : "Sign in"
											})
										]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-10 text-[12px] text-ink/45",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/collection",
										className: "hover:text-ink",
										children: "Return to the collection"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-h-[420px] overflow-hidden bg-ink lg:min-h-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlideshow, {
									slides: authSlides,
									interval: 5e3
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "absolute bottom-8 left-8 z-10 max-w-[18ch] font-serif text-2xl leading-tight text-cream",
									children: "Dress with intention."
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AuthPage as component };
