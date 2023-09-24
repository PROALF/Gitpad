import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from './index3-249a4fd3.js';
import { p as page } from './stores-6c89d873.js';
import { P as PUBLIC_APP_DISCLAIMER } from './public-48495260.js';
import { f as findCurrentModel, C as ChatWindow } from './ChatWindow-e91e007e.js';
import { a as pendingMessage, p as pendingMessageIdToRetry } from './pendingMessageIdToRetry-57754fc2.js';
import './Logo-bd6379c0.js';
import './paths-05fee424.js';
import './shared-server-26696cfd.js';
import 'marked';

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

export { Page as default };
//# sourceMappingURL=_page.svelte-2d48bd20.js.map
