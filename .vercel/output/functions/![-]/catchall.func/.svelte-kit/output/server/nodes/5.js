import * as server from '../entries/pages/contact-us/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact-us/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact-us/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CXZ6CJ7r.js","_app/immutable/chunks/CgGKHRA6.js","_app/immutable/chunks/nloyr2BX.js","_app/immutable/chunks/CKtqVHy3.js","_app/immutable/chunks/BIeeJWhZ.js","_app/immutable/chunks/B1J3_umS.js","_app/immutable/chunks/B-MQ-Ori.js","_app/immutable/chunks/CUSSS4ei.js","_app/immutable/chunks/BwAtd1bF.js","_app/immutable/chunks/BqwXmF_n.js"];
export const stylesheets = ["_app/immutable/assets/Breadcrumbs.BBXp7RKt.css","_app/immutable/assets/5.Bi9nxYBk.css"];
export const fonts = [];
