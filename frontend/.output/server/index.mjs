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
	"/assets/account-QxOnXPHK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cba-ZF8F3TGx9znwpiBmcXwxou4AcQc\"",
		"mtime": "2026-09-28T00:01:34.239Z",
		"size": 7354,
		"path": "../public/assets/account-QxOnXPHK.js"
	},
	"/assets/atelier-1_6TRPrf.jpg": {
		"type": "image/jpeg",
		"etag": "\"28389-N5Pjq86LQn1BbOGcRXcD53ojEE8\"",
		"mtime": "2026-09-28T00:01:34.542Z",
		"size": 164745,
		"path": "../public/assets/atelier-1_6TRPrf.jpg"
	},
	"/assets/cart-0_ZaAkhd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f99-Zgw1W5A861r9B6PaQqT2MhTmPGI\"",
		"mtime": "2026-09-28T00:01:34.275Z",
		"size": 3993,
		"path": "../public/assets/cart-0_ZaAkhd.js"
	},
	"/assets/checkout-CVKwmxOv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1edf-Mydkg/1H+nUDNgkDqzpr3g38wz0\"",
		"mtime": "2026-09-28T00:01:34.283Z",
		"size": 7903,
		"path": "../public/assets/checkout-CVKwmxOv.js"
	},
	"/assets/auth-DQT7gNH_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"270c-ywve/vA/JNTBNDesKOum5llXcbg\"",
		"mtime": "2026-09-28T00:01:34.259Z",
		"size": 9996,
		"path": "../public/assets/auth-DQT7gNH_.js"
	},
	"/assets/collection._slug-COAbUEbp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1594-218epIJOijPmuXAjFTSzJdcpCZ4\"",
		"mtime": "2026-09-28T00:01:34.292Z",
		"size": 5524,
		"path": "../public/assets/collection._slug-COAbUEbp.js"
	},
	"/assets/about-DZqGktf2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24e6-fvb92iVc5i1rodnM/kIkXAIHk1g\"",
		"mtime": "2026-09-28T00:01:34.222Z",
		"size": 9446,
		"path": "../public/assets/about-DZqGktf2.js"
	},
	"/assets/collection.index-ZeVhWsgA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be3-IQPdbKKpWcJZpDeEsSccbtMJwlU\"",
		"mtime": "2026-09-28T00:01:34.306Z",
		"size": 3043,
		"path": "../public/assets/collection.index-ZeVhWsgA.js"
	},
	"/assets/collection._slug-DIH8sUxx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b3-UF6a16IwcayhEytI+5ZlSYEyEDw\"",
		"mtime": "2026-09-28T00:01:34.304Z",
		"size": 691,
		"path": "../public/assets/collection._slug-DIH8sUxx.js"
	},
	"/assets/auth-BgRwdmER.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2478-rzqKYt21fms0J181C+I4AC3fd5Y\"",
		"mtime": "2026-09-28T00:01:34.246Z",
		"size": 9336,
		"path": "../public/assets/auth-BgRwdmER.js"
	},
	"/assets/contact-oenTG_Mr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1386-sZJ65cvhpbZOEih4ZR8Zya1dm6Q\"",
		"mtime": "2026-09-28T00:01:34.310Z",
		"size": 4998,
		"path": "../public/assets/contact-oenTG_Mr.js"
	},
	"/assets/detail-lapel-DhFSc8gu.jpg": {
		"type": "image/jpeg",
		"etag": "\"16d87-gzbRO3PP9Euo5dTW6aTnzJAutZ0\"",
		"mtime": "2026-09-28T00:01:34.567Z",
		"size": 93575,
		"path": "../public/assets/detail-lapel-DhFSc8gu.jpg"
	},
	"/assets/delivery-fwfhythM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f17-TPiNyyDRc1aHGC1URegwnXJLhfg\"",
		"mtime": "2026-09-28T00:01:34.320Z",
		"size": 7959,
		"path": "../public/assets/delivery-fwfhythM.js"
	},
	"/assets/detail-lapel-COqZmPWi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39-4yk1IHUKnb7vT4J5iFCJ3ghrQA4\"",
		"mtime": "2026-09-28T00:01:34.336Z",
		"size": 57,
		"path": "../public/assets/detail-lapel-COqZmPWi.js"
	},
	"/assets/HeroSlideshow-vXcCeKKe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e2-6j6JDxAA8Z5wPYOWHysr5kHQvSE\"",
		"mtime": "2026-09-28T00:01:34.203Z",
		"size": 1762,
		"path": "../public/assets/HeroSlideshow-vXcCeKKe.js"
	},
	"/assets/collection_slideshow (3)-B-zA4VAi.png": {
		"type": "image/png",
		"etag": "\"1c3ff5-G5YN2gv20OKzJi+ZR/TweDlqFXU\"",
		"mtime": "2026-09-28T00:01:34.556Z",
		"size": 1851381,
		"path": "../public/assets/collection_slideshow (3)-B-zA4VAi.png"
	},
	"/assets/p-jacket-crociera-2-CNTYCshP.jpg": {
		"type": "image/jpeg",
		"etag": "\"17710-nq4W9kNedaTAhWQFepbop05QL7Q\"",
		"mtime": "2026-09-28T00:01:34.592Z",
		"size": 96016,
		"path": "../public/assets/p-jacket-crociera-2-CNTYCshP.jpg"
	},
	"/assets/p-jacket-crociera-3-D1GFO924.jpg": {
		"type": "image/jpeg",
		"etag": "\"18f74-4MKUhHlvjUG5pz/66X95AeJgsns\"",
		"mtime": "2026-09-28T00:01:34.593Z",
		"size": 102260,
		"path": "../public/assets/p-jacket-crociera-3-D1GFO924.jpg"
	},
	"/assets/p-jacket-crociera-ouFsOZBh.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cbbc-ezq3ZjR8fzBHZUvpOGp0jayDUjU\"",
		"mtime": "2026-09-28T00:01:34.594Z",
		"size": 117692,
		"path": "../public/assets/p-jacket-crociera-ouFsOZBh.jpg"
	},
	"/assets/matchContext-DpaA1RFy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-uf4S49HNqZ++/yL6WtBKT0DKHnE\"",
		"mtime": "2026-09-28T00:01:34.338Z",
		"size": 159,
		"path": "../public/assets/matchContext-DpaA1RFy.js"
	},
	"/assets/collection_slideshow (1)-CCo8HEiX.png": {
		"type": "image/png",
		"etag": "\"200a4b-x27HKe7pRKJATVvBtA0f7Yc2dd4\"",
		"mtime": "2026-09-28T00:01:34.545Z",
		"size": 2099787,
		"path": "../public/assets/collection_slideshow (1)-CCo8HEiX.png"
	},
	"/assets/collection_slideshow (2)-VBDAWuJf.png": {
		"type": "image/png",
		"etag": "\"20e2ab-iIeTaX1FAFdO/ljIylxcfdwXqnk\"",
		"mtime": "2026-09-28T00:01:34.550Z",
		"size": 2155179,
		"path": "../public/assets/collection_slideshow (2)-VBDAWuJf.png"
	},
	"/assets/p-jacket-duomo-3-BDPcy-DJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"215cd-a8mPhPKm5FiqB1+mZk871lNdxaQ\"",
		"mtime": "2026-09-28T00:01:34.597Z",
		"size": 136653,
		"path": "../public/assets/p-jacket-duomo-3-BDPcy-DJ.jpg"
	},
	"/assets/p-jacket-duomo-2-DYZgqE8I.jpg": {
		"type": "image/jpeg",
		"etag": "\"282cd-Xj1MaTsM9stXue14ZjlcetmnL/8\"",
		"mtime": "2026-09-28T00:01:34.596Z",
		"size": 164557,
		"path": "../public/assets/p-jacket-duomo-2-DYZgqE8I.jpg"
	},
	"/assets/p-jacket-duomo-G_bvaO7S.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c0e8-8CMW26H40LwfXgNVa6CBmkjzzRM\"",
		"mtime": "2026-09-28T00:01:34.599Z",
		"size": 114920,
		"path": "../public/assets/p-jacket-duomo-G_bvaO7S.jpg"
	},
	"/assets/p-shirt-colonna-2-DzQHdAnW.jpg": {
		"type": "image/jpeg",
		"etag": "\"219d9-U8Vzk59MM293Bd4aUnx7C/dDt3w\"",
		"mtime": "2026-09-28T00:01:34.600Z",
		"size": 137689,
		"path": "../public/assets/p-shirt-colonna-2-DzQHdAnW.jpg"
	},
	"/assets/p-shirt-colonna-3-CSVTXMZW.jpg": {
		"type": "image/jpeg",
		"etag": "\"17d0b-KQtEYzm9LXUbkZ4bCdkijifMTPY\"",
		"mtime": "2026-09-28T00:01:34.602Z",
		"size": 97547,
		"path": "../public/assets/p-shirt-colonna-3-CSVTXMZW.jpg"
	},
	"/assets/delivery_slideshow (1)-BRhtDaAO.png": {
		"type": "image/png",
		"etag": "\"20e81f-IhIWQQ4piLAYKOpV8jViu1IMDJw\"",
		"mtime": "2026-09-28T00:01:34.560Z",
		"size": 2156575,
		"path": "../public/assets/delivery_slideshow (1)-BRhtDaAO.png"
	},
	"/assets/index-DYNK7uAD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c33b9-usCTpIoiK6f8mcWYBFazaYWZoo0\"",
		"mtime": "2026-09-28T00:01:33.721Z",
		"size": 799673,
		"path": "../public/assets/index-DYNK7uAD.js"
	},
	"/assets/p-shirt-colonna-CSRa7RRG.jpg": {
		"type": "image/jpeg",
		"etag": "\"1644e-xDar4GFlI6KoyjRJrw04vG5UmR8\"",
		"mtime": "2026-09-28T00:01:34.602Z",
		"size": 91214,
		"path": "../public/assets/p-shirt-colonna-CSRa7RRG.jpg"
	},
	"/assets/p-shirt-tessuto-2-Bll2ifbu.jpg": {
		"type": "image/jpeg",
		"etag": "\"2050a-k++xkqUQpamrhrlyUOQHrc1m+wY\"",
		"mtime": "2026-09-28T00:01:34.603Z",
		"size": 132362,
		"path": "../public/assets/p-shirt-tessuto-2-Bll2ifbu.jpg"
	},
	"/assets/p-shirt-tessuto-3-WsUr3M7H.jpg": {
		"type": "image/jpeg",
		"etag": "\"18356-ydp17+pT6iQiGul8spe0SKXi/F0\"",
		"mtime": "2026-09-28T00:01:34.605Z",
		"size": 99158,
		"path": "../public/assets/p-shirt-tessuto-3-WsUr3M7H.jpg"
	},
	"/assets/delivery_slideshow (3)-C4jpXN4M.png": {
		"type": "image/png",
		"etag": "\"20e81f-5sZklA4jybdFVqHtjs6od574n9s\"",
		"mtime": "2026-09-28T00:01:34.566Z",
		"size": 2156575,
		"path": "../public/assets/delivery_slideshow (3)-C4jpXN4M.png"
	},
	"/assets/delivery_slideshow (2)-BoXu4Z8m.png": {
		"type": "image/png",
		"etag": "\"20e547-EQinNlsv8D4iqkjsVAEz9sT8IGk\"",
		"mtime": "2026-09-28T00:01:34.563Z",
		"size": 2155847,
		"path": "../public/assets/delivery_slideshow (2)-BoXu4Z8m.png"
	},
	"/assets/home_slideshow (1)-B1EYMxPs.png": {
		"type": "image/png",
		"etag": "\"21e07e-Oo2eBYq1B9i4K0Spp34TdCE861w\"",
		"mtime": "2026-09-28T00:01:34.570Z",
		"size": 2220158,
		"path": "../public/assets/home_slideshow (1)-B1EYMxPs.png"
	},
	"/assets/home_slideshow (2)-Da1c091l.png": {
		"type": "image/png",
		"etag": "\"254dab-SOJkD5NpQvmTqmQ8RqcRNyvSr/g\"",
		"mtime": "2026-09-28T00:01:34.575Z",
		"size": 2444715,
		"path": "../public/assets/home_slideshow (2)-Da1c091l.png"
	},
	"/assets/p-shirt-tessuto-S7sNN7jz.jpg": {
		"type": "image/jpeg",
		"etag": "\"19f24-V6aafwDqe5bHeCI1s/qlOqz73RM\"",
		"mtime": "2026-09-28T00:01:34.606Z",
		"size": 106276,
		"path": "../public/assets/p-shirt-tessuto-S7sNN7jz.jpg"
	},
	"/assets/maison_slideshow (3)-PYkrP5_2.png": {
		"type": "image/png",
		"etag": "\"1f2edc-swf00gtyXJgmpEAfI1Mkp0/PALo\"",
		"mtime": "2026-09-28T00:01:34.591Z",
		"size": 2043612,
		"path": "../public/assets/maison_slideshow (3)-PYkrP5_2.png"
	},
	"/assets/p-tee-duomo-2-CumPjH6u.jpg": {
		"type": "image/jpeg",
		"etag": "\"25ead-8KyKGZ1ehuDMVf+kxxepZL2OkPI\"",
		"mtime": "2026-09-28T00:01:34.607Z",
		"size": 155309,
		"path": "../public/assets/p-tee-duomo-2-CumPjH6u.jpg"
	},
	"/assets/p-tee-duomo-3-BYSWHoEc.jpg": {
		"type": "image/jpeg",
		"etag": "\"20383-lNqoqcKu9S1y4SadC4wQ9b5IcIk\"",
		"mtime": "2026-09-28T00:01:34.608Z",
		"size": 131971,
		"path": "../public/assets/p-tee-duomo-3-BYSWHoEc.jpg"
	},
	"/assets/p-tee-duomo-CokBJrQd.jpg": {
		"type": "image/jpeg",
		"etag": "\"111f7-JnLK6pS4RfLXpdDHCxBUBxKL0RA\"",
		"mtime": "2026-09-28T00:01:34.609Z",
		"size": 70135,
		"path": "../public/assets/p-tee-duomo-CokBJrQd.jpg"
	},
	"/assets/p-tee-garza-2-D060-onf.jpg": {
		"type": "image/jpeg",
		"etag": "\"15de7-raY/z+MwIbviIJKkS5jZfA3eEYg\"",
		"mtime": "2026-09-28T00:01:34.610Z",
		"size": 89575,
		"path": "../public/assets/p-tee-garza-2-D060-onf.jpg"
	},
	"/assets/p-tee-garza-3-D4fyEc7-.jpg": {
		"type": "image/jpeg",
		"etag": "\"16b9e-7KFnb9D+sfk5ek0wWnWubBt5eWI\"",
		"mtime": "2026-09-28T00:01:34.611Z",
		"size": 93086,
		"path": "../public/assets/p-tee-garza-3-D4fyEc7-.jpg"
	},
	"/assets/home_slideshow (3)-bKQWwL0t.png": {
		"type": "image/png",
		"etag": "\"228aca-ZqjMf/4fj0/Z67DtvLh6+YC9h8g\"",
		"mtime": "2026-09-28T00:01:34.581Z",
		"size": 2263754,
		"path": "../public/assets/home_slideshow (3)-bKQWwL0t.png"
	},
	"/assets/maison_slideshow (2)-CR4IjG4g.png": {
		"type": "image/png",
		"etag": "\"20c19f-N1eWP86uVyemSFTq57JHSmm+8Aw\"",
		"mtime": "2026-09-28T00:01:34.588Z",
		"size": 2146719,
		"path": "../public/assets/maison_slideshow (2)-CR4IjG4g.png"
	},
	"/assets/maison_slideshow (1)-Cy6wgn69.png": {
		"type": "image/png",
		"etag": "\"218787-u/9aj5ew+795Es72DO29ZMgeKyI\"",
		"mtime": "2026-09-28T00:01:34.585Z",
		"size": 2197383,
		"path": "../public/assets/maison_slideshow (1)-Cy6wgn69.png"
	},
	"/assets/p-tee-garza-D-7pfd6n.jpg": {
		"type": "image/jpeg",
		"etag": "\"12ff5-BBlA5RhCsqlVweqWfzhCRn6fBAM\"",
		"mtime": "2026-09-28T00:01:34.612Z",
		"size": 77813,
		"path": "../public/assets/p-tee-garza-D-7pfd6n.jpg"
	},
	"/assets/p-trouser-sartoria-2-ByHISzN3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dbe8-8BWEmnTot5WBjbBwPAaj+MeiRIE\"",
		"mtime": "2026-09-28T00:01:34.612Z",
		"size": 121832,
		"path": "../public/assets/p-trouser-sartoria-2-ByHISzN3.jpg"
	},
	"/assets/p-trouser-sartoria-3-DQDWL2GJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b44c-gVx1fU5MGf/WF11iFep+Xf+SlP4\"",
		"mtime": "2026-09-28T00:01:34.613Z",
		"size": 111692,
		"path": "../public/assets/p-trouser-sartoria-3-DQDWL2GJ.jpg"
	},
	"/assets/p-trouser-sartoria-DbOsn7Aj.jpg": {
		"type": "image/jpeg",
		"etag": "\"11663-3jVIyoDtNz4/85sAFOJByHigl3I\"",
		"mtime": "2026-09-28T00:01:34.614Z",
		"size": 71267,
		"path": "../public/assets/p-trouser-sartoria-DbOsn7Aj.jpg"
	},
	"/assets/p-trouser-vestibolo-2-CZ7fAaiX.jpg": {
		"type": "image/jpeg",
		"etag": "\"13fa0-6c8Oxqbq+W/u2JSj7QCuuaBWDWk\"",
		"mtime": "2026-09-28T00:01:34.615Z",
		"size": 81824,
		"path": "../public/assets/p-trouser-vestibolo-2-CZ7fAaiX.jpg"
	},
	"/assets/p-trouser-vestibolo-CVRVHNU9.jpg": {
		"type": "image/jpeg",
		"etag": "\"ba67-j0nNnKcvtPIvUoPcxMXj5ZHvS1M\"",
		"mtime": "2026-09-28T00:01:34.618Z",
		"size": 47719,
		"path": "../public/assets/p-trouser-vestibolo-CVRVHNU9.jpg"
	},
	"/assets/p-trouser-vestibolo-3-C5HpQo6j.jpg": {
		"type": "image/jpeg",
		"etag": "\"245ed-sw0JFH3JL/mECu6kfE9WPjON5Cw\"",
		"mtime": "2026-09-28T00:01:34.617Z",
		"size": 148973,
		"path": "../public/assets/p-trouser-vestibolo-3-C5HpQo6j.jpg"
	},
	"/assets/payment-details-Cr2JuDRo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2870-rwGZ/glF+e+uFAYKo92MEpNb/as\"",
		"mtime": "2026-09-28T00:01:34.339Z",
		"size": 10352,
		"path": "../public/assets/payment-details-Cr2JuDRo.js"
	},
	"/assets/payments.functions-CncyVYGG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"139c-oVHTcCUsj/GvQhzOEcTRaeKjUPU\"",
		"mtime": "2026-09-28T00:01:34.364Z",
		"size": 5020,
		"path": "../public/assets/payments.functions-CncyVYGG.js"
	},
	"/assets/payment-return-tqkMu68E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a67-RR4Ny0mNbsrEDpLr8C5Gnak+fGM\"",
		"mtime": "2026-09-28T00:01:34.361Z",
		"size": 2663,
		"path": "../public/assets/payment-return-tqkMu68E.js"
	},
	"/assets/redirect-DCb_aIiF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"271-AJO48VqfkUfrNYq6mvZqsvvYRKY\"",
		"mtime": "2026-09-28T00:01:34.369Z",
		"size": 625,
		"path": "../public/assets/redirect-DCb_aIiF.js"
	},
	"/assets/ProductCard-D5eOC_bo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"921-csEVDWo3WWfnj7i1s+ZgeG1t/io\"",
		"mtime": "2026-09-28T00:01:34.206Z",
		"size": 2337,
		"path": "../public/assets/ProductCard-D5eOC_bo.js"
	},
	"/assets/route-BzPZiORe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-Ou47w1LGCDGhwCLX4dZy4NhlRCc\"",
		"mtime": "2026-09-28T00:01:34.370Z",
		"size": 138,
		"path": "../public/assets/route-BzPZiORe.js"
	},
	"/assets/routes-Bp9ZUdBm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"209dc-Nph8PhDbyth4jm1Pf8zk8qmen0M\"",
		"mtime": "2026-09-28T00:01:34.372Z",
		"size": 133596,
		"path": "../public/assets/routes-Bp9ZUdBm.js"
	},
	"/assets/useStore-I5DtTLOq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d01-HYDmEr1smzxqbveCTc2Nx9uP5z8\"",
		"mtime": "2026-09-28T00:01:34.515Z",
		"size": 27905,
		"path": "../public/assets/useStore-I5DtTLOq.js"
	},
	"/assets/WhatsAppButton-Bso_H4Wz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21e-hFennw9nZphAgUKBVT5R5hTha7A\"",
		"mtime": "2026-09-28T00:01:34.217Z",
		"size": 542,
		"path": "../public/assets/WhatsAppButton-Bso_H4Wz.js"
	},
	"/assets/styles-DUqOiRFA.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1bf04-sGV1SjGMks3GlTm6NeY/RgweIcQ\"",
		"mtime": "2026-09-28T00:01:34.627Z",
		"size": 114436,
		"path": "../public/assets/styles-DUqOiRFA.css"
	},
	"/assets/SiteFooter-aZOQFXha.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b8d-fVXf6rcbyREXSAkl6nzS4WXFWtg\"",
		"mtime": "2026-09-28T00:01:34.209Z",
		"size": 7053,
		"path": "../public/assets/SiteFooter-aZOQFXha.js"
	},
	"/assets/signUp_slideshow (1)-COa39cha.png": {
		"type": "image/png",
		"etag": "\"24e2b6-UnLzfdvdkh824MT6z8O0uT+E48E\"",
		"mtime": "2026-09-28T00:01:34.621Z",
		"size": 2417334,
		"path": "../public/assets/signUp_slideshow (1)-COa39cha.png"
	},
	"/assets/signUp_slideshow (2)-C4oCp8BN.png": {
		"type": "image/png",
		"etag": "\"22940a-txJ6nnvFsmkGeTtDo8b8thc9xCw\"",
		"mtime": "2026-09-28T00:01:34.623Z",
		"size": 2266122,
		"path": "../public/assets/signUp_slideshow (2)-C4oCp8BN.png"
	},
	"/assets/signUp_slideshow (3)-BRyQGB2L.png": {
		"type": "image/png",
		"etag": "\"28f55b-ECohK1VoWk5gSaHDxITXV4m1HBY\"",
		"mtime": "2026-09-28T00:01:34.626Z",
		"size": 2684251,
		"path": "../public/assets/signUp_slideshow (3)-BRyQGB2L.png"
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
var _lazy_hgViRh = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_hgViRh
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
