import { c as create_ssr_component, d as subscribe, s as setContext, e as escape, f as createEventDispatcher, g as getContext, a as add_attribute, b as compute_slots, h as compute_rest_props, i as spread, j as escape_attribute_value, k as escape_object, v as validate_component } from "../../chunks/ssr.js";
import { p as prefersReducedMotionStore, I as Icon } from "../../chunks/icon.js";
import { b as base } from "../../chunks/paths.js";
import { w as writable } from "../../chunks/index.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => `${e[0].toUpperCase()}${e.slice(1)}`
  );
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  let { autocollapse = false } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { disabled = false } = $$props;
  let { padding = "py-2 px-4" } = $$props;
  let { hover = "hover:bg-primary-hover-token" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { regionControl = "" } = $$props;
  let { regionPanel = "space-y-4" } = $$props;
  let { regionCaret = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = slide } = $$props;
  let { transitionInParams = { duration: 200 } } = $$props;
  let { transitionOut = slide } = $$props;
  let { transitionOutParams = { duration: 200 } } = $$props;
  const active = writable(null);
  setContext("active", active);
  setContext("autocollapse", autocollapse);
  setContext("disabled", disabled);
  setContext("padding", padding);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("regionControl", regionControl);
  setContext("regionPanel", regionPanel);
  setContext("regionCaret", regionCaret);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  $$unsubscribe_prefersReducedMotionStore();
  return ` <div class="${"accordion " + escape(classesBase, true)}" data-testid="accordion">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase$3 = "";
const cControl = "text-left w-full flex items-center space-x-4";
const cControlCaret = "fill-current w-3 transition-transform duration-[200ms]";
const cPanel$1 = "";
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openState;
  let classesBase;
  let classesControl;
  let classesCaretState;
  let classesControlCaret;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let $active, $$unsubscribe_active;
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  let { id = String(Math.random()) } = $$props;
  let { autocollapse = getContext("autocollapse") } = $$props;
  let { active = getContext("active") } = $$props;
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  let { disabled = getContext("disabled") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { caretOpen = getContext("caretOpen") } = $$props;
  let { caretClosed = getContext("caretClosed") } = $$props;
  let { regionControl = getContext("regionControl") } = $$props;
  let { regionPanel = getContext("regionPanel") } = $$props;
  let { regionCaret = getContext("regionCaret") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  function setActive(event) {
    if (autocollapse === true) {
      active.set(id);
    } else {
      open = !open;
    }
    onToggle(event);
  }
  function onToggle(event) {
    const currentOpenState = autocollapse ? $active === id : open;
    dispatch("toggle", {
      event,
      id: `accordion-control-${id}`,
      open: currentOpenState,
      autocollapse
    });
  }
  if (autocollapse && open)
    setActive();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  {
    if (open && autocollapse)
      setActive();
  }
  openState = autocollapse ? $active === id : open;
  classesBase = `${cBase$3} ${$$props.class ?? ""}`;
  classesControl = `${cControl} ${padding} ${hover} ${rounded} ${regionControl}`;
  classesCaretState = openState ? caretOpen : caretClosed;
  classesControlCaret = `${cControlCaret} ${regionCaret} ${classesCaretState}`;
  classesPanel = `${cPanel$1} ${padding} ${rounded} ${regionPanel}`;
  $$unsubscribe_active();
  return ` <div class="${"accordion-item " + escape(classesBase, true)}" data-testid="accordion-item"> <button type="button" class="${"accordion-control " + escape(classesControl, true)}" id="${"accordion-control-" + escape(id, true)}"${add_attribute("aria-expanded", openState, 0)} aria-controls="${"accordion-panel-" + escape(id, true)}" ${disabled ? "disabled" : ""}> ${$$slots.lead ? `<div class="accordion-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="accordion-summary flex-1">${slots.summary ? slots.summary({}) : `(summary)`}</div>  <div class="${"accordion-summary-caret " + escape(classesControlCaret, true)}"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></div></button>  ${openState ? `<div class="${"accordion-panel " + escape(classesPanel, true)}" id="${"accordion-panel-" + escape(id, true)}" role="region"${add_attribute("aria-hidden", !openState, 0)} aria-labelledby="${"accordion-control-" + escape(id, true)}">${slots.content ? slots.content({}) : `(content)`}</div>` : ``}</div>`;
});
let cBase$2 = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
let cImage = "w-full h-full object-cover";
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$restProps = compute_rest_props($$props, [
    "initials",
    "fill",
    "src",
    "fallback",
    "action",
    "actionParams",
    "background",
    "width",
    "border",
    "rounded",
    "shadow",
    "cursor"
  ]);
  let { initials = "AB" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { src = "" } = $$props;
  let { fallback = "" } = $$props;
  let { action = () => {
  } } = $$props;
  let { actionParams = "" } = $$props;
  let { background = "bg-surface-400-500-token" } = $$props;
  let { width = "w-16" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { shadow = "" } = $$props;
  let { cursor = "" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.initials === void 0 && $$bindings.initials && initials !== void 0)
    $$bindings.initials(initials);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0)
    $$bindings.fallback(fallback);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.actionParams === void 0 && $$bindings.actionParams && actionParams !== void 0)
    $$bindings.actionParams(actionParams);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  classesBase = `${cBase$2} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ""}`;
  return `  <figure class="${"avatar " + escape(classesBase, true)}" data-testid="avatar">${src ? `<img${spread(
    [
      {
        class: "avatar-image " + escape(cImage, true)
      },
      {
        style: escape_attribute_value($$props.style ?? "")
      },
      { src: escape_attribute_value(src) },
      {
        alt: escape_attribute_value($$props.alt || "")
      },
      escape_object(prunedRestProps())
    ],
    {}
  )}>` : `<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-weight="bold"${add_attribute("font-size", 150, 0)} class="${"avatar-text " + escape(fill, true)}">${escape(String(initials).substring(0, 2).toUpperCase())}</text></svg>`}</figure>`;
});
const cBase$1 = "space-y-4";
const cList = "flex overflow-x-auto hide-scrollbar";
const cPanel = "";
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesList;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let { justify = "justify-start" } = $$props;
  let { border = "border-b border-surface-400-500-token" } = $$props;
  let { active = "border-b-2 border-surface-900-50-token" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { flex = "flex-none" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { rounded = "rounded-tl-container-token rounded-tr-container-token" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { regionList = "" } = $$props;
  let { regionPanel = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { panel = "" } = $$props;
  setContext("active", active);
  setContext("hover", hover);
  setContext("flex", flex);
  setContext("padding", padding);
  setContext("rounded", rounded);
  setContext("spacing", spacing);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.panel === void 0 && $$bindings.panel && panel !== void 0)
    $$bindings.panel(panel);
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesList = `${cList} ${justify} ${border} ${regionList}`;
  classesPanel = `${cPanel} ${regionPanel}`;
  return `  <div class="${"tab-group " + escape(classesBase, true)}" data-testid="tab-group"> <div class="${"tab-list " + escape(classesList, true)}" role="tablist"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>  ${$$slots.panel ? `<div class="${"tab-panel " + escape(classesPanel, true)}" role="tabpanel"${add_attribute("aria-labelledby", panel, 0)} tabindex="0">${slots.panel ? slots.panel({}) : ``}</div>` : ``}</div>`;
});
const cBase = "text-center cursor-pointer transition-colors duration-100";
const cInterface = "";
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesInterface;
  let classesTab;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "controls",
    "regionTab",
    "active",
    "hover",
    "flex",
    "padding",
    "rounded",
    "spacing"
  ]);
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { controls = "" } = $$props;
  let { regionTab = "" } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { flex = getContext("flex") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.regionTab === void 0 && $$bindings.regionTab && regionTab !== void 0)
    $$bindings.regionTab(regionTab);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  selected = value === group;
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ""}`;
  classesInterface = `${cInterface} ${spacing}`;
  classesTab = `${regionTab}`;
  return `<label${add_attribute("class", classesBase, 0)}${add_attribute("title", title, 0)}> <div class="${"tab " + escape(classesTab, true)}" data-testid="tab" role="tab"${add_attribute("aria-controls", controls, 0)}${add_attribute("aria-selected", selected, 0)}${add_attribute("tabindex", selected ? 0 : -1, 0)}> <div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>  <div class="${"tab-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="tab-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="tab-label">${slots.default ? slots.default({}) : ``}</div></div></div></label>`;
});
const main_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".webkit-stroke.svelte-7thysb{-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black}",
  map: null
};
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="card card-hover p-3 rounded-2xl grow ease-in m-3 relative min-w-[550px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      class: "  w-64 shadow-2xl grayscale  card-hover hover:grayscale-[40%] ",
      src: base + "/assets/images/anxo-transparent.png"
    },
    {},
    {}
  )} <div class="absolute top-40 left-40" data-svelte-h="svelte-bugill"> <h1 class="h1 webkit-stroke bg-gradient-to-br font-bold from-secondary-900 to-secondary-500 bg-clip-text text-transparent box-decoration-clone whitespace-nowrap svelte-7thysb">Anxo Vilar Beiras</h1> <p class="rounded drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-r from-primary-500 from-50% to-transparent opacity-70">Desarrollador FullStack | Técnico de automatización</p></div></article> <article class="card card-hover rounded-2xl grow ease-in m-3 w-full min-w-[380px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4" data-svelte-h="svelte-jysoe"><img class="w-full" alt="stats" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nxito&show_icons=true&count_private=true&theme=svelte&hide_border=true&bg_color=0D111700&locale=es&layout=compact"> <p class="text-xs text-white text-opacity-50 text-end pr-3">powered by github</p></article> <article class="card card-hover rounded-2xl grow ease-in m-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 grid grid-cols-4 gap-5 p-3"><h1 class="col-span-3 " data-svelte-h="svelte-idgywg">Algún proyecto en mente?</h1> <h2 class="bg-gradient-to-br from-tertiary-600 to-tertiary-300 bg-clip-text text-transparent box-decoration-clone col-span-2 " data-svelte-h="svelte-xxulp1">Contáctame en mis redes sociales!</h2> <div class="grid grid-cols-5 gap-2 col-span-3 max-h-[50px] self-end"><a class="chip bg-primary-500 mr-5" href="https://wa.me/644161447" target="_blank" data-svelte-h="svelte-1oseqr0"><img src="${escape(base, true) + "/icons/tabler/brand-whatsapp.svg"}" class="invert min-w-[30px]" alt="whatsapp" title="whatsapp"></a> <button class="chip bg-primary-500 mr-5" data-svelte-h="svelte-nlka62"><img src="${escape(base, true) + "/icons/tabler/brand-discord.svg"}" class="invert min-w-[30px]" alt="discord" title="discord"></button> <a class="chip bg-primary-500 mr-5 " href="https://www.instagram.com/anxovb" target="_blank" data-svelte-h="svelte-13kzmdj"><img src="${escape(base, true) + "/icons/tabler/brand-instagram.svg"}" class="invert min-w-[30px]" alt="instagram" title="instagram"></a> <a class="chip bg-primary-500 mr-5" href="mailto:anxo97vb@gmail.com?subject=He visto tu perfil de githubPages!" target="_blank" data-svelte-h="svelte-ld8mgp"><img src="${escape(base, true) + "/icons/tabler/mail.svg"}" class="invert min-w-[30px]" alt="gmail" title="email"></a> <a class="chip bg-primary-500 mr-5" href="https://www.linkedin.com/in/anxo-vilar-beiras-59327b183/" target="_blank" data-svelte-h="svelte-1ea0g7"><img src="${escape(base, true) + "/icons/tabler/brand-linkedin.svg"}" class="invert min-w-[30px]" alt="gmail" title="linkedin"></a></div> <a href="#contact" class="opacity-70 text-xs self-end" data-svelte-h="svelte-b3behv">o déjame un mensaje abajo</a></article> <div class="border-2 border-primary-500 bg-secondary-500 rounded-2xl w-100 shadow-xl z-40" data-popup="popupFeatured" data-svelte-h="svelte-jl5j2j"><a href="https://discord.com/users/384025209499549722" target="_blank"><img alt="discord" src="https://lanyard-profile-readme.vercel.app/api/384025209499549722?theme=dark&bg=00000000&animated=false&hideDiscrim=true&borderRadius=15px&idleMessage=Probably%20toggling%20between%20debugging%20code%20and%20watching%20anime"></a> <p class="text-xs text-white text-opacity-50 text-end pr-3">powered by lanyard</p> <div class="arrow bg-primary-500 z-50"></div> </div>`;
});
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabSet = 0;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(TabGroup, "TabGroup").$$render(
      $$result,
      {
        active: "variant-filled-primary",
        hover: "hover:variant-soft-primary",
        class: "bg-surface-100-800-token w-full rounded-2xl"
      },
      {},
      {
        panel: () => {
          return ` ${tabSet === 0 ? `<section class="grid grid-cols-5 gap-4 p-3">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-nodejs.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-javascript.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-svelte.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-docker.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-golang.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-tailwind.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render($$result, { src: base + "/icons/tabler/sql.svg" }, {}, {})} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-threejs.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-css3.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-html5.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render($$result, { src: base + "/icons/tabler/json.svg" }, {}, {})} ${validate_component(Icon, "Icon").$$render($$result, { src: base + "/icons/tabler/markdown.svg" }, {}, {})} ${validate_component(Icon, "Icon").$$render($$result, { src: base + "/icons/tabler/api.svg" }, {}, {})} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-vite.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-vscode.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-debian.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render($$result, { src: base + "/icons/tabler/csv.svg" }, {}, {})} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-github.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-git.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-gitlab.svg"
            },
            {},
            {}
          )} ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/brand-notion.svg"
            },
            {},
            {}
          )}</section>` : `${tabSet === 1 ? `<section data-svelte-h="svelte-izeuf7">Blender lo adoro para edicion 3D, pero he tocado tambien maya y autocad en los FP que he ido</section>` : `${tabSet === 2 ? `<section data-svelte-h="svelte-x8e5jl">ClipStudio paint me entanta para dibujar, pero tengo tocado photoshop y gimp<br>
                A mayores se edicion de video con Premiere, y he tocado avid (nota: no me pidas usar avid, no me gusta)<br>
                Tengo visto como usar IA localmente para crear imagenes (algun dia me tirare unas tardes mirando como crear alguna IA) <br>
                Tengo usado FFMPEG para configurar camaras IP para un cliente en Tecdesoft<br></section>` : ``}`}`} `;
        },
        default: () => {
          return `${validate_component(Tab, "Tab").$$render(
            $$result,
            { name: "tab1", value: 0, group: tabSet },
            {
              group: ($$value) => {
                tabSet = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `<img src="${escape(base, true) + "/icons/tabler/keyboard.svg"}" alt="Programación" class="inline-flex invert">`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-1cbkdi4">Programación</span>`;
              }
            }
          )} ${validate_component(Tab, "Tab").$$render(
            $$result,
            { name: "tab2", value: 1, group: tabSet },
            {
              group: ($$value) => {
                tabSet = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `<img src="${escape(base, true) + "/icons/tabler/3d-cube-sphere.svg"}" alt="3d" class="inline-flex invert">`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-1fj3ajp">3D</span>`;
              }
            }
          )} ${validate_component(Tab, "Tab").$$render(
            $$result,
            { name: "tab3", value: 2, group: tabSet },
            {
              group: ($$value) => {
                tabSet = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `<img src="${escape(base, true) + "/icons/tabler/pencil.svg"}" alt="2d" class="inline-flex invert">`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-1t63iuc">2D</span>`;
              }
            }
          )} `;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const about_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.main.svelte-4zqb36{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-start;justify-content:space-between}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<article class="card card-hover main container mx-auto w-[98%] svelte-4zqb36"><h1 class="h1 uppercase" data-svelte-h="svelte-1woi9dz">Sobre mí</h1> ${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `<div class="card">${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
        content: () => {
          return `De Teo, Galicia, España. Me encanta tener perspectiva de muchos ámbitos para buscar las
					mejores soluciones.`;
        },
        summary: () => {
          return `<span class="h3 uppercase" data-svelte-h="svelte-5op0ca">Personal</span>`;
        },
        lead: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/user.svg",
              w: "10"
            },
            {},
            {}
          )}`;
        }
      })}</div> <div class="card">${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        content: () => {
          return `<p data-svelte-h="svelte-ing4ck">Rock, electronic, house, y mas... Mis playlist son bastante variadas, y a veces dejo que
						se mezcle de todo.</p>`;
        },
        summary: () => {
          return `<span class="h3 uppercase" data-svelte-h="svelte-1565i0x">music</span>`;
        },
        lead: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/music.svg ",
              w: "10"
            },
            {},
            {}
          )}`;
        }
      })}</div> <div class="card">${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        content: () => {
          return `${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}`;
        },
        summary: () => {
          return `<span class="h3 uppercase" data-svelte-h="svelte-fl94w8">Skills</span>`;
        },
        lead: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/apps-filled.svg",
              w: "10"
            },
            {},
            {}
          )}`;
        }
      })}</div> <div class="card">${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        content: () => {
          return `Videojuegos, series, quedar con amigos y escuchar música
				`;
        },
        summary: () => {
          return `<span class="h3 uppercase" data-svelte-h="svelte-13pzxzm">Hobbies</span>`;
        },
        lead: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: base + "/icons/tabler/pencil.svg",
              w: "10"
            },
            {},
            {}
          )}`;
        }
      })}</div>`;
    }
  })} </article>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container card rounded-2xl grow basis-1/3 ease-in m-3 relative min-w-[550px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 card-hover p-3" data-svelte-h="svelte-5t814t"><h1 class="h1">CONTACTO</h1> <form method="post" action="https://forms.un-static.com/forms/b950bea6ccc150dfe2f8c24e54cc64ca5ea7e61d"><div class="form-group row"><label class="label" for="InputEmail"><span>Tu Email</span> <input id="InputEmail" name="Email" class="input" x-model="content" title="Input (email)" type="email" placeholder="john@example.com" autocomplete="email" required></label> <label class="label" for="InputContent"><span>Mensaje</span> <textarea id="InputContent" name="Mensaje" class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."></textarea></label> <button class="btn bg-primary-800 card-hover" type="submit"><span>Enviar</span></button></div></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="container place-content-center scroll-smooth "><section id="main" class="flex flex-wrap scroll-mt-8">${validate_component(Main, "Main").$$render($$result, {}, {}, {})}</section> <section id="about" class="flex flex-wrap scroll-smooth scroll-mt-8">${validate_component(About, "About").$$render($$result, {}, {}, {})}</section> <section id="contact" class="flex flex-wrap scroll-mt-8">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</section> </main>`;
});
export {
  Page as default
};
