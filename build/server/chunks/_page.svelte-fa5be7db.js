import { c as create_ssr_component } from './index3-249a4fd3.js';
import { marked } from 'marked';

const privacy = "# About & Privacy - BlindChat\n\n## Privacy\n\n<em>Last updated: September 15, 2023</em>\n\nNo conversations are recorded. All computation happens on your device, and conversations are stored locally in the browser’s cache.\n\nWe don’t and never will see your data, so we cannot train on your data. Your data remains yours.\n\n## About\n\nBlindChat is an open-source project to provide fully in-browser and private Conversational AI.\n\nIt is currently developed and maintained by [Mithril Security](https://www.mithrilsecurity.io/), a startup aiming to make AI more private.\n\nYou can find more information on our [Github](https://github.com/mithril-security/blind_chat/), join us on our [Discord](https://discord.com/invite/TxEHagpWd4), or directly [contact us](mailto:contact@mithrilsecurity.io).\n    ";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="overflow-auto p-6"><div class="prose mx-auto px-4 pb-24 pt-6 dark:prose-invert md:pt-12">
		<!-- HTML_TAG_START -->${marked(privacy, { gfm: true })}<!-- HTML_TAG_END --></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fa5be7db.js.map
