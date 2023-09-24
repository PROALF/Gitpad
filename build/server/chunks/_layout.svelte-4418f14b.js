import { c as create_ssr_component, a as subscribe, o as onDestroy, e as escape, b as add_attribute, v as validate_component, d as createEventDispatcher, f as each, i as is_promise, n as noop, g as set_store_value, h as spread, j as escape_object } from './index3-249a4fd3.js';
import { b as base } from './paths-05fee424.js';
import { p as page, n as navigating } from './stores-6c89d873.js';
import { P as PUBLIC_APP_DISCLAIMER, c as PUBLIC_APP_NAME, d as PUBLIC_APP_ASSETS, e as PUBLIC_ORIGIN, f as PUBLIC_VERSION } from './public-48495260.js';
import { e as error } from './errors-1f4790d7.js';
import { b as browser } from './environment-03c3dd82.js';
import { L as Logo } from './Logo-bd6379c0.js';
import { p as public_env, w as writable } from './shared-server-26696cfd.js';
import './LocalDB-8101692b.js';
import './prod-ssr-7cc47430.js';
import 'dexie';

const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586L17.414 16z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Add = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Text_align_justify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M6 6h20v2H6zm0 6h20v2H6zm0 6h20v2H6zm0 6h20v2H6z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const MobileNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { isOpen = false } = $$props;
  let { title } = $$props;
  let closeEl;
  let openEl;
  const dispatch = createEventDispatcher();
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  title = title || "New Chat";
  {
    if ($navigating) {
      dispatch("toggle", false);
    }
  }
  {
    if (isOpen && closeEl) {
      closeEl.focus();
    } else if (!isOpen && browser && document.activeElement === closeEl) {
      openEl.focus();
    }
  }
  $$unsubscribe_navigating();
  return `<nav class="flex h-12 items-center justify-between border-b bg-gray-50 px-4 dark:border-gray-800 dark:bg-gray-800/70 md:hidden"><button type="button" class="-ml-3 flex h-9 w-9 shrink-0 items-center justify-center" aria-label="Open menu"${add_attribute("this", openEl, 0)}>${validate_component(Text_align_justify, "CarbonTextAlignJustify").$$render($$result, {}, {}, {})}</button>
	<span class="truncate px-4">${escape(title)}</span>
	<a${add_attribute("href", `${base}/`, 0)} class="-mr-3 flex h-9 w-9 shrink-0 items-center justify-center">${validate_component(Add, "CarbonAdd").$$render($$result, {}, {}, {})}</a></nav>
<nav class="${"fixed inset-0 z-30 grid max-h-screen grid-cols-1 grid-rows-[auto,auto,1fr,auto] bg-white bg-gradient-to-l from-gray-50 dark:bg-gray-900 dark:from-gray-800/30 " + escape(isOpen ? "block" : "hidden", true)}"><div class="flex h-12 items-center px-4"><button type="button" class="-mr-3 ml-auto flex h-9 w-9 items-center justify-center" aria-label="Close menu"${add_attribute("this", closeEl, 0)}>${validate_component(Close, "CarbonClose").$$render($$result, {}, {}, {})}</button></div>
	${slots.default ? slots.default({}) : ``}</nav>`;
});
const Trash_can = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z"/><path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const NavConversationItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { conv } = $$props;
  createEventDispatcher();
  if ($$props.conv === void 0 && $$bindings.conv && conv !== void 0)
    $$bindings.conv(conv);
  $$unsubscribe_page();
  return `<a data-sveltekit-noscroll href="${escape(base, true) + "/conversation/" + escape(conv.id, true)}" class="${"group flex h-11 flex-none items-center gap-1.5 rounded-lg pl-3 pr-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 " + escape(
    conv.id === $page.params.id ? "bg-gray-100 dark:bg-gray-700" : "",
    true
  )}"><div class="flex-1 truncate">${``}
		${escape(conv.title)}</div>

	${`<button type="button" class="flex h-5 w-5 items-center justify-center rounded md:hidden md:group-hover:flex" title="Edit conversation title">${validate_component(Edit, "CarbonEdit").$$render(
    $$result,
    {
      class: "text-xs text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
    },
    {},
    {}
  )}</button>

		<button type="button" class="flex h-5 w-5 items-center justify-center rounded md:hidden md:group-hover:flex" title="Delete conversation">${validate_component(Trash_can, "CarbonTrashCan").$$render(
    $$result,
    {
      class: "text-xs text-gray-400  hover:text-gray-500 dark:hover:text-gray-300"
    },
    {},
    {}
  )}</button>`}</a>`;
});
const NavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { conversations = [] } = $$props;
  let { canLogin } = $$props;
  let { user } = $$props;
  let { loginModalVisible } = $$props;
  if ($$props.conversations === void 0 && $$bindings.conversations && conversations !== void 0)
    $$bindings.conversations(conversations);
  if ($$props.canLogin === void 0 && $$bindings.canLogin && canLogin !== void 0)
    $$bindings.canLogin(canLogin);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.loginModalVisible === void 0 && $$bindings.loginModalVisible && loginModalVisible !== void 0)
    $$bindings.loginModalVisible(loginModalVisible);
  return `<div class="sticky top-0 flex flex-none items-center justify-between px-3 py-3.5 max-sm:pt-0"><a class="flex items-center rounded-xl text-lg font-semibold" href="${escape(PUBLIC_ORIGIN, true) + escape(base, true) + "/"}">${validate_component(Logo, "Logo").$$render($$result, { classNames: "mr-1" }, {}, {})}
		${escape(PUBLIC_APP_NAME)}</a>
	<a${add_attribute("href", `${base}/`, 0)} class="flex rounded-lg border bg-white px-2 py-0.5 text-center shadow-sm hover:shadow-none dark:border-gray-600 dark:bg-gray-700">New Chat
	</a></div>
<div class="scrollbar-custom flex flex-col gap-1 overflow-y-auto rounded-r-xl bg-gradient-to-l from-gray-50 px-3 pb-3 pt-2 dark:from-gray-800/30">${each(conversations, (conv) => {
    return `${validate_component(NavConversationItem, "NavConversationItem").$$render($$result, { conv }, {}, {})}`;
  })}</div>
<div class="mt-0.5 flex flex-col gap-1 rounded-r-xl bg-gradient-to-l from-gray-50 p-3 text-sm dark:from-gray-800/30">${user?.username || user?.email ? `<form action="${escape(base, true) + "/logout"}" method="post" class="group flex items-center gap-1.5 rounded-lg pl-3 pr-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span class="flex h-9 flex-none shrink items-center gap-1.5 truncate pr-2 text-gray-500 dark:text-gray-400">${escape(user?.username || user?.email)}</span>
			<button type="submit" class="ml-auto h-6 flex-none items-center gap-1.5 rounded-md border bg-white px-2 text-gray-700 shadow-sm group-hover:flex hover:shadow-none dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400 dark:hover:text-gray-300 md:hidden">Sign Out
			</button></form>` : ``}
	${canLogin ? `<button type="button" class="flex h-9 flex-none items-center gap-1.5 rounded-lg pl-3 pr-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Login
		</button>` : ``}
	<button type="button" class="flex h-9 flex-none items-center gap-1.5 rounded-lg pl-3 pr-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Theme
	</button>
	<button type="button" class="flex h-9 flex-none items-center gap-1.5 rounded-lg pl-3 pr-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Settings
	</button>
	<a href="https://github.com/mithril-security/blind_chat/issues" target="_blank" rel="noreferrer" class="flex h-9 flex-none items-center gap-1.5 rounded-lg pl-3 pr-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Feedback
	</a>
	<a href="${escape(base, true) + "/privacy"}" class="flex h-9 flex-none items-center gap-1.5 rounded-lg pl-3 pr-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">About &amp; Privacy
	</a></div>`;
});
const IconDazzled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames = "" } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"${add_attribute("class", classNames, 0)} fill="none" viewBox="0 0 26 23"><path fill="url(#a)" d="M.93 10.65A10.17 10.17 0 0 1 11.11.48h4.67a9.45 9.45 0 0 1 0 18.89H4.53L1.62 22.2a.38.38 0 0 1-.69-.28V10.65Z"></path><path fill="#000" fill-rule="evenodd" d="M11.52 7.4a1.86 1.86 0 1 1-3.72 0 1.86 1.86 0 0 1 3.72 0Zm7.57 0a1.86 1.86 0 1 1-3.73 0 1.86 1.86 0 0 1 3.73 0ZM8.9 12.9a.55.55 0 0 0-.11.35.76.76 0 0 1-1.51 0c0-.95.67-1.94 1.76-1.94 1.09 0 1.76 1 1.76 1.94H9.3a.55.55 0 0 0-.12-.35c-.06-.07-.1-.08-.13-.08s-.08 0-.14.08Zm4.04 0a.55.55 0 0 0-.12.35h-1.51c0-.95.68-1.94 1.76-1.94 1.1 0 1.77 1 1.77 1.94h-1.51a.55.55 0 0 0-.12-.35c-.06-.07-.11-.08-.14-.08-.02 0-.07 0-.13.08Zm-1.89.79c-.02 0-.07-.01-.13-.08a.55.55 0 0 1-.12-.36h-1.5c0 .95.67 1.95 1.75 1.95 1.1 0 1.77-1 1.77-1.95h-1.51c0 .16-.06.28-.12.36-.06.07-.11.08-.14.08Zm4.04 0c-.03 0-.08-.01-.14-.08a.55.55 0 0 1-.12-.36h-1.5c0 .95.67 1.95 1.76 1.95 1.08 0 1.76-1 1.76-1.95h-1.51c0 .16-.06.28-.12.36-.06.07-.11.08-.13.08Zm1.76-.44c0-.16.05-.28.12-.35.06-.07.1-.08.13-.08s.08 0 .14.08c.06.07.11.2.11.35a.76.76 0 0 0 1.51 0c0-.95-.67-1.94-1.76-1.94-1.09 0-1.76 1-1.76 1.94h1.5Z" clip-rule="evenodd"></path><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(0 31.37 -34.85 0 13.08 -9.02)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD21E"></stop><stop offset="1" stop-color="red"></stop></radialGradient></defs></svg>`;
});
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message = "" } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `<div class="pointer-events-none fixed right-0 top-12 z-20 bg-gradient-to-bl from-red-500/20 via-red-500/0 to-red-500/0 pb-36 pl-36 pr-2 pt-2 md:top-0 md:pr-8 md:pt-5"><div class="pointer-events-auto flex items-center rounded-full bg-white/90 px-3 py-1 shadow-sm dark:bg-gray-900/80">${validate_component(IconDazzled, "IconDazzled").$$render($$result, { classNames: "text-2xl mr-2" }, {}, {})}
		<h2 class="font-semibold">${escape(message)}</h2></div></div>`;
});
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let el;
  onDestroy(() => {
  });
  return `<div class="contents" hidden${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "max-w-sm" } = $$props;
  let backdropEl;
  let modalEl;
  createEventDispatcher();
  onDestroy(() => {
    return;
  });
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  return `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
    default: () => {
      return `<div role="presentation" tabindex="-1" class="fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-8 backdrop-blur-sm dark:bg-black/50"${add_attribute("this", backdropEl, 0)}><div role="dialog" tabindex="-1" class="${"-mt-10 overflow-hidden rounded-2xl bg-white shadow-2xl outline-none md:-mt-20 " + escape(width, true)}"${add_attribute("this", modalEl, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
    }
  })}`;
});
const ConfirmModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  return `${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex w-full flex-col gap-0 p-2"><div class="flex items-start text-xl font-bold text-gray-800 m-2"><h1>You are about to download an AI model on your device</h1>
			<br>
			<button type="button" class="group">${validate_component(Close, "CarbonClose").$$render(
        $$result,
        {
          class: "text-gray-900 group-hover:text-gray-500"
        },
        {},
        {}
      )}</button></div>
		<div class="flex items-start text-m text-gray-800 m-2"><br>To ensure your conversations with our AI remain private, our web application sends a model to your device to perform inference locally. No data leaves your device.<br>
			<br>This might be demanding in terms of bandwidth, storage and computing power on your side.<br>
			<br></div>
		<div class="flex items-start text-m text-gray-800 m-2"><br><b>Mobile usage is not advised.</b><br></div>
		<br></div>`;
    }
  })}`;
});
const map_writable = writable(["", ""]);
const LoadingModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const forceUpdate = async (_) => {
  };
  let loadingMap = /* @__PURE__ */ new Map();
  map_writable.subscribe((value) => {
    const [model, percent] = value;
    if (model.startsWith("onnx")) {
      loadingMap.set(model, Math.floor(Number(percent)));
    }
  });
  return `${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex w-full flex-col gap-0 p-2"><div class="flex items-start text-xl font-bold text-gray-800"><h2>Loading the model...</h2>
			<br></div>
		<div class="flex items-start text-s text-gray-800"><br>Please wait while we download the model. This has to be done only once.
		</div>
		<br>
		${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ``;
        }
        return function(_) {
          return `
			${each([...loadingMap], ([key, value]) => {
            return `<p class="text-s text-gray-800">${escape(key)}</p>
				<div class="w3-light-grey"><div class="w3-blue" style="${"width:" + escape(value, true) + "%"}">${escape(value)}%</div></div>
				<br>`;
          })}
		`;
        }();
      }(forceUpdate())}</div>`;
    }
  })}`;
});
const LoginModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { settings } = $$props;
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0)
    $$bindings.settings(settings);
  $$unsubscribe_page();
  return `${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex w-full flex-col items-center gap-6 bg-gradient-to-t from-primary-500/40 via-primary-500/10 to-primary-500/0 px-4 pb-10 pt-9 text-center "><h2 class="flex items-center text-2xl font-semibold text-gray-800">${validate_component(Logo, "Logo").$$render($$result, { classNames: "mr-1" }, {}, {})}
			${escape(PUBLIC_APP_NAME)}
			<div class="ml-3 flex h-6 items-center rounded-lg border border-gray-100 bg-gray-50 px-2 text-base text-gray-400">v${escape(PUBLIC_VERSION)}</div></h2>
		${$page.data.requiresLogin ? `<p class="px-4 text-lg font-semibold leading-snug text-gray-800 sm:px-12" style="text-wrap: balance;">Please Sign in with Hugging Face to continue
			</p>` : ``}
		<p class="text-base text-gray-800">Disclaimer: AI is an area of active research with known problems such as biased generation and
			misinformation. Do not use this application for high-stakes decisions or advice.
		</p>
		${`<p class="px-2 text-sm text-gray-500">Your conversations will be shared with model authors unless you disable it from your
				settings.
			</p>`}
		<form action="${escape(base, true) + "/" + escape($page.data.requiresLogin ? "login" : "settings", true)}"${add_attribute("target", "", 0)} method="POST" class="flex w-full flex-col items-center gap-2">${$page.data.requiresLogin ? `<button type="submit" class="mt-2 flex items-center whitespace-nowrap rounded-full bg-black px-5 py-2 text-lg font-semibold text-gray-100 transition-colors hover:bg-primary-500">Sign in
					${``}</button>` : `<input type="hidden" name="ethicsModalAccepted"${add_attribute("value", true, 0)}>
				${each(Object.entries(settings), ([key, val]) => {
        return `<input type="hidden"${add_attribute("name", key, 0)}${add_attribute("value", val, 0)}>`;
      })}
				<button type="submit" class="mt-2 rounded-full bg-black px-5 py-2 text-lg font-semibold text-gray-100 transition-colors hover:bg-primary-500">Start chatting
				</button>`}</form></div>`;
    }
  })}`;
});
const isloading_writable = writable(false);
const refresh_chats_writable = writable([]);
const refresh_chats_writable_empty = writable(false);
function getProgress(progress) {
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $error, $$unsubscribe_error;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_error = subscribe(error, (value) => $error = value);
  let { data } = $$props;
  let isloading = false;
  let conversations_list = [];
  isloading_writable.subscribe((value) => {
    isloading = value;
  });
  let isNavOpen = false;
  let errorToastTimeout;
  let currentError;
  refresh_chats_writable.subscribe(async (value) => {
    if (value.length > 0) {
      conversations_list = value;
      refresh_chats_writable.set([]);
    }
  });
  refresh_chats_writable_empty.subscribe(async (value) => {
    conversations_list = [];
    refresh_chats_writable.set(conversations_list);
  });
  async function onError() {
    if ($error && currentError && $error !== currentError) {
      clearTimeout(errorToastTimeout);
      currentError = null;
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    currentError = $error;
    errorToastTimeout = setTimeout(
      () => {
        set_store_value(error, $error = null, $error);
        currentError = null;
      },
      3e3
    );
  }
  onDestroy(() => {
    clearTimeout(errorToastTimeout);
  });
  const requiresLogin = !$page.error && !$page.route.id?.startsWith("/r/") && (data.requiresLogin ? !data.user : !data.settings.ethicsModalAcceptedAt && !!PUBLIC_APP_DISCLAIMER);
  let loginModalVisible = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.getProgress === void 0 && $$bindings.getProgress && getProgress !== void 0)
    $$bindings.getProgress(getProgress);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if ($error)
        onError();
    }
    public_env.PUBLIC_APP_NAME;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1fw0s1l_START -->${$$result.title = `<title>${escape(PUBLIC_APP_NAME)}</title>`, ""}<meta name="description" content="Private Conversational AI"><meta property="og:title"${add_attribute("content", PUBLIC_APP_NAME, 0)}><meta property="og:type" content="website"><meta property="og:url" content="${escape($page.url.origin, true) + escape(base, true)}"><meta property="og:image" content="${escape($page.url.origin, true) + escape(base, true) + "/" + escape(PUBLIC_APP_ASSETS, true) + "/thumbnail.jpg"}"><link rel="icon" href="${escape($page.url.origin, true) + escape(base, true) + "/" + escape(PUBLIC_APP_ASSETS, true) + "/favicon.png"}" type="image/png"><link rel="apple-touch-icon" href="${escape($page.url.origin, true) + escape(base, true) + "/" + escape(PUBLIC_APP_ASSETS, true) + "/touch-icon-ipad-retina.png"}" sizes="167x167" type="image/png"><link rel="apple-touch-icon" href="${escape($page.url.origin, true) + escape(base, true) + "/" + escape(PUBLIC_APP_ASSETS, true) + "/touch-icon-ipad.png"}" sizes="152x152" type="image/png"><link rel="apple-touch-icon" href="${escape($page.url.origin, true) + escape(base, true) + "/" + escape(PUBLIC_APP_ASSETS, true) + "/touch-icon-iphone-retina.png"}" sizes="180x180" type="image/png"><!-- HEAD_svelte-1fw0s1l_END -->`, ""}

