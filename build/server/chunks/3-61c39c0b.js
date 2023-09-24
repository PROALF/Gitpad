import './index-64aa7a5e.js';
import 'openid-client';

const load = async ({ params, depends, locals }) => {
  return {
    title: "Untitled",
    model: "",
    searches: void 0
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fc4d98e6.js')).default;
const server_id = "src/routes/conversation/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/3.abc4d330.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.98ebe618.js","_app/immutable/chunks/pendingMessage.76d0664e.js","_app/immutable/chunks/stores.997706bb.js","_app/immutable/chunks/singletons.db0d2646.js","_app/immutable/chunks/public.865a5e26.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/marked.esm.76161808.js","_app/immutable/chunks/pendingMessageIdToRetry.700325ba.js","_app/immutable/chunks/LoadingModalWritable.b3f40ccb.js","_app/immutable/chunks/share.4f3afad4.js","_app/immutable/chunks/LocalDB.a5da0a64.js"];
const stylesheets = ["_app/immutable/assets/pendingMessage.d0635d6c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-61c39c0b.js.map
