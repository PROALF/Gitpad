import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.3dbc19b7.js","_app/immutable/chunks/index.98ebe618.js","_app/immutable/chunks/public.865a5e26.js","_app/immutable/chunks/singletons.db0d2646.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/stores.997706bb.js","_app/immutable/chunks/LoadingModalWritable.b3f40ccb.js","_app/immutable/chunks/share.4f3afad4.js","_app/immutable/chunks/LocalDB.a5da0a64.js"];
export const stylesheets = ["_app/immutable/assets/0.fb679674.css"];
export const fonts = [];
