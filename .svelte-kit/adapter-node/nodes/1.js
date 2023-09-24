

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b5d0d066.js","_app/immutable/chunks/index.98ebe618.js","_app/immutable/chunks/stores.997706bb.js","_app/immutable/chunks/singletons.db0d2646.js"];
export const stylesheets = [];
export const fonts = [];
