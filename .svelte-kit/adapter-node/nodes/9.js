import * as server from '../entries/pages/r/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/r/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/r/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.78a36c21.js","_app/immutable/chunks/index.98ebe618.js","_app/immutable/chunks/public.865a5e26.js","_app/immutable/chunks/singletons.db0d2646.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/stores.997706bb.js","_app/immutable/chunks/pendingMessage.76d0664e.js","_app/immutable/chunks/marked.esm.76161808.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/pendingMessageIdToRetry.700325ba.js","_app/immutable/chunks/share.4f3afad4.js"];
export const stylesheets = ["_app/immutable/assets/pendingMessage.d0635d6c.css"];
export const fonts = [];
