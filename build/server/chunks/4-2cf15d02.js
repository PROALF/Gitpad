import { b as base } from './paths-05fee424.js';
import 'openid-client';
import { r as redirect } from './index-64aa7a5e.js';

const actions = {
  delete: async function({ locals }) {
    throw redirect(303, `${base}/`);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 4;
const server_id = "src/routes/conversations/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-2cf15d02.js.map
