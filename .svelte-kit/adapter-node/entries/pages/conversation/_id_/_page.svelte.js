import { c as create_ssr_component, b as subscribe, g as escape, v as validate_component } from "../../../../chunks/index3.js";
import { f as findCurrentModel, w as webSearchParameters, C as ChatWindow } from "../../../../chunks/ChatWindow.js";
import { p as pendingMessageIdToRetry, a as pendingMessage } from "../../../../chunks/pendingMessageIdToRetry.js";
import { p as page } from "../../../../chunks/stores.js";
import { e as error } from "../../../../chunks/errors.js";
import { c as PUBLIC_APP_DISCLAIMER } from "../../../../chunks/public.js";
import "@xenova/transformers";
import { w as writable } from "../../../../chunks/index2.js";
import { g as getMessages } from "../../../../chunks/LocalDB.js";
const params_writable = writable("");
let title_ret = "BlindChat";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_pendingMessageIdToRetry;
  let $$unsubscribe_pendingMessage;
  let $$unsubscribe_error;
  let $$unsubscribe_webSearchParameters;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_pendingMessageIdToRetry = subscribe(pendingMessageIdToRetry, (value) => value);
  $$unsubscribe_pendingMessage = subscribe(pendingMessage, (value) => value);
  $$unsubscribe_error = subscribe(error, (value) => value);
  $$unsubscribe_webSearchParameters = subscribe(webSearchParameters, (value) => value);
  let { data } = $$props;
  let id = "";
  let messages = [];
  console.log(" - " + $page.params.id);
  let webSearchMessages = [];
  let loading = false;
  let pending = false;
  let loginRequired = false;
  params_writable.subscribe(async (value) => {
    if (value != id) {
      id = value;
      let res = await getMessages(value);
      if (res != void 0) {
        messages = res;
      }
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      $page.params.id;
    }
    title = title_ret;
    loginRequired = (data.requiresLogin ? !data.user : !data.settings.ethicsModalAcceptedAt && !!PUBLIC_APP_DISCLAIMER) && messages.length >= data.messagesBeforeLogin;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""}

${validate_component(ChatWindow, "ChatWindow").$$render(
      $$result,
      {
        loading,
        pending,
        messages,
        searches: { ...data.searches },
        models: data.models,
        currentModel: findCurrentModel([...data.models, ...data.oldModels], data.model),
        settings: data.settings,
        loginRequired,
        webSearchMessages
      },
      {
        webSearchMessages: ($$value) => {
          webSearchMessages = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_pendingMessageIdToRetry();
  $$unsubscribe_pendingMessage();
  $$unsubscribe_error();
  $$unsubscribe_webSearchParameters();
  return $$rendered;
});
export {
  Page as default
};
