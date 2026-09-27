import { r as site } from "./site-BddHkowg.mjs";
import { P as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getProduct, r as formatPrice } from "./products-Ds4FixyM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collection._slug-BYurP7Ly.js
var $$splitComponentImporter = () => import("./collection._slug-D5sN9be7.mjs");
var $$splitNotFoundComponentImporter = () => import("./collection._slug-BUrEZvaA.mjs");
var Route = createFileRoute("/collection/$slug")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Piece not found — CIAO D MILANO" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { product } = loaderData;
		const title = `${product.name} — ${formatPrice(product.price)} | CIAO D MILANO`;
		const description = `${product.name}: ${product.description} Sizes ${product.sizes.join(", ")}. Order on WhatsApp.`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: `/collection/${params.slug}`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: `/collection/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Product",
					name: product.name,
					description: product.description,
					brand: {
						"@type": "Brand",
						name: site.name
					},
					category: product.category,
					offers: {
						"@type": "Offer",
						price: product.price,
						priceCurrency: "AED",
						availability: "https://schema.org/InStock"
					}
				})
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
