import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useCart } from "./site-BddHkowg.mjs";
import { t as supabase } from "./client-Bxc8_G9k.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B9yzvQiR.mjs";
import { r as formatPrice } from "./products-Ds4FixyM.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as startPayment, r as useServerFn } from "./payments.functions-TlABjn8v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BiHlsxIn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var methods = [{
	id: "card",
	name: "Card",
	hint: "Visa, Mastercard and Amex. You enter your card details on Stripe's secure page."
}, {
	id: "satispay",
	name: "Satispay",
	hint: "You are redirected to Satispay to approve the payment in the app."
}];
function CheckoutPage() {
	const navigate = useNavigate();
	const { items, subtotal } = useCart();
	const beginPayment = useServerFn(startPayment);
	const [method, setMethod] = (0, import_react.useState)("card");
	const [form, setForm] = (0, import_react.useState)({
		contact_name: "",
		contact_phone: "",
		address_line1: "",
		address_line2: "",
		city: "",
		emirate: "",
		notes: ""
	});
	const [placing, setPlacing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		(async () => {
			const { data: userData } = await supabase.auth.getUser();
			const user = userData.user;
			if (!user) return;
			const { data: row } = await supabase.from("profiles").select("full_name, phone, address_line1, address_line2, city, emirate").eq("id", user.id).maybeSingle();
			if (!row) return;
			setForm((prev) => ({
				...prev,
				contact_name: row.full_name ?? prev.contact_name,
				contact_phone: row.phone ?? prev.contact_phone,
				address_line1: row.address_line1 ?? prev.address_line1,
				address_line2: row.address_line2 ?? prev.address_line2,
				city: row.city ?? prev.city,
				emirate: row.emirate ?? prev.emirate
			}));
		})();
	}, []);
	async function placeOrder(e) {
		e.preventDefault();
		if (items.length === 0) return;
		setPlacing(true);
		try {
			const { data: userData } = await supabase.auth.getUser();
			const user = userData.user;
			if (!user) throw new Error("Please sign in again.");
			const { data: order, error } = await supabase.from("orders").insert({
				user_id: user.id,
				total_aed: subtotal,
				payment_method: method,
				...form
			}).select("id").single();
			if (error || !order) throw error ?? /* @__PURE__ */ new Error("Order could not be created.");
			const { error: itemsError } = await supabase.from("order_items").insert(items.map((i) => ({
				order_id: order.id,
				product_slug: i.slug,
				product_name: i.name,
				size: i.size,
				color: i.color,
				unit_price_aed: i.price,
				quantity: i.quantity
			})));
			if (itemsError) throw itemsError;
			await supabase.from("profiles").upsert({
				id: user.id,
				full_name: form.contact_name,
				phone: form.contact_phone,
				address_line1: form.address_line1,
				address_line2: form.address_line2,
				city: form.city,
				emirate: form.emirate,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			});
			const { url } = await beginPayment({ data: {
				orderId: order.id,
				method,
				returnTo: window.location.href
			} });
			window.location.href = url;
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Your payment could not be started.");
			setPlacing(false);
		}
	}
	function field(label, key, required = false, autoComplete) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: form[key],
				onChange: (e) => setForm({
					...form,
					[key]: e.target.value
				}),
				required,
				autoComplete,
				className: "mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
			})]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1240px] px-6 lg:px-10 py-14 lg:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
							children: "Checkout"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-serif text-3xl sm:text-4xl font-medium",
							children: "Delivery & payment"
						}),
						items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 border-t border-ink/15 pt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink/60",
								children: "Your bag is empty."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => navigate({ to: "/collection" }),
								className: "mt-6 bg-ink px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream",
								children: "Browse the collection"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								id: "checkout-form",
								onSubmit: placeOrder,
								className: "space-y-4",
								children: [
									field("Full name", "contact_name", true, "name"),
									field("Phone", "contact_phone", true, "tel"),
									field("Address", "address_line1", true, "address-line1"),
									field("Apartment, villa, floor", "address_line2", false, "address-line2"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-4",
										children: [field("City", "city", true, "address-level2"), field("Emirate", "emirate", true, "address-level1")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
											children: "Notes for the atelier"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: form.notes,
											onChange: (e) => setForm({
												...form,
												notes: e.target.value
											}),
											rows: 3,
											className: "mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: placing,
										className: "bg-ink px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream disabled:opacity-50",
										children: placing ? "Opening payment…" : "Place order"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
									children: "Payment method"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1",
									children: methods.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: `cursor-pointer border p-5 transition-colors ${method === option.id ? "border-ink bg-cream" : "border-ink/20 hover:border-ink/40"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												form: "checkout-form",
												type: "radio",
												name: "payment_method",
												value: option.id,
												checked: method === option.id,
												onChange: () => setMethod(option.id),
												className: "accent-ink"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[12px] font-medium uppercase tracking-[0.2em]",
												children: option.name
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 block text-[12px] leading-relaxed text-ink/55",
											children: option.hint
										})]
									}, option.id))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
									className: "h-fit border border-ink/15 bg-cream p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-[0.25em] text-ink/55",
											children: "Your order"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-5 space-y-4",
											children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between gap-4 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-ink/70",
													children: [
														i.quantity,
														" × ",
														i.name,
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "block text-[11px] uppercase tracking-[0.15em] text-ink/45",
															children: [
																"Size ",
																i.size,
																" · ",
																i.color
															]
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "tabular-nums",
													children: formatPrice(i.price * i.quantity)
												})]
											}, i.key))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex items-baseline justify-between border-t border-ink/10 pt-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-ink/70",
												children: "Total"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-serif text-2xl tabular-nums",
												children: formatPrice(subtotal)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-[12px] leading-relaxed text-ink/55",
											children: "Payment is completed on a secure page hosted by Stripe or Satispay. Satispay settles in euro, converted from your AED total."
										})
									]
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
export { CheckoutPage as component };
