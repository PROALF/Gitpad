import { r as redirect } from './index-64aa7a5e.js';
import { c as collections } from './database-4d24c231.js';
import { v as validateModel, m as models, o as oldModels } from './models-392647f7.js';
import { b as authCondition, r as requiresUser } from './auth-d8ec8acd.js';
import { D as DEFAULT_SETTINGS } from './Settings-12179b49.js';
import './private-26a5baf7.js';
import 'handlebars';
import 'zod';
import 'openid-client';
import 'date-fns';
import './environment-03c3dd82.js';
import './prod-ssr-7cc47430.js';

var UrlDependency = /* @__PURE__ */ ((UrlDependency2) => {
  UrlDependency2["ConversationList"] = "conversation:list";
  UrlDependency2["Conversation"] = "conversation";
  return UrlDependency2;
})(UrlDependency || {});
const load = async ({ locals, depends, url }) => {
  const urlModel = url.searchParams.get("model");
  depends(UrlDependency.ConversationList);
  if (urlModel) {
    const isValidModel = validateModel(models).safeParse(urlModel).success;
    if (isValidModel) {
      await collections.settings.updateOne(
        authCondition(locals),
        { $set: { activeModel: urlModel } },
        { upsert: true }
      );
    }
    throw redirect(302, url.pathname);
  }
  return {
    conversations: [],
    settings: {
      shareConversationsWithModelAuthors: DEFAULT_SETTINGS.shareConversationsWithModelAuthors,
      ethicsModalAcceptedAt: null,
      activeModel: DEFAULT_SETTINGS.activeModel,
      searchEnabled: false,
      customPrompts: {}
    },
    models: models.map((model) => ({
      id: model.id,
      name: model.name,
      websiteUrl: model.websiteUrl,
      modelUrl: model.modelUrl,
      is_local: model.is_local,
      datasetName: model.datasetName,
      datasetUrl: model.datasetUrl,
      displayName: model.displayName,
      description: model.description,
      promptExamples: model.promptExamples,
      parameters: model.parameters,
      preprompt: model.preprompt
    })),
    oldModels,
    user: locals.user && {
      username: locals.user.username,
      avatarUrl: locals.user.avatarUrl,
      email: locals.user.email
    },
    requiresLogin: requiresUser,
    messagesBeforeLogin: 0
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-4418f14b.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.3dbc19b7.js","_app/immutable/chunks/index.98ebe618.js","_app/immutable/chunks/public.865a5e26.js","_app/immutable/chunks/singletons.db0d2646.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/stores.997706bb.js","_app/immutable/chunks/LoadingModalWritable.b3f40ccb.js","_app/immutable/chunks/share.4f3afad4.js","_app/immutable/chunks/LocalDB.a5da0a64.js"];
const stylesheets = ["_app/immutable/assets/0.fb679674.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-ededd4bf.js.map
