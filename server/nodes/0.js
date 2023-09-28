

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.16b7fce4.js","_app/immutable/chunks/scheduler.6f9dceae.js","_app/immutable/chunks/index.6032d4f1.js","_app/immutable/chunks/icon.16591e5c.js","_app/immutable/chunks/paths.eb18cd76.js"];
export const stylesheets = ["_app/immutable/assets/0.53dee4d9.css","_app/immutable/assets/icon.d96715fc.css"];
export const fonts = [];
