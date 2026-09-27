import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as getStoredUser, i as getAuthToken } from "./auth-DeL9dCwQ.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, r as useAuth, t as SiteFooter } from "./SiteFooter-d3oh0FjW.mjs";
import { a as products, r as formatPrice } from "./products-BLU4_Spt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-yqTCpWpw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var authApiUrl = "http://localhost:4000";
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
	const { user, signOut } = useAuth();
	const [profile, setProfile] = (0, import_react.useState)(empty);
	const [email, setEmail] = (0, import_react.useState)("");
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [savedDetails, setSavedDetails] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = getStoredUser();
		if (!stored) return;
		setEmail(stored.email);
		const headers = { Authorization: `Bearer ${getAuthToken() ?? ""}` };
		Promise.all([fetch(`${authApiUrl}/api/account/details`, { headers }), fetch(`${authApiUrl}/api/order-details`, { headers })]).then(async ([detailsResponse, ordersResponse]) => {
			if (!detailsResponse.ok) throw new Error("Could not load delivery details.");
			if (!ordersResponse.ok) throw new Error("Could not load order history.");
			return {
				detailsData: await detailsResponse.json(),
				ordersData: await ordersResponse.json()
			};
		}).then(({ detailsData, ordersData }) => {
			setSavedDetails(detailsData.details);
			setOrders(ordersData.orders);
		}).catch(() => toast.error("Could not load your account history."));
	}, []);
	async function save(e) {
		e.preventDefault();
		setSaving(true);
		try {
			const response = await fetch(`${authApiUrl}/api/account/details`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${getAuthToken() ?? ""}`
				},
				body: JSON.stringify(profile)
			});
			const result = await response.json();
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
	const displayName = getStoredUser()?.fullName || user?.email?.split("@")[0] || "Client";
	const initials = displayName.split(/\s+/).map((part) => part[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
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
						className: "mt-4 grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "border border-ink/15 bg-cream p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.3em] text-fawn",
									children: "Client account"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-20 shrink-0 place-items-center rounded-full bg-ink font-serif text-2xl text-cream",
										"aria-label": `${displayName} account picture`,
										role: "img",
										children: initials || "C"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "font-serif text-3xl font-medium",
											children: displayName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 truncate text-sm text-ink/55",
											children: email
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										signOut();
										navigate({ to: "/" });
									},
									className: "mt-8 w-full border border-ink/20 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] hover:border-ink/50",
									children: "Sign out"
								}),
								savedDetails && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 border border-ink/15 bg-paper p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-[0.2em] text-fawn",
											children: "Saved delivery details"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-1 text-sm text-ink/70",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-medium text-ink",
													children: savedDetails.full_name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: savedDetails.phone }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: savedDetails.address_line1 }),
												savedDetails.address_line2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: savedDetails.address_line2 }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													savedDetails.city,
													", ",
													savedDetails.emirate
												] })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setProfile(savedDetails);
												setSavedDetails(null);
											},
											className: "mt-5 border border-ink/20 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] hover:border-ink/50",
											children: "Edit details"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
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
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
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
							className: "mt-5 grid gap-6",
							children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border border-ink/15 bg-cream p-5 lg:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-start justify-between gap-4 border-b border-ink/10 pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-[0.2em] text-fawn",
											children: "Order"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-[11px] uppercase tracking-[0.16em] text-ink/55",
											children: [
												new Date(order.createdAt).toLocaleDateString("en-AE"),
												" · ",
												order.status.replace(/_/g, " ")
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] uppercase tracking-[0.16em] text-ink/55",
												children: "Total"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-serif text-2xl",
												children: formatPrice(Number(order.totalAmount))
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 grid gap-3 sm:grid-cols-2",
										children: order.items.map((item, index) => {
											const product = item.slug ? products.find((candidate) => candidate.slug === item.slug) : void 0;
											const image = item.image || product?.image;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-3 border border-ink/10 bg-paper p-2.5",
												children: [image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: image,
													alt: item.name,
													className: "size-16 shrink-0 object-cover"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "size-16 shrink-0 bg-ink/10",
													"aria-hidden": "true"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 py-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-medium",
														children: item.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-2 text-[11px] uppercase tracking-[0.14em] text-ink/55",
														children: [
															item.quantity,
															" × ",
															item.size,
															" · ",
															item.color
														]
													})]
												})]
											}, `${order.id}-${item.slug ?? item.name}-${index}`);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 grid gap-5 border-t border-ink/10 pt-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-[0.2em] text-fawn",
											children: "Delivered to"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-sm leading-relaxed text-ink/70",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-ink",
													children: order.address.full_name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												order.address.phone,
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												order.address.address_line1,
												order.address.address_line2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), order.address.address_line2] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												order.address.city,
												", ",
												order.address.emirate
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-[0.2em] text-fawn",
											children: "Payment"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm uppercase tracking-[0.14em] text-ink/70",
											children: order.paymentMethod
										})] })]
									})
								]
							}, order.id))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AccountPage as component };
