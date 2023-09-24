import { c as create_ssr_component, e as escape, v as validate_component } from './index3-249a4fd3.js';
import { c as PUBLIC_APP_NAME } from './public-48495260.js';
import { f as findCurrentModel, C as ChatWindow } from './ChatWindow-e91e007e.js';
import './LocalDB-8101692b.js';
import './Logo-bd6379c0.js';
import './stores-6c89d873.js';
import './paths-05fee424.js';
import './shared-server-26696cfd.js';
import 'marked';
import 'dexie';

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

export { Page as default };
//# sourceMappingURL=_page.svelte-789abf26.js.map
