import { r as redirect } from "../../chunks/index.js";
import { c as collections } from "../../chunks/database.js";
import { v as validateModel, m as models, o as oldModels } from "../../chunks/models.js";
import { a as authCondition, r as requiresUser } from "../../chunks/auth.js";
import { D as DEFAULT_SETTINGS } from "../../chunks/Settings.js";
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
export {
  load
};
