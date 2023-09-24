import { c as create_ssr_component, b as subscribe, g as escape, v as validate_component } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import { c as PUBLIC_APP_DISCLAIMER } from "../../../../chunks/public.js";
import { f as findCurrentModel, C as ChatWindow } from "../../../../chunks/ChatWindow.js";
import { a as pendingMessage, p as pendingMessageIdToRetry } from "../../../../chunks/pendingMessageIdToRetry.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_pendingMessage;
  let $$unsubscribe_pendingMessageIdToRetry;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_pendingMessage = subscribe(pendingMessage, (value) => value);
  $$unsubscribe_pendingMessageIdToRetry = subscribe(pendingMessageIdToRetry, (value) => value);
  let { data } = $$props;
  let loading = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_pendingMessage();
  $$unsubscribe_pendingMessageIdToRetry();
  return `${$$result.head += `<!-- HEAD_svelte-8oibt4_START -->${$$result.title = `<title>${escape(data.title)}</title>`, ""}<!-- HEAD_svelte-8oibt4_END -->`, ""}

${validate_component(ChatWindow, "ChatWindow").$$render(
    $$result,
    {
      loading,
      shared: true,
      messages: data.messages,
      searches: data.searches,
      models: data.models,
      currentModel: findCurrentModel(data.models, data.model),
      settings: data.settings,
      loginRequired: !$page.error && (data.requiresLogin ? !data.user : !data.settings.ethicsModalAcceptedAt && !!PUBLIC_APP_DISCLAIMER)
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
