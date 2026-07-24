export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["black-logo-main.webp","favicon.svg","robots.txt"]),
	mimeTypes: {".webp":"image/webp",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BhyCuSWE.js",app:"_app/immutable/entry/app.Cwma55su.js",imports:["_app/immutable/entry/start.BhyCuSWE.js","_app/immutable/chunks/B1J3_umS.js","_app/immutable/chunks/B-MQ-Ori.js","_app/immutable/chunks/nloyr2BX.js","_app/immutable/entry/app.Cwma55su.js","_app/immutable/chunks/nloyr2BX.js","_app/immutable/chunks/CgGKHRA6.js","_app/immutable/chunks/B-MQ-Ori.js","_app/immutable/chunks/BqwXmF_n.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/ai-taskforce",
				pattern: /^\/ai-taskforce\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/anthony-parker-memorial-prize",
				pattern: /^\/anthony-parker-memorial-prize\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/meet-the-committee",
				pattern: /^\/meet-the-committee\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/newsletter",
				pattern: /^\/newsletter\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/partners-sponsors-affiliations-friends",
				pattern: /^\/partners-sponsors-affiliations-friends\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/who-are-the-bcs",
				pattern: /^\/who-are-the-bcs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/who-are-the-bcs/branches",
				pattern: /^\/who-are-the-bcs\/branches\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/who-are-the-bcs/registrations-and-memberships",
				pattern: /^\/who-are-the-bcs\/registrations-and-memberships\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/who-are-the-bcs/who-is-bcs-berkshire",
				pattern: /^\/who-are-the-bcs\/who-is-bcs-berkshire\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/sitemap.xml"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
