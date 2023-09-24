import { c as create_ssr_component, b as subscribe, f as add_attribute, g as escape } from "./index3.js";
import { p as page } from "./stores.js";
import { d as PUBLIC_APP_ASSETS, a as PUBLIC_APP_NAME } from "./public.js";
import { b as base } from "./paths.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { classNames = "" } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  $$unsubscribe_page();
  return `${`<object${add_attribute("class", classNames, 0)} data="${escape($page.url.origin, true) + escape(base, true) + "/" + escape(PUBLIC_APP_ASSETS, true) + "/chat.png"}" title="${escape(PUBLIC_APP_NAME, true) + " logo"}"></object>`}`;
});
export {
  Logo as L
};
