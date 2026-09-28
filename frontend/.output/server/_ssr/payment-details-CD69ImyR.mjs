import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as getStoredUser, c as useCart, i as getAuthToken } from "./auth-DeL9dCwQ.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-BaozHYWn.mjs";
import { r as formatPrice } from "./products-BLU4_Spt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as startPayment, r as useServerFn } from "./payments.functions-TlABjn8v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-details-CD69ImyR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var authApiUrl = "http://localhost:4000";
function readDraft() {
	if (typeof window === "undefined") return null;
	try {
		const raw = sessionStorage.getItem("cdm-payment-draft");
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function formatCardNumber(value) {
	return value.replace(/\D/g, "").slice(0, 19).replace(/(.{4})/g, "$1 ").trim();
}
function formatExpiry(value) {
	const digits = value.replace(/\D/g, "").slice(0, 4);
	return digits.length > 2 ? `${digits.slice(0, 2)} / ${digits.slice(2)}` : digits;
}
function PaymentDetailsPage() {
	useNavigate();
	useServerFn(startPayment);
	const { clear } = useCart();
	const draft = readDraft();
	const [cardNumber, setCardNumber] = (0, import_react.useState)("");
	const [cardName, setCardName] = (0, import_react.useState)("");
	const [expiry, setExpiry] = (0, import_react.useState)("");
	const [cvc, setCvc] = (0, import_react.useState)("");
	const [cardFlipped, setCardFlipped] = (0, import_react.useState)(false);
	const [placing, setPlacing] = (0, import_react.useState)(false);
	const [paymentSuccess, setPaymentSuccess] = (0, import_react.useState)(false);
	if (!draft) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 py-24 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-4xl",
						children: "Your payment session has expired"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						className: "mt-8 inline-flex bg-ink px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-cream",
						children: "Return to checkout"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
	const displayNumber = cardNumber || "0000 0000 0000 0000";
	const displayName = cardName.toUpperCase() || "YOUR NAME";
	const displayExpiry = expiry || "MM / YY";
	async function handlePayment(e) {
		e.preventDefault();
		setPlacing(true);
		try {
			if (!cardNumber || !cardName || !expiry || !cvc) throw new Error("Please complete all payment details before continuing.");
			const storedUser = getStoredUser();
			const token = getAuthToken();
			if (!storedUser || !token) throw new Error("Please sign in before completing your payment.");
			const response = await fetch(`${authApiUrl}/api/order-details`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify({
					email: storedUser.email,
					address: {
						full_name: draft.form.contact_name,
						phone: draft.form.contact_phone,
						address_line1: draft.form.address_line1,
						address_line2: draft.form.address_line2,
						city: draft.form.city,
						emirate: draft.form.emirate
					},
					notes: draft.form.notes,
					payment_method: "card",
					items: draft.items.map((item) => ({
						slug: item.slug,
						name: item.name,
						image: item.image,
						size: item.size,
						color: item.color,
						quantity: item.quantity,
						price: item.price
					})),
					total_amount: draft.subtotal
				})
			});
			const result = await response.json().catch(() => ({}));
			if (!response.ok) throw new Error(result.message ?? "Your order could not be saved.");
			sessionStorage.removeItem("cdm-payment-draft");
			clear();
			setPaymentSuccess(true);
			toast.success("Your payment successful.");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Payment could not be started.");
		} finally {
			setPlacing(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 py-14 lg:px-10 lg:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
							children: "Secure payment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-serif text-3xl font-medium sm:text-4xl",
							children: "Enter payment details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20",
							children: [paymentSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "order-2 space-y-6 rounded-2xl border border-green-200 bg-green-50 p-8 text-left shadow-sm lg:order-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-[0.28em] text-green-700/80",
										children: "Payment status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-serif text-3xl text-green-900",
										children: "Your payment successful"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 text-sm text-green-900/80",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-green-900",
													children: "Email:"
												}),
												" ",
												getStoredUser()?.email ?? "—"
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-green-900",
													children: "Full name:"
												}),
												" ",
												draft.form.contact_name
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-green-900",
													children: "Phone:"
												}),
												" ",
												draft.form.contact_phone
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-green-900",
													children: "Address:"
												}),
												" ",
												draft.form.address_line1,
												draft.form.address_line2 ? `, ${draft.form.address_line2}` : ""
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-green-900",
													children: "City:"
												}),
												" ",
												draft.form.city
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-green-900",
													children: "Emirate:"
												}),
												" ",
												draft.form.emirate
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-green-900",
													children: "Notes:"
												}),
												" ",
												draft.form.notes || "—"
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-green-900",
												children: "Payment method:"
											}), " Card"] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-green-200 bg-white/70 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-[0.2em] text-green-800/70",
											children: "Order items"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 space-y-2 text-sm text-green-900/80",
											children: draft.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start justify-between gap-3 border-b border-green-100 pb-2 last:border-b-0 last:pb-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													item.quantity,
													" × ",
													item.name,
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "mt-1 block text-[11px] uppercase tracking-[0.15em] text-green-800/60",
														children: [
															item.size ? `Size ${item.size}` : "Size —",
															" · ",
															item.color || "No color"
														]
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "tabular-nums",
													children: formatPrice(item.price * item.quantity)
												})]
											}, item.key))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-t border-green-200 pt-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center justify-between text-sm text-green-900/80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: "Total amount"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-serif text-2xl text-green-900",
												children: formatPrice(draft.subtotal)
											})]
										})
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handlePayment,
								className: "order-2 space-y-5 lg:order-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
											children: "Card number"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											inputMode: "numeric",
											autoComplete: "cc-number",
											value: cardNumber,
											onChange: (e) => setCardNumber(formatCardNumber(e.target.value)),
											placeholder: "1234 5678 9012 3456",
											className: "mt-2 w-full border border-ink/20 bg-cream px-4 py-3 text-sm outline-none focus:border-ink"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
											children: "Name on card"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											autoComplete: "cc-name",
											value: cardName,
											onChange: (e) => setCardName(e.target.value),
											placeholder: "Your name",
											className: "mt-2 w-full border border-ink/20 bg-cream px-4 py-3 text-sm uppercase outline-none focus:border-ink"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
												children: "Expiry"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												inputMode: "numeric",
												autoComplete: "cc-exp",
												value: expiry,
												onChange: (e) => setExpiry(formatExpiry(e.target.value)),
												placeholder: "MM / YY",
												className: "mt-2 w-full border border-ink/20 bg-cream px-4 py-3 text-sm outline-none focus:border-ink"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
												children: "CVC"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												inputMode: "numeric",
												autoComplete: "cc-csc",
												value: cvc,
												onFocus: () => setCardFlipped(true),
												onBlur: () => setCardFlipped(false),
												onChange: (e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4)),
												placeholder: "123",
												className: "mt-2 w-full border border-ink/20 bg-cream px-4 py-3 text-sm outline-none focus:border-ink"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: placing,
										className: "w-full bg-ink px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream disabled:opacity-50",
										children: placing ? "Opening secure payment..." : `Continue to payment - ${formatPrice(draft.subtotal)}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] leading-relaxed text-ink/45",
										children: "Your card details are previewed here and entered again only on the secure payment page."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "order-1 lg:order-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative aspect-[1.58/1] w-full max-w-[520px] [perspective:1200px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${cardFlipped ? "[transform:rotateY(180deg)]" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-0 overflow-hidden rounded-2xl bg-ink p-7 text-cream shadow-xl [backface-visibility:hidden] sm:p-10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-20 size-64 rounded-full border border-cream/15" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-12 size-48 rounded-full border border-cream/10" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative flex h-full flex-col justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] uppercase tracking-[0.3em] text-cream/60",
															children: "CIAO D MILANO"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-serif text-xl italic text-cream/80",
															children: "card"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-mono text-xl tracking-[0.12em] sm:text-2xl",
														children: displayNumber
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-6 flex items-end justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-cream/60",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "max-w-[65%] truncate text-cream",
															children: displayName
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: displayExpiry })]
													})] })]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-0 overflow-hidden rounded-2xl bg-ink text-cream shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-12 bg-black/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "px-7 pt-6 sm:px-10",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-right text-[9px] uppercase tracking-[0.2em] text-cream/50",
													children: "Security code"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 flex h-10 items-center justify-end bg-cream px-3 font-mono text-sm text-ink",
													children: cvc ? "*".repeat(cvc.length) : "***"
												})]
											})]
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
									className: "mt-8 border border-ink/15 bg-cream p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-[0.25em] text-ink/55",
										children: "Order total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-baseline justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm text-ink/65",
											children: [
												draft.items.length,
												" item",
												draft.items.length === 1 ? "" : "s"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif text-2xl",
											children: formatPrice(draft.subtotal)
										})]
									})]
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { PaymentDetailsPage as component };
