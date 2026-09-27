globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-22T09:10:32.000Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-22T09:10:42.000Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/account-0IkPSyxN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10fe-xSo24FrM6kNH5xlEx4Qtu3wiMfU\"",
		"mtime": "2026-09-24T20:07:03.111Z",
		"size": 4350,
		"path": "../public/assets/account-0IkPSyxN.js"
	},
	"/assets/auth-BjpsvfTh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22be-7etGS6LcUA2E6AZao8Q08r06W1k\"",
		"mtime": "2026-09-24T20:07:03.123Z",
		"size": 8894,
		"path": "../public/assets/auth-BjpsvfTh.js"
	},
	"/assets/atelier-bu4icCRa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-XKM4OQFujbvrbwLML2bUnwkOvSM\"",
		"mtime": "2026-09-24T20:07:03.119Z",
		"size": 52,
		"path": "../public/assets/atelier-bu4icCRa.js"
	},
	"/assets/collection.index-BD5p-cK4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"901-IjYun1D1ZQlsB7jAorEd0qKyPIs\"",
		"mtime": "2026-09-24T20:07:03.179Z",
		"size": 2305,
		"path": "../public/assets/collection.index-BD5p-cK4.js"
	},
	"/assets/collection._slug-BmhoWLQz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b3-yzBEOb79YckIm2rKcbeAAUKEB7U\"",
		"mtime": "2026-09-24T20:07:03.179Z",
		"size": 691,
		"path": "../public/assets/collection._slug-BmhoWLQz.js"
	},
	"/assets/collection._slug-0afq1fBe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15d0-03/156QnW6bnum7lmzCWpBHHllU\"",
		"mtime": "2026-09-24T20:07:03.160Z",
		"size": 5584,
		"path": "../public/assets/collection._slug-0afq1fBe.js"
	},
	"/assets/atelier-1_6TRPrf.jpg": {
		"type": "image/jpeg",
		"etag": "\"28389-N5Pjq86LQn1BbOGcRXcD53ojEE8\"",
		"mtime": "2026-09-24T20:07:03.589Z",
		"size": 164745,
		"path": "../public/assets/atelier-1_6TRPrf.jpg"
	},
	"/assets/detail-lapel-DhFSc8gu.jpg": {
		"type": "image/jpeg",
		"etag": "\"16d87-gzbRO3PP9Euo5dTW6aTnzJAutZ0\"",
		"mtime": "2026-09-24T20:07:03.597Z",
		"size": 93575,
		"path": "../public/assets/detail-lapel-DhFSc8gu.jpg"
	},
	"/assets/cart-Dncjn62t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"db9-Vr1BEbUR8fGkl51dV/CUU/zDJxI\"",
		"mtime": "2026-09-24T20:07:03.139Z",
		"size": 3513,
		"path": "../public/assets/cart-Dncjn62t.js"
	},
	"/assets/delivery-DGekUHLW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc0-9wf+O9VNviUJGmnUCInHHyeeBes\"",
		"mtime": "2026-09-24T20:07:03.202Z",
		"size": 3264,
		"path": "../public/assets/delivery-DGekUHLW.js"
	},
	"/assets/hero-slide-2-C1xvJoM5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"62-7xlFmZkBZQXfiYwsTf2tUY+lsTo\"",
		"mtime": "2026-09-24T20:07:03.220Z",
		"size": 98,
		"path": "../public/assets/hero-slide-2-C1xvJoM5.js"
	},
	"/assets/hero-campaign-DoVE1WwU.jpg": {
		"type": "image/jpeg",
		"etag": "\"35537-xN3H+E5lC1Rcz7n5VgAbFlUGId4\"",
		"mtime": "2026-09-24T20:07:03.605Z",
		"size": 218423,
		"path": "../public/assets/hero-campaign-DoVE1WwU.jpg"
	},
	"/assets/about-uO39mMYI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11d4-1vGLGeP0SqLsiCWW3BBucGB8dHE\"",
		"mtime": "2026-09-24T20:07:03.091Z",
		"size": 4564,
		"path": "../public/assets/about-uO39mMYI.js"
	},
	"/assets/matchContext-DpaA1RFy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-uf4S49HNqZ++/yL6WtBKT0DKHnE\"",
		"mtime": "2026-09-24T20:07:03.227Z",
		"size": 159,
		"path": "../public/assets/matchContext-DpaA1RFy.js"
	},
	"/assets/hero-slide-3-B01F281z.jpg": {
		"type": "image/jpeg",
		"etag": "\"26bfb-qzKl++eiaqMMMN6vYh3g3kZSZ60\"",
		"mtime": "2026-09-24T20:07:03.617Z",
		"size": 158715,
		"path": "../public/assets/hero-slide-3-B01F281z.jpg"
	},
	"/assets/checkout-Cr_h5deV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18fb-Jo01c5Zz0wX6oT2fpc+FUa9moGs\"",
		"mtime": "2026-09-24T20:07:03.142Z",
		"size": 6395,
		"path": "../public/assets/checkout-Cr_h5deV.js"
	},
	"/assets/hero-slide-2-qIAj8tcK.jpg": {
		"type": "image/jpeg",
		"etag": "\"35b9d-Skd3k8u44TsmhclljLr+kdzqcbo\"",
		"mtime": "2026-09-24T20:07:03.611Z",
		"size": 220061,
		"path": "../public/assets/hero-slide-2-qIAj8tcK.jpg"
	},
	"/assets/contact-BPOWKvdX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1386-JKERzFafAzbmtLwQIe0/+Sba9lk\"",
		"mtime": "2026-09-24T20:07:03.185Z",
		"size": 4998,
		"path": "../public/assets/contact-BPOWKvdX.js"
	},
	"/assets/HeroSlideshow-feabwQi2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ba-LfgJv+2/fHhhp3UqNtWJ6xNgads\"",
		"mtime": "2026-09-24T20:07:03.069Z",
		"size": 954,
		"path": "../public/assets/HeroSlideshow-feabwQi2.js"
	},
	"/assets/p-jacket-crociera-3-D1GFO924.jpg": {
		"type": "image/jpeg",
		"etag": "\"18f74-4MKUhHlvjUG5pz/66X95AeJgsns\"",
		"mtime": "2026-09-24T20:07:03.629Z",
		"size": 102260,
		"path": "../public/assets/p-jacket-crociera-3-D1GFO924.jpg"
	},
	"/assets/hero-slide-3-KIlNnPWG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39-8PyPzUs+CyhRXNZeZGU0/zKQIec\"",
		"mtime": "2026-09-24T20:07:03.225Z",
		"size": 57,
		"path": "../public/assets/hero-slide-3-KIlNnPWG.js"
	},
	"/assets/index-BC5I6v6M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c71b-mnOCtdpUfVr4dHviRWIXuooFSFY\"",
		"mtime": "2026-09-24T20:07:01.909Z",
		"size": 444187,
		"path": "../public/assets/index-BC5I6v6M.js"
	},
	"/assets/p-jacket-crociera-2-CNTYCshP.jpg": {
		"type": "image/jpeg",
		"etag": "\"17710-nq4W9kNedaTAhWQFepbop05QL7Q\"",
		"mtime": "2026-09-24T20:07:03.625Z",
		"size": 96016,
		"path": "../public/assets/p-jacket-crociera-2-CNTYCshP.jpg"
	},
	"/assets/p-jacket-crociera-ouFsOZBh.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cbbc-ezq3ZjR8fzBHZUvpOGp0jayDUjU\"",
		"mtime": "2026-09-24T20:07:03.629Z",
		"size": 117692,
		"path": "../public/assets/p-jacket-crociera-ouFsOZBh.jpg"
	},
	"/assets/p-jacket-duomo-3-BDPcy-DJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"215cd-a8mPhPKm5FiqB1+mZk871lNdxaQ\"",
		"mtime": "2026-09-24T20:07:03.645Z",
		"size": 136653,
		"path": "../public/assets/p-jacket-duomo-3-BDPcy-DJ.jpg"
	},
	"/assets/p-jacket-duomo-2-DYZgqE8I.jpg": {
		"type": "image/jpeg",
		"etag": "\"282cd-Xj1MaTsM9stXue14ZjlcetmnL/8\"",
		"mtime": "2026-09-24T20:07:03.641Z",
		"size": 164557,
		"path": "../public/assets/p-jacket-duomo-2-DYZgqE8I.jpg"
	},
	"/assets/p-shirt-colonna-2-DzQHdAnW.jpg": {
		"type": "image/jpeg",
		"etag": "\"219d9-U8Vzk59MM293Bd4aUnx7C/dDt3w\"",
		"mtime": "2026-09-24T20:07:03.647Z",
		"size": 137689,
		"path": "../public/assets/p-shirt-colonna-2-DzQHdAnW.jpg"
	},
	"/assets/p-jacket-duomo-G_bvaO7S.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c0e8-8CMW26H40LwfXgNVa6CBmkjzzRM\"",
		"mtime": "2026-09-24T20:07:03.647Z",
		"size": 114920,
		"path": "../public/assets/p-jacket-duomo-G_bvaO7S.jpg"
	},
	"/assets/p-shirt-colonna-3-CSVTXMZW.jpg": {
		"type": "image/jpeg",
		"etag": "\"17d0b-KQtEYzm9LXUbkZ4bCdkijifMTPY\"",
		"mtime": "2026-09-24T20:07:03.649Z",
		"size": 97547,
		"path": "../public/assets/p-shirt-colonna-3-CSVTXMZW.jpg"
	},
	"/assets/p-shirt-colonna-CSRa7RRG.jpg": {
		"type": "image/jpeg",
		"etag": "\"1644e-xDar4GFlI6KoyjRJrw04vG5UmR8\"",
		"mtime": "2026-09-24T20:07:03.654Z",
		"size": 91214,
		"path": "../public/assets/p-shirt-colonna-CSRa7RRG.jpg"
	},
	"/assets/p-shirt-tessuto-S7sNN7jz.jpg": {
		"type": "image/jpeg",
		"etag": "\"19f24-V6aafwDqe5bHeCI1s/qlOqz73RM\"",
		"mtime": "2026-09-24T20:07:03.659Z",
		"size": 106276,
		"path": "../public/assets/p-shirt-tessuto-S7sNN7jz.jpg"
	},
	"/assets/p-shirt-tessuto-3-WsUr3M7H.jpg": {
		"type": "image/jpeg",
		"etag": "\"18356-ydp17+pT6iQiGul8spe0SKXi/F0\"",
		"mtime": "2026-09-24T20:07:03.657Z",
		"size": 99158,
		"path": "../public/assets/p-shirt-tessuto-3-WsUr3M7H.jpg"
	},
	"/assets/p-shirt-tessuto-2-Bll2ifbu.jpg": {
		"type": "image/jpeg",
		"etag": "\"2050a-k++xkqUQpamrhrlyUOQHrc1m+wY\"",
		"mtime": "2026-09-24T20:07:03.656Z",
		"size": 132362,
		"path": "../public/assets/p-shirt-tessuto-2-Bll2ifbu.jpg"
	},
	"/assets/p-tee-duomo-2-CumPjH6u.jpg": {
		"type": "image/jpeg",
		"etag": "\"25ead-8KyKGZ1ehuDMVf+kxxepZL2OkPI\"",
		"mtime": "2026-09-24T20:07:03.663Z",
		"size": 155309,
		"path": "../public/assets/p-tee-duomo-2-CumPjH6u.jpg"
	},
	"/assets/p-tee-duomo-3-BYSWHoEc.jpg": {
		"type": "image/jpeg",
		"etag": "\"20383-lNqoqcKu9S1y4SadC4wQ9b5IcIk\"",
		"mtime": "2026-09-24T20:07:03.665Z",
		"size": 131971,
		"path": "../public/assets/p-tee-duomo-3-BYSWHoEc.jpg"
	},
	"/assets/p-tee-duomo-CokBJrQd.jpg": {
		"type": "image/jpeg",
		"etag": "\"111f7-JnLK6pS4RfLXpdDHCxBUBxKL0RA\"",
		"mtime": "2026-09-24T20:07:03.668Z",
		"size": 70135,
		"path": "../public/assets/p-tee-duomo-CokBJrQd.jpg"
	},
	"/assets/p-trouser-sartoria-2-ByHISzN3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dbe8-8BWEmnTot5WBjbBwPAaj+MeiRIE\"",
		"mtime": "2026-09-24T20:07:03.669Z",
		"size": 121832,
		"path": "../public/assets/p-trouser-sartoria-2-ByHISzN3.jpg"
	},
	"/assets/p-tee-garza-3-D4fyEc7-.jpg": {
		"type": "image/jpeg",
		"etag": "\"16b9e-7KFnb9D+sfk5ek0wWnWubBt5eWI\"",
		"mtime": "2026-09-24T20:07:03.669Z",
		"size": 93086,
		"path": "../public/assets/p-tee-garza-3-D4fyEc7-.jpg"
	},
	"/assets/p-tee-garza-D-7pfd6n.jpg": {
		"type": "image/jpeg",
		"etag": "\"12ff5-BBlA5RhCsqlVweqWfzhCRn6fBAM\"",
		"mtime": "2026-09-24T20:07:03.669Z",
		"size": 77813,
		"path": "../public/assets/p-tee-garza-D-7pfd6n.jpg"
	},
	"/assets/p-trouser-sartoria-DbOsn7Aj.jpg": {
		"type": "image/jpeg",
		"etag": "\"11663-3jVIyoDtNz4/85sAFOJByHigl3I\"",
		"mtime": "2026-09-24T20:07:03.676Z",
		"size": 71267,
		"path": "../public/assets/p-trouser-sartoria-DbOsn7Aj.jpg"
	},
	"/assets/p-tee-garza-2-D060-onf.jpg": {
		"type": "image/jpeg",
		"etag": "\"15de7-raY/z+MwIbviIJKkS5jZfA3eEYg\"",
		"mtime": "2026-09-24T20:07:03.669Z",
		"size": 89575,
		"path": "../public/assets/p-tee-garza-2-D060-onf.jpg"
	},
	"/assets/p-trouser-vestibolo-2-CZ7fAaiX.jpg": {
		"type": "image/jpeg",
		"etag": "\"13fa0-6c8Oxqbq+W/u2JSj7QCuuaBWDWk\"",
		"mtime": "2026-09-24T20:07:03.678Z",
		"size": 81824,
		"path": "../public/assets/p-trouser-vestibolo-2-CZ7fAaiX.jpg"
	},
	"/assets/p-trouser-vestibolo-CVRVHNU9.jpg": {
		"type": "image/jpeg",
		"etag": "\"ba67-j0nNnKcvtPIvUoPcxMXj5ZHvS1M\"",
		"mtime": "2026-09-24T20:07:03.682Z",
		"size": 47719,
		"path": "../public/assets/p-trouser-vestibolo-CVRVHNU9.jpg"
	},
	"/assets/payments.functions-BWNFXaNu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"139c-0ltQy490oyCETt39qNqwgxpdam4\"",
		"mtime": "2026-09-24T20:07:03.235Z",
		"size": 5020,
		"path": "../public/assets/payments.functions-BWNFXaNu.js"
	},
	"/assets/p-trouser-sartoria-3-DQDWL2GJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b44c-gVx1fU5MGf/WF11iFep+Xf+SlP4\"",
		"mtime": "2026-09-24T20:07:03.675Z",
		"size": 111692,
		"path": "../public/assets/p-trouser-sartoria-3-DQDWL2GJ.jpg"
	},
	"/assets/ProductCard-DqSBzazH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b3-Syyi10kYavyaRkx6iMyCVXMAKNk\"",
		"mtime": "2026-09-24T20:07:03.069Z",
		"size": 1459,
		"path": "../public/assets/ProductCard-DqSBzazH.js"
	},
	"/assets/p-trouser-vestibolo-3-C5HpQo6j.jpg": {
		"type": "image/jpeg",
		"etag": "\"245ed-sw0JFH3JL/mECu6kfE9WPjON5Cw\"",
		"mtime": "2026-09-24T20:07:03.680Z",
		"size": 148973,
		"path": "../public/assets/p-trouser-vestibolo-3-C5HpQo6j.jpg"
	},
	"/assets/payment-return-BDR50sKb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a67-tux32RSkX63TkDNqp5NfmECXoVQ\"",
		"mtime": "2026-09-24T20:07:03.229Z",
		"size": 2663,
		"path": "../public/assets/payment-return-BDR50sKb.js"
	},
	"/assets/route-DvN1a82k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-sj3jEzpj9cWikYyxQh36H27sWiI\"",
		"mtime": "2026-09-24T20:07:03.243Z",
		"size": 138,
		"path": "../public/assets/route-DvN1a82k.js"
	},
	"/assets/redirect-DCb_aIiF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"271-AJO48VqfkUfrNYq6mvZqsvvYRKY\"",
		"mtime": "2026-09-24T20:07:03.243Z",
		"size": 625,
		"path": "../public/assets/redirect-DCb_aIiF.js"
	},
	"/assets/SiteFooter-SA1qcFcL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a5e-cXVmSqkz+rE73OTYAVe39zga2dY\"",
		"mtime": "2026-09-24T20:07:03.076Z",
		"size": 6750,
		"path": "../public/assets/SiteFooter-SA1qcFcL.js"
	},
	"/assets/routes-uHjzqary.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17ef-FMLtwtnNjQGVO8NEURXVAs1MTYU\"",
		"mtime": "2026-09-24T20:07:03.243Z",
		"size": 6127,
		"path": "../public/assets/routes-uHjzqary.js"
	},
	"/assets/site-BeHnh1_a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"377a5-1/IncsSkzqN7BDoiIs2LYaUqPd4\"",
		"mtime": "2026-09-24T20:07:03.269Z",
		"size": 227237,
		"path": "../public/assets/site-BeHnh1_a.js"
	},
	"/assets/useStore-I5DtTLOq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d01-HYDmEr1smzxqbveCTc2Nx9uP5z8\"",
		"mtime": "2026-09-24T20:07:03.442Z",
		"size": 27905,
		"path": "../public/assets/useStore-I5DtTLOq.js"
	},
	"/assets/styles-D7TF3cHq.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15bb0-zWHKjus1Hn42sM7a42nGbEYt0wU\"",
		"mtime": "2026-09-24T20:07:03.684Z",
		"size": 89008,
		"path": "../public/assets/styles-D7TF3cHq.css"
	},
	"/assets/WhatsAppButton-Bso_H4Wz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21e-hFennw9nZphAgUKBVT5R5hTha7A\"",
		"mtime": "2026-09-24T20:07:03.089Z",
		"size": 542,
		"path": "../public/assets/WhatsAppButton-Bso_H4Wz.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_IBfHMT = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IBfHMT
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
