import { c as create_ssr_component, d as createEventDispatcher, v as validate_component, e as escape, b as add_attribute, h as spread, j as escape_object, f as each, a as subscribe, o as onDestroy, t as tick } from './index3-249a4fd3.js';
import { g as PUBLIC_ANNOUNCEMENT_BANNERS, c as PUBLIC_APP_NAME, f as PUBLIC_VERSION } from './public-48495260.js';
import { L as Logo } from './Logo-bd6379c0.js';
import { w as writable, p as public_env } from './shared-server-26696cfd.js';
import { marked } from 'marked';
import { p as page } from './stores-6c89d873.js';

const PUBLIC_SEP_TOKEN = "</s>";
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked } = $$props;
  let { name } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<input type="checkbox"${add_attribute("name", name, 0)} class="peer pointer-events-none absolute opacity-0"${add_attribute("checked", checked, 1)}>
<div class="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full bg-gray-300 p-1 shadow-inner ring-gray-400 transition-all peer-checked:bg-blue-600 peer-focus-visible:ring peer-focus-visible:ring-offset-1 hover:bg-gray-400 dark:bg-gray-600 peer-checked:[&>div]:translate-x-3.5"><div class="h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-all"></div></div>`;
});
const Send_alt_filled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Stop_filled_alt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M24 6H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path>`}<!-- HTML_TAG_END --></svg>`;
});
const IconChevron = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames = "" } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg width="1em" height="1em" viewBox="0 0 15 6"${add_attribute("class", classNames, 0)} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.67236 1L7.67236 7L13.6724 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const ScrollToBottomBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { scrollNode } = $$props;
  let visible = false;
  let { class: className = "" } = $$props;
  let observer = null;
  function updateVisibility() {
    if (!scrollNode)
      return;
    visible = Math.ceil(scrollNode.scrollTop) + 200 < scrollNode.scrollHeight - scrollNode.clientHeight;
  }
  function destroy() {
    observer?.disconnect();
    scrollNode?.removeEventListener("scroll", updateVisibility);
  }
  onDestroy(destroy);
  if ($$props.scrollNode === void 0 && $$bindings.scrollNode && scrollNode !== void 0)
    $$bindings.scrollNode(scrollNode);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  {
    if (scrollNode) {
      destroy();
      if (window.ResizeObserver) {
        observer = new ResizeObserver(() => {
          updateVisibility();
        });
        observer.observe(scrollNode);
      }
      scrollNode.addEventListener("scroll", updateVisibility);
    }
  }
  return `${visible ? `<button class="${"btn absolute flex h-[41px] w-[41px] rounded-full border bg-white shadow-md transition-all hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:shadow-gray-950 dark:hover:bg-gray-600 " + escape(className, true)}">${validate_component(IconChevron, "IconChevron").$$render($$result, { classNames: "mt-[2px]" }, {}, {})}</button>` : ``}`;
});
function randomUUID() {
  if (!("randomUUID" in crypto)) {
    return "10000000-1000-4000-8000-100000000000".replace(
      /[018]/g,
      (c) => (Number(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(c) / 4).toString(16)
    );
  }
  return crypto.randomUUID();
}
const Arrow_up_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const AnnouncementBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { classNames = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<div class="${"flex items-center rounded-xl bg-gray-100 p-1 text-sm dark:bg-gray-800 " + escape(classNames, true)}"><span class="mr-2 inline-flex items-center rounded-lg bg-gradient-to-br from-primary-300 px-2 py-1 text-xxs font-medium uppercase leading-3 text-primary-700 dark:from-primary-900 dark:text-primary-400">New</span>
	${escape(title)}
	<div class="ml-auto shrink-0">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Checkmark_filled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"/><path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Earth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm5 3.106a12.014 12.014 0 0 1 2.916 1.899L23.503 8H21Zm-7.622 22.597A11.976 11.976 0 0 1 8.116 6.976L9.465 9h3.342l-1.5 4H7.28l-1.382 4.148L8.465 21h5l1.432 2.147ZM16 28c-.203 0-.402-.02-.603-.03l1.397-4.19a1.988 1.988 0 0 0-.233-1.741l-1.432-2.148A1.996 1.996 0 0 0 13.465 19h-3.93l-1.432-2.148L8.721 15H11v2h2v-2.819l2.936-7.83l-1.872-.702L13.557 7h-3.022l-.807-1.21A11.794 11.794 0 0 1 19 4.394V8a2.002 2.002 0 0 0 2 2h2.586A1.986 1.986 0 0 0 25 9.414l.14-.14l.282-.68A11.981 11.981 0 0 1 27.3 12h-4.701a1.993 1.993 0 0 0-1.972 1.665l-.597 3.441a1.99 1.99 0 0 0 .991 2.086l2.165 1.464l1.458 3.646A11.958 11.958 0 0 1 16 28Zm8.815-8.656L22.1 17.509l-.1-.06l.599-3.449h5.22a11.743 11.743 0 0 1-1.744 8.495Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const ModelCardMetadata = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { model } = $$props;
  let { variant = "light" } = $$props;
  if ($$props.model === void 0 && $$bindings.model && model !== void 0)
    $$bindings.model(model);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  return `<div class="${"flex items-center gap-5 rounded-xl bg-gray-100 px-3 py-2 text-sm " + escape(
    variant === "dark" ? "text-gray-600 dark:bg-gray-800 dark:text-gray-300" : "text-gray-800 dark:bg-gray-100 dark:text-gray-600",
    true
  )}"><a${add_attribute("href", model.modelUrl || "https://huggingface.co/" + model.name, 0)} target="_blank" rel="noreferrer" class="flex items-center hover:underline">${validate_component(Arrow_up_right, "CarbonArrowUpRight").$$render(
    $$result,
    {
      class: "mr-1.5 shrink-0 text-xs text-gray-400"
    },
    {},
    {}
  )}
		Model
		<div class="max-sm:hidden"> page</div></a>
	${model.datasetName || model.datasetUrl ? `<a${add_attribute("href", model.datasetUrl || "https://huggingface.co/datasets/" + model.datasetName, 0)} target="_blank" rel="noreferrer" class="flex items-center hover:underline">${validate_component(Arrow_up_right, "CarbonArrowUpRight").$$render(
    $$result,
    {
      class: "mr-1.5 shrink-0 text-xs text-gray-400"
    },
    {},
    {}
  )}
			Dataset
			<div class="max-sm:hidden"> page</div></a>` : ``}
	${model.websiteUrl ? `<a${add_attribute("href", model.websiteUrl, 0)} target="_blank" class="ml-auto flex items-center hover:underline" rel="noreferrer">${validate_component(Earth, "CarbonEarth").$$render(
    $$result,
    {
      class: "mr-1.5 shrink-0 text-xs text-gray-400"
    },
    {},
    {}
  )}
			Website
		</a>` : ``}</div>`;
});
const findCurrentModel = (models, id) => models.find((m) => m.id === id) ?? models[0];
const ChatIntroduction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentModelMetadata;
  let { currentModel } = $$props;
  let { settings } = $$props;
  let { models } = $$props;
  const announcementBanners = JSON.parse(PUBLIC_ANNOUNCEMENT_BANNERS);
  createEventDispatcher();
  if ($$props.currentModel === void 0 && $$bindings.currentModel && currentModel !== void 0)
    $$bindings.currentModel(currentModel);
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  if ($$props.models === void 0 && $$bindings.models && models !== void 0)
    $$bindings.models(models);
  currentModelMetadata = findCurrentModel(models, settings.activeModel);
  public_env.PUBLIC_APP_NAME;
  return `<div class="my-auto grid gap-8 lg:grid-cols-3"><div class="lg:col-span-1"><div><div class="mb-3 flex items-center text-2xl font-semibold">${validate_component(Logo, "Logo").$$render($$result, { classNames: "mr-1 flex-none" }, {}, {})}
				${escape(PUBLIC_APP_NAME)}
				<div class="ml-3 flex h-6 items-center rounded-lg border border-gray-100 bg-gray-50 px-2 text-base text-gray-400 dark:border-gray-700/60 dark:bg-gray-800">v${escape(PUBLIC_VERSION)}</div></div>
			<p class="text-base text-gray-600 dark:text-gray-400">Enjoying the best AI models, with privacy
			</p></div></div>
	<div class="lg:col-span-2 lg:pl-24">${each(announcementBanners, (banner) => {
    return `${validate_component(AnnouncementBanner, "AnnouncementBanner").$$render($$result, { classNames: "mb-4", title: banner.title }, {}, {
      default: () => {
        return `<a target="_blank"${add_attribute("href", banner.linkHref, 0)} class="mr-2 flex items-center underline hover:no-underline">${validate_component(Arrow_up_right, "CarbonArrowUpRight").$$render($$result, { class: "mr-1.5 text-xs" }, {}, {})} ${escape(banner.linkTitle)}</a>
		`;
      }
    })}`;
  })}
		${``}
		<div class="overflow-hidden rounded-xl border dark:border-gray-800"><div class="flex p-3"><div><div class="text-sm text-gray-600 dark:text-gray-400">Current Model</div>
					<div class="font-semibold">${escape(currentModel.displayName)}</div></div>
				${models.length > 1 ? `<button type="button" class="btn ml-auto flex h-7 w-7 self-start rounded-full bg-gray-100 p-1 text-xs hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-600">${validate_component(IconChevron, "IconChevron").$$render($$result, {}, {}, {})}</button>` : ``}</div>
			${validate_component(ModelCardMetadata, "ModelCardMetadata").$$render($$result, { variant: "dark", model: currentModel }, {}, {})}</div></div>
	${currentModelMetadata.promptExamples ? `<div class="lg:col-span-3 lg:mt-6"><div class="grid gap-3 lg:grid-cols-3 lg:gap-5">${each(currentModelMetadata.promptExamples, (example) => {
    return `<button type="button" class="rounded-xl border bg-gray-50 p-2.5 text-gray-600 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 sm:p-4">${escape(example.title)}
					</button>`;
  })}</div></div>` : ``}</div>`;
});
const IconCopy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames = "" } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg${add_attribute("class", classNames, 0)} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z" transform="translate(0)"></path><path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z" transform="translate(0)"></path><rect fill="none" width="32" height="32"></rect></svg>`;
});
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames = "" } = $$props;
  let { label = "Copied" } = $$props;
  let { position = "left-1/2 top-full transform -translate-x-1/2 translate-y-2" } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  return `<div class="${"pointer-events-none absolute rounded bg-black px-2 py-1 font-normal leading-tight text-white shadow transition-opacity " + escape(position, true) + " " + escape(classNames, true)}"><div class="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-4 border-t-0 border-black" style="border-left-color: transparent; border-right-color: transparent; "></div>
	${escape(label)}</div>`;
});
const CopyToClipBoardBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames = "" } = $$props;
  let { value } = $$props;
  let isSuccess = false;
  onDestroy(() => {
  });
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<button class="${"btn rounded-lg border border-gray-200 px-2 py-2 text-sm shadow-sm transition-all hover:border-gray-300 active:shadow-inner dark:border-gray-600 dark:hover:border-gray-400 " + escape(classNames, true) + " " + escape("text-gray-200 dark:text-gray-200", true) + " " + escape(isSuccess, true)}"${add_attribute("title", "Copy to clipboard", 0)} type="button"><span class="relative">${validate_component(IconCopy, "IconCopy").$$render($$result, {}, {}, {})}
		${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      classNames: "opacity-0"
    },
    {},
    {}
  )}</span></button>`;
});
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let highlightedCode;
  let { code = "" } = $$props;
  let { lang = "" } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  highlightedCode = "";
  return `<div class="group relative my-4 rounded-lg">
	<pre class="scrollbar-custom overflow-auto px-5 scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-400 dark:scrollbar-thumb-white/10 dark:hover:scrollbar-thumb-white/20"><code class="${"language-" + escape(lang, true)}"><!-- HTML_TAG_START -->${highlightedCode || code.replaceAll("<", "&lt;")}<!-- HTML_TAG_END --></code></pre>
	${validate_component(CopyToClipBoardBtn, "CopyToClipBoardBtn").$$render(
    $$result,
    {
      classNames: "absolute top-2 right-2 invisible opacity-0 group-hover:visible group-hover:opacity-100",
      value: code
    },
    {},
    {}
  )}</div>`;
});
const IconLoading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames = "" } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<div${add_attribute("class", "inline-flex h-8 flex-none items-center gap-1 " + classNames, 0)}><div class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400" style="animation-delay: 0.25s;"></div>
	<div class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400" style="animation-delay: 0.5s;"></div>
	<div class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400" style="animation-delay: 0.75s;"></div></div>`;
});
const Caret_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m12 8l10 8l-10 8z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Error_filled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="none" d="M9 10.555L10.555 9L23 21.444L21.444 23z"/><path fill="currentColor" d="M16 2A13.914 13.914 0 0 0 2 16a13.914 13.914 0 0 0 14 14a13.914 13.914 0 0 0 14-14A13.914 13.914 0 0 0 16 2Zm5.445 21L9 10.556L10.556 9L23 21.445Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const css$1 = {
  code: "@keyframes svelte-acjrcy-grow{0%{font-size:0;opacity:0}30%{font-size:1em;opacity:0}100%{opacity:1}}details[open].svelte-acjrcy .content.svelte-acjrcy{animation-name:svelte-acjrcy-grow;animation-duration:300ms;animation-delay:0ms}details.svelte-acjrcy summary.svelte-acjrcy::-webkit-details-marker{display:none}",
  map: null
};
const OpenWebSearchResults = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { loading = false } = $$props;
  let { classNames = "" } = $$props;
  let { webSearchMessages = [] } = $$props;
  let detailsOpen;
  let error;
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  if ($$props.webSearchMessages === void 0 && $$bindings.webSearchMessages && webSearchMessages !== void 0)
    $$bindings.webSearchMessages(webSearchMessages);
  $$result.css.add(css$1);
  error = webSearchMessages[webSearchMessages.length - 2]?.type === "error";
  return `<details class="${"flex w-fit rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 " + escape(classNames, true) + " max-w-full svelte-acjrcy"}"${add_attribute("open", detailsOpen, 1)}><summary class="align-center flex cursor-pointer select-none list-none py-1 pl-2.5 pr-2 align-text-top transition-all svelte-acjrcy">${error ? `${validate_component(Error_filled, "CarbonError").$$render(
    $$result,
    {
      class: "my-auto text-red-700 dark:text-red-500"
    },
    {},
    {}
  )}` : `${loading ? `${validate_component(Loading, "EosIconsLoading").$$render($$result, { class: "my-auto text-gray-500" }, {}, {})}` : `${validate_component(Checkmark_filled, "CarbonCheckmark").$$render($$result, { class: "my-auto text-gray-500" }, {}, {})}`}`}
		<span class="${[
    "px-2 font-medium",
    (error ? "text-red-700" : "") + " " + (error ? "dark:text-red-500" : "")
  ].join(" ").trim()}">Web search
		</span>
		<div class="${["my-auto transition-all", ""].join(" ").trim()}">${validate_component(Caret_right, "CarbonCaretRight").$$render($$result, {}, {}, {})}</div></summary>

	<div class="content px-5 pb-5 pt-4 svelte-acjrcy">${webSearchMessages.length === 0 ? `<div class="mx-auto w-fit">${validate_component(Loading, "EosIconsLoading").$$render($$result, { class: "mb-3 h-4 w-4" }, {}, {})}</div>` : `<ol>${each(webSearchMessages, (message) => {
    return `${message.type === "update" ? `<li class="group border-l pb-6 last:!border-transparent last:pb-0 dark:border-gray-800"><div class="flex items-start"><div class="${"-ml-1.5 h-3 w-3 flex-none rounded-full bg-gray-200 dark:bg-gray-600 " + escape(
      loading ? "group-last:animate-pulse group-last:bg-gray-300 group-last:dark:bg-gray-500" : "",
      true
    )}"></div>
								<h3 class="text-md -mt-1.5 pl-2.5 text-gray-800 dark:text-gray-100">${escape(message.message)}
								</h3></div>
							${message.args ? `<p class="mt-1.5 pl-4 text-gray-500 dark:text-gray-400">${escape(message.args)}
								</p>` : ``}
						</li>` : `${message.type === "error" ? `<li class="group border-l pb-6 last:!border-transparent last:pb-0 dark:border-gray-800"><div class="flex items-start">${validate_component(Error_filled, "CarbonError").$$render(
      $$result,
      {
        class: "-ml-1.5 h-3 w-3 flex-none scale-110 text-red-700 dark:text-red-500"
      },
      {},
      {}
    )}
								<h3 class="text-md -mt-1.5 pl-2.5 text-red-700 dark:text-red-500">${escape(message.message)}
								</h3></div>
							${message.args ? `<p class="mt-1.5 pl-4 text-gray-500 dark:text-gray-400">${escape(message.args)}
								</p>` : ``}
						</li>` : ``}`}`;
  })}</ol>`}</div>
</details>`;
});
function unsanitizeMd(md) {
  return md.replaceAll("&lt;", "<");
}
const ChatMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tokens;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  function sanitizeMd(md) {
    let ret = md.replace(/<\|[a-z]*$/, "").replace(/<\|[a-z]+\|$/, "").replace(/<$/, "").replaceAll(PUBLIC_SEP_TOKEN, " ").replaceAll(/<\|[a-z]+\|>/g, " ").replaceAll(/<br\s?\/?>/gi, "\n").replaceAll("<", "&lt;").trim();
    for (const stop of [...model.parameters?.stop ?? [], "<|endoftext|>"]) {
      if (ret.endsWith(stop)) {
        ret = ret.slice(0, -stop.length).trim();
      }
    }
    return ret;
  }
  let { model } = $$props;
  let { message } = $$props;
  let { loading = false } = $$props;
  let { isAuthor = true } = $$props;
  let { readOnly = false } = $$props;
  let { isTapped = false } = $$props;
  let { webSearchMessages = [] } = $$props;
  createEventDispatcher();
  let contentEl;
  const renderer = new marked.Renderer();
  renderer.codespan = (code) => {
    return `<code>${code.replaceAll("&amp;", "&")}</code>`;
  };
  const options = {
    ...marked.getDefaults(),
    gfm: true,
    breaks: true,
    renderer
  };
  let webSearchIsDone = true;
  if ($$props.model === void 0 && $$bindings.model && model !== void 0)
    $$bindings.model(model);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.isAuthor === void 0 && $$bindings.isAuthor && isAuthor !== void 0)
    $$bindings.isAuthor(isAuthor);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.isTapped === void 0 && $$bindings.isTapped && isTapped !== void 0)
    $$bindings.isTapped(isTapped);
  if ($$props.webSearchMessages === void 0 && $$bindings.webSearchMessages && webSearchMessages !== void 0)
    $$bindings.webSearchMessages(webSearchMessages);
  tokens = marked.lexer(sanitizeMd(message.content));
  message.from === "user" ? `${$page.url.pathname}/message/${message.id}/prompt` : void 0;
  webSearchIsDone = webSearchMessages.length > 0 && webSearchMessages[webSearchMessages.length - 1].type === "result";
  $$unsubscribe_page();
  return `${message.from === "assistant" ? `<div class="group relative -mb-8 flex items-start justify-start gap-4 pb-8 leading-relaxed"><img alt="" src="https://huggingface.co/avatars/2edb18bd0206c16b433841a47f53fa8e.svg" class="mt-5 h-3 w-3 flex-none select-none rounded-full shadow-lg">
		<div class="relative min-h-[calc(2rem+theme(spacing[3.5])*2)] min-w-[60px] break-words rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 px-5 py-3.5 text-gray-600 prose-pre:my-2 dark:border-gray-800 dark:from-gray-800/40 dark:text-gray-300">${webSearchMessages && webSearchMessages.length > 0 ? `${validate_component(OpenWebSearchResults, "OpenWebSearchResults").$$render(
    $$result,
    {
      classNames: tokens.length ? "mb-3.5" : "",
      webSearchMessages,
      loading: !webSearchIsDone
    },
    {},
    {}
  )}` : ``}
			${!message.content && (webSearchIsDone || webSearchMessages && webSearchMessages.length === 0) ? `${validate_component(IconLoading, "IconLoading").$$render($$result, {}, {}, {})}` : ``}

			<div class="prose max-w-none dark:prose-invert max-sm:prose-sm prose-headings:font-semibold prose-h1:text-lg prose-h2:text-base prose-h3:text-base prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900"${add_attribute("this", contentEl, 0)}>${each(tokens, (token) => {
    return `${token.type === "code" ? `${validate_component(CodeBlock, "CodeBlock").$$render(
      $$result,
      {
        lang: token.lang,
        code: unsanitizeMd(token.text)
      },
      {},
      {}
    )}` : `
						<!-- HTML_TAG_START -->${marked(token.raw, options)}<!-- HTML_TAG_END -->`}`;
  })}</div></div>
		</div>` : ``}
${message.from === "user" ? `<div class="group relative flex items-start justify-start gap-4 max-sm:text-sm"><div class="mt-5 h-3 w-3 flex-none rounded-full"></div>
		<div class="max-w-full whitespace-break-spaces break-words rounded-2xl px-5 py-3.5 text-gray-500 dark:text-gray-400">${escape(message.content.trim())}</div>
		${!loading ? `<div class="absolute right-0 top-3.5 flex gap-2 lg:-right-2">
				</div>` : ``}</div>` : ``}`;
});
const ChatMessages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { messages } = $$props;
  let { loading } = $$props;
  let { pending } = $$props;
  let { isAuthor } = $$props;
  let { currentModel } = $$props;
  let { settings } = $$props;
  let { models } = $$props;
  let { readOnly } = $$props;
  let { searches } = $$props;
  let webSearchArray = [];
  let chatContainer;
  let { webSearchMessages = [] } = $$props;
  async function scrollToBottom() {
    await tick();
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.pending === void 0 && $$bindings.pending && pending !== void 0)
    $$bindings.pending(pending);
  if ($$props.isAuthor === void 0 && $$bindings.isAuthor && isAuthor !== void 0)
    $$bindings.isAuthor(isAuthor);
  if ($$props.currentModel === void 0 && $$bindings.currentModel && currentModel !== void 0)
    $$bindings.currentModel(currentModel);
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  if ($$props.models === void 0 && $$bindings.models && models !== void 0)
    $$bindings.models(models);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.searches === void 0 && $$bindings.searches && searches !== void 0)
    $$bindings.searches(searches);
  if ($$props.webSearchMessages === void 0 && $$bindings.webSearchMessages && webSearchMessages !== void 0)
    $$bindings.webSearchMessages(webSearchMessages);
  {
    if (messages[messages.length - 1]?.from === "user") {
      scrollToBottom();
    }
  }
  {
    webSearchArray = messages.map((message, idx) => {
      if (message.webSearchId) {
        return searches[message.webSearchId] ?? [];
      } else if (idx === messages.length - 1) {
        return webSearchMessages;
      } else {
        return [];
      }
    });
  }
  return `<div class="scrollbar-custom mr-1 h-full overflow-y-auto"${add_attribute("this", chatContainer, 0)}><div class="mx-auto flex h-full max-w-3xl flex-col gap-6 px-5 pt-6 sm:gap-8 xl:max-w-4xl">${messages.length ? each(messages, (message, i) => {
    return `${validate_component(ChatMessage, "ChatMessage").$$render(
      $$result,
      {
        loading: loading && i === messages.length - 1,
        message,
        isAuthor,
        readOnly,
        model: currentModel,
        webSearchMessages: webSearchArray[i]
      },
      {},
      {}
    )}`;
  }) : `${validate_component(ChatIntroduction, "ChatIntroduction").$$render($$result, { settings, models, currentModel }, {}, {})}`}
		${pending ? `${validate_component(ChatMessage, "ChatMessage").$$render(
    $$result,
    {
      message: {
        from: "assistant",
        content: "",
        id: randomUUID()
      },
      model: currentModel,
      webSearchMessages
    },
    {},
    {}
  )}` : ``}
		<div class="h-44 flex-none"></div></div>
	${validate_component(ScrollToBottomBtn, "ScrollToBottomBtn").$$render(
    $$result,
    {
      class: "bottom-36 right-4 max-md:hidden lg:right-10",
      scrollNode: chatContainer
    },
    {},
    {}
  )}</div>`;
});
const css = {
  code: "pre.svelte-jxi03l,textarea.svelte-jxi03l{font-family:inherit;box-sizing:border-box;line-height:1.5}",
  map: null
};
const ChatInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let minHeight;
  let maxHeight;
  let { value = "" } = $$props;
  let { minRows = 1 } = $$props;
  let { maxRows = null } = $$props;
  let { placeholder = "" } = $$props;
  let { disabled = false } = $$props;
  let textareaElement;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.minRows === void 0 && $$bindings.minRows && minRows !== void 0)
    $$bindings.minRows(minRows);
  if ($$props.maxRows === void 0 && $$bindings.maxRows && maxRows !== void 0)
    $$bindings.maxRows(maxRows);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css);
  minHeight = `${1 + minRows * 1.5}em`;
  maxHeight = maxRows ? `${1 + maxRows * 1.5}em` : `auto`;
  return `

<div class="relative min-w-0 flex-1"><pre class="scrollbar-custom invisible overflow-x-hidden overflow-y-scroll whitespace-pre-wrap break-words p-3 svelte-jxi03l" aria-hidden="true" style="${"min-height: " + escape(minHeight, true) + "; max-height: " + escape(maxHeight, true)}">${escape((value || " ") + "\n")}</pre>

	<textarea enterkeyhint="send" tabindex="0" rows="1" class="scrollbar-custom absolute top-0 m-0 h-full w-full resize-none scroll-p-3 overflow-x-hidden overflow-y-scroll border-0 bg-transparent p-3 outline-none focus:ring-0 focus-visible:ring-0 svelte-jxi03l" ${disabled ? "disabled" : ""}${add_attribute("placeholder", placeholder, 0)}${add_attribute("this", textareaElement, 0)}>${escape(value || "")}</textarea>
</div>`;
});
const StopGeneratingBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames = "" } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<button type="button" class="${"btn flex h-9 rounded-lg border bg-white px-3 py-1 shadow-sm transition-all hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 " + escape(classNames, true)}">${validate_component(Stop_filled_alt, "CarbonStopFilledAlt").$$render(
    $$result,
    {
      class: "-ml-1 mr-1 h-[1.25rem] w-[1.1875rem] text-gray-400"
    },
    {},
    {}
  )} Stop generating