<div class="grid h-full w-screen grid-cols-1 grid-rows-[auto,1fr] overflow-hidden text-smd dark:text-gray-300 md:grid-cols-[280px,1fr] md:grid-rows-[1fr]">${validate_component(MobileNav, "MobileNav").$$render(
      $$result,
      {
        isOpen: isNavOpen,
        title: conversations_list.find((conv) => conv.id === $page.params.id)?.title
      },
      {},
      {
        default: () => {
          return `${validate_component(NavMenu, "NavMenu").$$render(
            $$result,
            {
              conversations: conversations_list,
              user: data.user,
              canLogin: data.user === void 0 && data.requiresLogin,
              loginModalVisible
            },
            {
              loginModalVisible: ($$value) => {
                loginModalVisible = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}
	<nav class="grid max-h-screen grid-cols-1 grid-rows-[auto,1fr,auto] max-md:hidden">${validate_component(NavMenu, "NavMenu").$$render(
      $$result,
      {
        conversations: conversations_list,
        user: data.user,
        canLogin: data.user === void 0 && data.requiresLogin,
        loginModalVisible
      },
      {
        loginModalVisible: ($$value) => {
          loginModalVisible = $$value;
          $$settled = false;
        }
      },
      {}
    )}</nav>
	${currentError ? `${validate_component(Toast, "Toast").$$render($$result, { message: currentError }, {}, {})}` : ``}
	${`${validate_component(ConfirmModal, "ConfirmModal").$$render($$result, {}, {}, {})}`}
	${isloading ? `${validate_component(LoadingModal, "LoadingModal").$$render($$result, {}, {}, {})}` : ``}
	${``}
	${requiresLogin && data.messagesBeforeLogin === 0 || loginModalVisible ? `${validate_component(LoginModal, "LoginModal").$$render($$result, { settings: data.settings }, {}, {})}` : ``}
	${slots.default ? slots.default({}) : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_error();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-4418f14b.js.map
