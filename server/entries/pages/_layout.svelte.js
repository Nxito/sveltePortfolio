import { c as create_ssr_component, a as add_attribute, e as escape, b as compute_slots, v as validate_component } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/icon.js";
import { w as writable } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
const storePopup = writable(void 0);
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const navigator_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1754vqe{display:flex;align-items:flex-end;flex-direction:row;justify-content:center}",
  map: null
};
const Navigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="list-nav svelte-1754vqe" name="Navigator"><a href="#main" data-svelte-h="svelte-lwrwrg">Inicio</a> <div class="h-[1em] w-px self-center bg-neutral-100 opacity-100 dark:opacity-50"></div> <a href="#about" data-svelte-h="svelte-lu9k96">Sobre mí</a> <div class="h-[1em] w-px self-center bg-neutral-100 opacity-100 dark:opacity-50"></div> <a href="#contact" data-svelte-h="svelte-2a7sw7">Contacto</a> </nav>`;
});
const header_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1d6ytjl{clip-path:ellipse(30% 100% at 50% 0)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="bg-error-800 svelte-1d6ytjl">${validate_component(Navigator, "Navigator").$$render($$result, {}, {}, {})}</section>`;
});
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><h1 data-svelte-h="svelte-kjdymc">Selecciona un tema:</h1> <select class="bg-error-800"><option value="skeleton" data-svelte-h="svelte-l3roly">Predeterminado</option><option value="nxito_theme" data-svelte-h="svelte-1otkvga">@Nxito</option></select> </main>`;
});
const GoogleTranslate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { elementId = "google-translate-element" } = $$props;
  let { options = {
    pageLanguage: "pt",
    includedLanguages: "pt,en,es,fr,nl,ja,zh-CN",
    autoDisplay: false
  } } = $$props;
  if ($$props.elementId === void 0 && $$bindings.elementId && elementId !== void 0)
    $$bindings.elementId(elementId);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return `${$$result.head += `<!-- HEAD_svelte-v1z3mx_START --><script async src="https://translate.google.com/translate_a/element.js" data-svelte-h="svelte-x44ilz"><\/script><!-- HEAD_svelte-v1z3mx_END -->`, ""}`;
});
const Google_translate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(GoogleTranslate, "GoogleTranslate").$$render(
    $$result,
    {
      elementId: "google-translate-element",
      options: {
        pageLanguage: "es",
        includedLanguages: "es,en,ca,eu,gl,fr,it,pt,de"
      }
    },
    {},
    {}
  )} <div id="google-translate-element" class="text-black" data-svelte-h="svelte-7dsqul"><p>Traduce esta página!</p></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="bg-surface-800 grid grid-cols-3 gap-4 p-3"><div class="bg-secondary-100 m-10 p-3 shadow-lg">${validate_component(Google_translate, "TranslatePage").$$render($$result, {}, {}, {})}</div> <div class="bg-secondary-700 m-10 p-3 shadow-lg">${validate_component(Theme, "ThemeSelector").$$render($$result, {}, {}, {})}</div> <div class="inline-flex align-center justify-end self-end invert">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: base + "/icons/tabler/copyright.svg",
      bg: "bg-transparent",
      w: "5"
    },
    {},
    {}
  )} <span class="text-black" data-svelte-h="svelte-1ur177i">Anxo Vilar Beiras</span></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow
  });
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `${validate_component(AppShell, "AppShell").$$render(
    $$result,
    {
      regionPage: "relative",
      slotPageHeader: "sticky top-0 z-10"
    },
    {},
    {
      pageFooter: () => {
        return `${validate_component(Footer, "Footers").$$render($$result, {}, {}, {})} `;
      },
      pageHeader: () => {
        return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} `;
      },
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
export {
  Layout as default
};
