

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.de3ee192.js","_app/immutable/chunks/scheduler.6f9dceae.js","_app/immutable/chunks/index.6032d4f1.js","_app/immutable/chunks/icon.8433d0bc.js","_app/immutable/chunks/paths.8d3c87f7.js"];
export const stylesheets = ["_app/immutable/assets/0.dd69a046.css","_app/immutable/assets/icon.9e423837.css"];
export const fonts = [];
