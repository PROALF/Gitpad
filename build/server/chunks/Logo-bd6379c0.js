import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from './index3-249a4fd3.js';
import { p as page } from './stores-6c89d873.js';
import { d as PUBLIC_APP_ASSETS, c as PUBLIC_APP_NAME } from './public-48495260.js';
import { b as base } from './paths-05fee424.js';

const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { classNames = "" } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  $$unsubscribe_page();
  return `${`<object${add_attribute("class", classNames, 0)} data="${escape($page.url.origin, true) + escape(base, true) + "/" + escape(PUBLIC_APP_ASSETS, true) + "/chat.png"}" title="${escape(PUBLIC_APP_NAME, true) + " logo"}"></object>`}`;
});

export { Logo as L };
//# sourceMappingURL=Logo-bd6379c0.js.map
