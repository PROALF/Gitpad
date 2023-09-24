import { b as base } from './paths-05fee424.js';
import { c as collections } from './database-4d24c231.js';
import { r as redirect } from './index-64aa7a5e.js';
import { z } from 'zod';
import { v as validateModel, m as models } from './models-392647f7.js';
import { b as authCondition } from './auth-d8ec8acd.js';
import { D as DEFAULT_SETTINGS } from './Settings-12179b49.js';
import './private-26a5baf7.js';
import 'handlebars';
import 'openid-client';
import 'date-fns';
import './environment-03c3dd82.js';
import './prod-ssr-7cc47430.js';

const actions = {
  default: async function({ request, locals }) {
    const formData = await request.formData();
    const { ethicsModalAccepted, ...settings } = z.object({
      shareConversationsWithModelAuthors: z.union([z.literal("true"), z.literal("on"), z.literal("false"), z.null()]).transform((value) => {
        return value === "true" || value === "on";
      }),
      ethicsModalAccepted: z.boolean({ coerce: true }).optional(),
      activeModel: validateModel(models),
      customPrompts: z.record(z.string()).default({})
    }).parse({
      shareConversationsWithModelAuthors: formData.get("shareConversationsWithModelAuthors"),
      ethicsModalAccepted: formData.get("ethicsModalAccepted"),
      activeModel: formData.get("activeModel") ?? DEFAULT_SETTINGS.activeModel,
      customPrompts: JSON.parse(formData.get("customPrompts")?.toString() ?? "{}")
    });
    await collections.settings.updateOne(
      authCondition(locals),
      {
        $set: {
          ...settings,
          ...ethicsModalAccepted && { ethicsModalAcceptedAt: /* @__PURE__ */ new Date() },
          updatedAt: /* @__PURE__ */ new Date()
        },
        $setOnInsert: {
          createdAt: /* @__PURE__ */ new Date()
        }
      },
      {
        upsert: true
      }
    );
    throw redirect(303, request.headers.get("referer") || `${base}/`);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 10;
const server_id = "src/routes/settings/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-2ab7f15a.js.map
