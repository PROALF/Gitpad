import { c as create_ssr_component, g as escape, v as validate_component } from "../../chunks/index3.js";
import { a as PUBLIC_APP_NAME } from "../../chunks/public.js";
import { f as findCurrentModel, C as ChatWindow } from "../../chunks/ChatWindow.js";
import "../../chunks/LocalDB.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let loading = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-13f777u_START -->${$$result.title = `<title>${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-13f777u_END -->`, ""}

${validate_component(ChatWindow, "ChatWindow").$$render(
    $$result,
    {
      loading,
      currentModel: findCurrentModel([...data.models, ...data.oldModels], data.settings.activeModel),
      models: data.models,
      settings: data.settings
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
