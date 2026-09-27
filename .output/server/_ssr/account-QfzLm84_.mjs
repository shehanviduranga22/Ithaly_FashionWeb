import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-Bxc8_G9k.mjs";
import { _ as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B9yzvQiR.mjs";
import { r as formatPrice } from "./products-Ds4FixyM.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-QfzLm84_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	full_name: "",
	phone: "",
	address_line1: "",
	address_line2: "",
	city: "",
	emirate: ""
};
function AccountPage() {
	const navigate = useNavigate();
	const [profile, setProfile] = (0, import_react.useState)(empty);
	const [email, setEmail] = (0, import_react.useState)("");
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let active = true;
		(async () => {
			const { data: userData } = await supabase.auth.getUser();
			const user = userData.user;
			if (!user || !active) return;
			setEmail(user.email ?? "");
			const { data: row } = await supabase.from("profiles").select("full_name, phone, address_line1, address_line2, city, emirate").eq("id", user.id).maybeSingle();
			if (!active) return;
			const metaName = user.user_metadata?.["full_name"] ?? "";
			setProfile({
				full_name: row?.full_name ?? metaName,
				phone: row?.phone ?? "",
				address_line1: row?.address_line1 ?? "",
				address_line2: row?.address_line2 ?? "",
				city: row?.city ?? "",
				emirate: row?.emirate ?? ""
			});
			const { data: orderRows } = await supabase.from("orders").select("id, created_at, status, total_aed, order_items(product_name, size, color, quantity)").order("created_at", { ascending: false });
			if (active && orderRows) setOrders(orderRows);
		})();
		return () => {
			active = false;
		};
	}, []);
	async function save(e) {
		e.preventDefault();
		setSaving(true);
		const { data: userData } = await supabase.auth.getUser();
		const user = userData.user;
		if (!user) return;
		const { error } = await supabase.from("profiles").upsert({
			id: user.id,
			...profile,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		});
		setSaving(false);
		if (error) toast.error("Your details could not be saved.");
		else toast.success("Details saved.");
	}
	function field(label, key, autoComplete) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: profile[key],
				onChange: (e) => setProfile({
					...profile,
					[key]: e.target.value
				}),
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
								children: "Client account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-serif text-3xl sm:text-4xl font-medium",
								children: "My account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink/55",
								children: email
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: async () => {
								await supabase.auth.signOut();
								navigate({ to: "/" });
							},
							className: "border border-ink/20 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] hover:border-ink/50",
							children: "Sign out"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-14 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: save,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-2xl font-medium",
									children: "Details & delivery address"
								}),
								field("Full name", "full_name", "name"),
								field("Phone", "phone", "tel"),
								field("Address", "address_line1", "address-line1"),
								field("Apartment, villa, floor", "address_line2", "address-line2"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [field("City", "city", "address-level2"), field("Emirate", "emirate", "address-level1")]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: saving,
									className: "bg-ink px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-cream disabled:opacity-50",
									children: "Save details"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl font-medium",
							children: "Order history"
						}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-ink/55",
							children: [
								"No orders yet.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/collection",
									className: "underline decoration-ink/30 underline-offset-4",
									children: "Browse the collection"
								}),
								"."
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 divide-y divide-ink/10 border-y border-ink/15",
							children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[11px] uppercase tracking-[0.2em] text-ink/55",
										children: [
											new Date(order.created_at).toLocaleDateString("en-AE"),
											" ·",
											" ",
											order.status.replace(/_/g, " ")
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm tabular-nums",
										children: formatPrice(Number(order.total_aed))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink/70",
									children: order.order_items.map((i) => `${i.quantity} × ${i.product_name}${i.size ? ` (${i.size})` : ""}`).join(", ")
								})]
							}, order.id))
						})] })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AccountPage as component };