</button>`;
});
const webSearchParameters = writable({
  useSearch: false,
  nItems: 5
});
const Information = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"/><path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const WebSearchToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $webSearchParameters, $$unsubscribe_webSearchParameters;
  $$unsubscribe_webSearchParameters = subscribe(webSearchParameters, (value) => $webSearchParameters = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="flex h-9 cursor-pointer select-none items-center gap-2 rounded-xl border bg-white p-1.5 shadow-sm hover:shadow-none dark:border-gray-800 dark:bg-gray-900">${validate_component(Switch, "Switch").$$render(
      $$result,
      {
        name: "useSearch",
        checked: $webSearchParameters.useSearch
      },
      {
        checked: ($$value) => {
          $webSearchParameters.useSearch = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	<div class="whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Search web</div>
	<div class="group relative w-max">${validate_component(Information, "CarbonInformation").$$render($$result, { class: "text-xs text-gray-500" }, {}, {})}
		<div class="pointer-events-none absolute -top-20 left-1/2 w-max -translate-x-1/2 rounded-md bg-gray-100 p-2 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-800"><p class="max-w-sm text-sm text-gray-800 dark:text-gray-200">When enabled, the model will try to complement its answer with information queried from the
				web.
			</p></div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_webSearchParameters();
  return $$rendered;
});
const ChatWindow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isReadOnly;
  let { messages = [] } = $$props;
  let { loading = false } = $$props;
  let { pending = false } = $$props;
  let { shared = false } = $$props;
  let { currentModel } = $$props;
  let { models } = $$props;
  let { settings } = $$props;
  let { webSearchMessages = [] } = $$props;
  let { searches = {} } = $$props;
  let { loginRequired = false } = $$props;
  let message;
  createEventDispatcher();
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.pending === void 0 && $$bindings.pending && pending !== void 0)
    $$bindings.pending(pending);
  if ($$props.shared === void 0 && $$bindings.shared && shared !== void 0)
    $$bindings.shared(shared);
  if ($$props.currentModel === void 0 && $$bindings.currentModel && currentModel !== void 0)
    $$bindings.currentModel(currentModel);
  if ($$props.models === void 0 && $$bindings.models && models !== void 0)
    $$bindings.models(models);
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  if ($$props.webSearchMessages === void 0 && $$bindings.webSearchMessages && webSearchMessages !== void 0)
    $$bindings.webSearchMessages(webSearchMessages);
  if ($$props.searches === void 0 && $$bindings.searches && searches !== void 0)
    $$bindings.searches(searches);
  if ($$props.loginRequired === void 0 && $$bindings.loginRequired && loginRequired !== void 0)
    $$bindings.loginRequired(loginRequired);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isReadOnly = !models.some((model) => model.id === currentModel.id);
    $$rendered = `<div class="relative min-h-0 min-w-0">${``}
	${validate_component(ChatMessages, "ChatMessages").$$render(
      $$result,
      {
        loading,
        pending,
        settings,
        currentModel,
        models,
        messages,
        readOnly: isReadOnly,
        isAuthor: !shared,
        webSearchMessages,
        searches
      },
      {},
      {}
    )}
	<div class="dark:via-gray-80 pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto flex w-full max-w-3xl flex-col items-center justify-center bg-gradient-to-t from-white via-white/80 to-white/0 px-3.5 py-4 dark:border-gray-800 dark:from-gray-900 dark:to-gray-900/0 max-md:border-t max-md:bg-white max-md:dark:bg-gray-900 sm:px-5 md:py-8 xl:max-w-4xl [&>*]:pointer-events-auto"><div class="flex w-full pb-3 max-md:justify-between">${settings?.searchEnabled ? `${validate_component(WebSearchToggle, "WebSearchToggle").$$render($$result, {}, {}, {})}` : ``}
			${loading ? `${validate_component(StopGeneratingBtn, "StopGeneratingBtn").$$render(
      $$result,
      {
        classNames: settings?.searchEnabled ? "md:-translate-x-1/2 md:mx-auto" : "mx-auto"
      },
      {},
      {}
    )}` : ``}</div>
		<form class="${"relative flex w-full max-w-4xl flex-1 items-center rounded-xl border bg-gray-100 focus-within:border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:focus-within:border-gray-500 " + escape(isReadOnly ? "opacity-30" : "", true)}"><div class="flex w-full flex-1 border-none bg-transparent">${validate_component(ChatInput, "ChatInput").$$render(
      $$result,
      {
        placeholder: "Ask anything",
        maxRows: 4,
        disabled: isReadOnly,
        value: message
      },
      {
        value: ($$value) => {
          message = $$value;
          $$settled = false;
        }
      },
      {}
    )}

				${loading ? `<button class="btn mx-1 my-1 inline-block h-[2.4rem] self-end rounded-lg bg-transparent p-1 px-[0.7rem] text-gray-400 disabled:opacity-60 enabled:hover:text-gray-700 dark:disabled:opacity-40 enabled:dark:hover:text-gray-100 md:hidden">${validate_component(Stop_filled_alt, "CarbonStopFilledAlt").$$render($$result, {}, {}, {})}</button>
					<div class="mx-1 my-1 hidden h-[2.4rem] items-center p-1 px-[0.7rem] text-gray-400 disabled:opacity-60 enabled:hover:text-gray-700 dark:disabled:opacity-40 enabled:dark:hover:text-gray-100 md:flex">${validate_component(Loading, "EosIconsLoading").$$render($$result, {}, {}, {})}</div>` : `<button class="btn mx-1 my-1 h-[2.4rem] self-end rounded-lg bg-transparent p-1 px-[0.7rem] text-gray-400 disabled:opacity-60 enabled:hover:text-gray-700 dark:disabled:opacity-40 enabled:dark:hover:text-gray-100" ${!message || isReadOnly ? "disabled" : ""} type="submit">${validate_component(Send_alt_filled, "CarbonSendAltFilled").$$render($$result, {}, {}, {})}</button>`}</div></form>
		<div class="mt-2 flex justify-between self-stretch px-1 text-xs text-gray-400/90 max-sm:gap-2"><p>Model: <a${add_attribute("href", currentModel.modelUrl || "https://huggingface.co/" + currentModel.name, 0)} target="_blank" rel="noreferrer" class="hover:underline">${escape(currentModel.displayName)}</a> <span class="max-sm:hidden">·</span><br class="sm:hidden"> Generated content may be inaccurate
				or false.
				<br><br> 🔒 All conversations are end-to-end protected
			</p>
			</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { ChatWindow as C, findCurrentModel as f, webSearchParameters as w };
//# sourceMappingURL=ChatWindow-e91e007e.js.map
