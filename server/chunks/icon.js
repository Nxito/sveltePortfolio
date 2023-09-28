import { w as writable, r as readable } from "./index.js";
import { l as get_store_value, c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const app = "";
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
function prefersReducedMotion() {
  return false;
}
const prefersReducedMotionStore = readable(prefersReducedMotion(), (set) => {
});
const ProgressBar_svelte_svelte_type_style_lang = "";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { w = 16 } = $$props;
  let { bg = "bg-primary-300" } = $$props;
  let { src } = $$props;
  let title = src.split("/").pop().split(".").shift();
  if ($$props.w === void 0 && $$bindings.w && w !== void 0)
    $$bindings.w(w);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `<img${add_attribute("src", src, 0)}${add_attribute("title", title, 0)}${add_attribute("alt", title, 0)} class="${"w-" + escape(w, true) + " " + escape(bg, true) + " rounded-full"}">`;
});
export {
  Icon as I,
  prefersReducedMotionStore as p
};
