

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.16f2b423.js","_app/immutable/chunks/scheduler.6f9dceae.js","_app/immutable/chunks/index.6032d4f1.js","_app/immutable/chunks/singletons.acedea9d.js","_app/immutable/chunks/paths.eb18cd76.js"];
export const stylesheets = [];
export const fonts = [];
