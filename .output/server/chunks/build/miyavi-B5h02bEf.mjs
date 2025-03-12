import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, ref, watch, h, getCurrentInstance, computed, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1, a as __nuxt_component_2$1, b as __nuxt_component_2, c as __nuxt_component_3, d as __nuxt_component_5, h as hSlot, Q as QSpinner, u as useDarkProps, e as useDark, f as useRouterLinkProps, g as useRouterLink, i as isKeyCode, j as hUniqueSlot, v as vmIsDestroyed } from './QSeparator-2OCLeQZd.mjs';
import { e as createComponent, s as stopAndPrevent, l as listenOpts } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

function useTimeout() {
  let timer = null;
  const vm = getCurrentInstance();
  function removeTimeout() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }
  return {
    removeTimeout,
    registerTimeout(fn, delay) {
      removeTimeout();
      if (vmIsDestroyed(vm) === false) {
        timer = setTimeout(() => {
          timer = null;
          fn();
        }, delay);
      }
    }
  };
}
const scrollTargetProp = {};
const __nuxt_component_7 = createComponent({
  name: "QItem",
  props: {
    ...useDarkProps,
    ...useRouterLinkProps,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    const isActionable = computed(
      () => props.clickable === true || hasLink.value === true || props.tag === "label"
    );
    const isClickable = computed(
      () => props.disable !== true && isActionable.value === true
    );
    const classes = computed(
      () => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : "")
    );
    const style = computed(() => {
      if (props.insetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
      };
    });
    function onClick(e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null && e.qAvoidFocus !== true) {
          if (e.qKeyEvent !== true && (void 0).activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          } else if ((void 0).activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }
        navigateOnClick(e);
      }
    }
    function onKeyup(e) {
      if (isClickable.value === true && isKeyCode(e, [13, 32]) === true) {
        stopAndPrevent(e);
        e.qKeyEvent = true;
        const evt = new MouseEvent("click", e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }
      emit("keyup", e);
    }
    function getContent() {
      const child = hUniqueSlot(slots.default, []);
      isClickable.value === true && child.unshift(
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef })
      );
      return child;
    }
    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style.value,
        role: "listitem",
        onClick,
        onKeyup
      };
      if (isClickable.value === true) {
        data.tabindex = props.tabindex || "0";
        Object.assign(data, linkAttrs.value);
      } else if (isActionable.value === true) {
        data["aria-disabled"] = "true";
      }
      return h(
        linkTag.value,
        data,
        getContent()
      );
    };
  }
});
const __nuxt_component_8 = createComponent({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => `q-item__section column q-item__section--${props.avatar === true || props.side === true || props.thumbnail === true ? "side" : "main"}` + (props.top === true ? " q-item__section--top justify-start" : " justify-center") + (props.avatar === true ? " q-item__section--avatar" : "") + (props.thumbnail === true ? " q-item__section--thumbnail" : "") + (props.noWrap === true ? " q-item__section--nowrap" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const __nuxt_component_9 = createComponent({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(props, { slots }) {
    const parsedLines = computed(() => parseInt(props.lines, 10));
    const classes = computed(
      () => "q-item__label" + (props.overline === true ? " q-item__label--overline text-overline" : "") + (props.caption === true ? " q-item__label--caption text-caption" : "") + (props.header === true ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : "")
    );
    const style = computed(() => {
      return props.lines !== void 0 && parsedLines.value > 1 ? {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": parsedLines.value
      } : null;
    });
    return () => h("div", {
      style: style.value,
      class: classes.value
    }, hSlot(slots.default));
  }
});
const useRatioProps = {
  ratio: [String, Number]
};
function useRatio(props, naturalRatio) {
  return computed(() => {
    const ratio = Number(
      props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );
    return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
  });
}
const defaultRatio = 1.7778;
const __nuxt_component_4 = createComponent({
  name: "QImg",
  props: {
    ...useRatioProps,
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,
    draggable: Boolean,
    loading: {
      type: String,
      default: "lazy"
    },
    loadingShowDelay: {
      type: [Number, String],
      default: 0
    },
    fetchpriority: {
      type: String,
      default: "auto"
    },
    width: String,
    height: String,
    initialRatio: {
      type: [Number, String],
      default: defaultRatio
    },
    placeholderSrc: String,
    errorSrc: String,
    fit: {
      type: String,
      default: "cover"
    },
    position: {
      type: String,
      default: "50% 50%"
    },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String
  },
  emits: ["load", "error"],
  setup(props, { slots, emit }) {
    const naturalRatio = ref(props.initialRatio);
    const ratioStyle = useRatio(props, naturalRatio);
    const vm = getCurrentInstance();
    const { registerTimeout: registerLoadTimeout, removeTimeout: removeLoadTimeout } = useTimeout();
    const { removeTimeout: removeLoadShowTimeout } = useTimeout();
    const placeholderImg = computed(() => props.placeholderSrc !== void 0 ? { src: props.placeholderSrc } : null);
    const errorImg = computed(() => props.errorSrc !== void 0 ? { src: props.errorSrc, __qerror: true } : null);
    const images = [
      ref(null),
      ref(placeholderImg.value)
    ];
    const position = ref(0);
    const isLoading = ref(false);
    const hasError = ref(false);
    const classes = computed(
      () => `q-img q-img--${props.noNativeMenu === true ? "no-" : ""}menu`
    );
    const style = computed(() => ({
      width: props.width,
      height: props.height
    }));
    const imgClass = computed(
      () => `q-img__image ${props.imgClass !== void 0 ? props.imgClass + " " : ""}q-img__image--with${props.noTransition === true ? "out" : ""}-transition q-img__image--`
    );
    const imgStyle = computed(() => ({
      ...props.imgStyle,
      objectFit: props.fit,
      objectPosition: props.position
    }));
    function clearLoading() {
      removeLoadShowTimeout();
      isLoading.value = false;
    }
    function onLoad({ target }) {
      if (vmIsDestroyed(vm) === false) {
        removeLoadTimeout();
        naturalRatio.value = target.naturalHeight === 0 ? 0.5 : target.naturalWidth / target.naturalHeight;
        waitForCompleteness(target, 1);
      }
    }
    function waitForCompleteness(target, count) {
      if (count === 1e3 || vmIsDestroyed(vm) === true) return;
      if (target.complete === true) {
        onReady(target);
      } else {
        registerLoadTimeout(() => {
          waitForCompleteness(target, count + 1);
        }, 50);
      }
    }
    function onReady(target) {
      if (vmIsDestroyed(vm) === true) return;
      position.value = position.value ^ 1;
      images[position.value].value = null;
      clearLoading();
      if (target.getAttribute("__qerror") !== "true") {
        hasError.value = false;
      }
      emit("load", target.currentSrc || target.src);
    }
    function onError(err) {
      removeLoadTimeout();
      clearLoading();
      hasError.value = true;
      images[position.value].value = errorImg.value;
      images[position.value ^ 1].value = placeholderImg.value;
      emit("error", err);
    }
    function getImage(index) {
      const img = images[index].value;
      const data = {
        key: "img_" + index,
        class: imgClass.value,
        style: imgStyle.value,
        alt: props.alt,
        crossorigin: props.crossorigin,
        decoding: props.decoding,
        referrerpolicy: props.referrerpolicy,
        height: props.height,
        width: props.width,
        loading: props.loading,
        fetchpriority: props.fetchpriority,
        "aria-hidden": "true",
        draggable: props.draggable,
        ...img
      };
      if (position.value === index) {
        Object.assign(data, {
          class: data.class + "current",
          onLoad,
          onError
        });
      } else {
        data.class += "loaded";
      }
      return h(
        "div",
        { class: "q-img__container absolute-full", key: "img" + index },
        h("img", data)
      );
    }
    function getContent() {
      if (isLoading.value === false) {
        return h("div", {
          key: "content",
          class: "q-img__content absolute-full q-anchor--skip"
        }, hSlot(slots[hasError.value === true ? "error" : "default"]));
      }
      return h("div", {
        key: "loading",
        class: "q-img__loading absolute-full flex flex-center"
      }, slots.loading !== void 0 ? slots.loading() : props.noSpinner === true ? void 0 : [
        h(QSpinner, {
          color: props.spinnerColor,
          size: props.spinnerSize
        })
      ]);
    }
    return () => {
      const content = [];
      if (ratioStyle.value !== null) {
        content.push(
          h("div", { key: "filler", style: ratioStyle.value })
        );
      }
      if (images[0].value !== null) {
        content.push(
          getImage(0)
        );
      }
      if (images[1].value !== null) {
        content.push(
          getImage(1)
        );
      }
      content.push(
        h(Transition, { name: "q-transition--fade" }, getContent)
      );
      return h("div", {
        key: "main",
        class: classes.value,
        style: style.value,
        role: "img",
        "aria-label": props.alt
      }, content);
    };
  }
});
const roleAttrExceptions = ["ul", "ol"];
const __nuxt_component_6 = createComponent({
  name: "QList",
  props: {
    ...useDarkProps,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const role = computed(
      () => roleAttrExceptions.includes(props.tag) ? null : "list"
    );
    const classes = computed(
      () => "q-list" + (props.bordered === true ? " q-list--bordered" : "") + (props.dense === true ? " q-list--dense" : "") + (props.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props.padding === true ? " q-list--padding" : "")
    );
    return () => h(props.tag, { class: classes.value, role: role.value }, hSlot(slots.default));
  }
});
const { passive } = listenOpts;
const __nuxt_component_1 = createComponent({
  name: "QParallax",
  props: {
    src: String,
    height: {
      type: Number,
      default: 500
    },
    speed: {
      type: Number,
      default: 1,
      validator: (v) => v >= 0 && v <= 1
    },
    scrollTarget: scrollTargetProp,
    onScroll: Function
  },
  setup(props, { slots, emit }) {
    const percentScrolled = ref(0);
    const rootRef = ref(null);
    const mediaParentRef = ref(null);
    const mediaRef = ref(null);
    watch(() => props.height, () => {
    });
    watch(() => props.scrollTarget, () => {
    });
    return () => {
      return h("div", {
        ref: rootRef,
        class: "q-parallax",
        style: { height: `${props.height}px` }
      }, [
        h("div", {
          ref: mediaParentRef,
          class: "q-parallax__media absolute-full"
        }, slots.media !== void 0 ? slots.media() : [
          h("img", {
            ref: mediaRef,
            src: props.src
          })
        ]),
        h(
          "div",
          { class: "q-parallax__content absolute-full column flex-center" },
          slots.content !== void 0 ? slots.content({ percentScrolled: percentScrolled.value }) : hSlot(slots.default)
        )
      ]);
    };
  }
});
const ionLogoDiscord = "M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19zM212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z|0 0 512 512";
const ionLogoInstagram = "M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32zM377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z|0 0 512 512";
const ionLogoX = "M9.333 6.929L14.546 1H13.31L8.783 6.147 5.169 1H1l5.466 7.783L1 15h1.235l4.779-5.436L10.83 15H15L9.333 6.929zM7.641 8.852l-.554-.776L2.68 1.911h1.898l3.557 4.977.552.776 4.623 6.47h-1.897L7.641 8.851z@@fill:currentColor;|0 0 16 16";
const ionLogoYoutube = "M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z|0 0 512 512";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "miyavi",
  __ssrInlineRender: true,
  setup(__props) {
    const generateImgPath = (fileName) => {
      return new URL(`../assets/movie/${fileName}.mp4`, globalThis._importMeta_.url).href;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_btn = __nuxt_component_1$1;
      const _component_q_parallax = __nuxt_component_1;
      const _component_q_icon = __nuxt_component_2$1;
      const _component_q_card = __nuxt_component_2;
      const _component_q_img = __nuxt_component_4;
      const _component_q_card_section = __nuxt_component_3;
      const _component_q_list = __nuxt_component_6;
      const _component_q_item = __nuxt_component_7;
      const _component_q_item_section = __nuxt_component_8;
      const _component_q_item_label = __nuxt_component_9;
      const _component_q_separator = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "background": "black" } }, _attrs))}><div style="${ssrRenderStyle({ "position": "sticky", "top": "0", "z-index": "1" })}"><div class="q-px-md"><div class="row q-gutter-md items-center justify-between"><div><div style="${ssrRenderStyle({ "background": "white" })}"><img width="120px" height="30px" style="${ssrRenderStyle({ "vertical-align": "bottom" })}" src="https://japan.miyavi.com/static/fcopen/contents/logo_image/596/44a399764060c602e0a8a3c34697cf6c.png"></div></div><div class="row">`);
      _push(ssrRenderComponent(_component_q_btn, {
        flat: "",
        style: { "color": "white" },
        label: "Fuchsia Flat"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        flat: "",
        style: { "color": "white" },
        label: "Fuchsia Flat"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        flat: "",
        style: { "color": "white" },
        label: "Fuchsia Flat"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        flat: "",
        style: { "color": "white" },
        label: "Fuchsia Flat"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        flat: "",
        style: { "color": "white" },
        label: "Fuchsia Flat"
      }, null, _parent));
      _push(`</div></div></div></div><div class="row justify-between">`);
      _push(ssrRenderComponent(_component_q_parallax, { height: 800 }, {
        media: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="https://ogre.natalie.mu/media/news/music/2024/0809/MIYAVI_art202408.jpg?imwidth=750&amp;imdensity=1"${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: "https://ogre.natalie.mu/media/news/music/2024/0809/MIYAVI_art202408.jpg?imwidth=750&imdensity=1" })
            ];
          }
        }),
        content: withCtx((scope, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute column items-center" style="${ssrRenderStyle({
              opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
              top: scope.percentScrolled * 60 + "%",
              left: 0,
              right: 0
            })}"${_scopeId}><div class="text-h1 text-white text-center"${_scopeId}>MIYAVI</div><div class="text-h6 text-grey-3 text-center"${_scopeId}> NOW ON SALE </div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "absolute column items-center",
                style: {
                  opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
                  top: scope.percentScrolled * 60 + "%",
                  left: 0,
                  right: 0
                }
              }, [
                createVNode("div", { class: "text-h1 text-white text-center" }, "MIYAVI"),
                createVNode("div", { class: "text-h6 text-grey-3 text-center" }, " NOW ON SALE ")
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="q-pa-md row items-start q-gutter-md justify-center">`);
      _push(ssrRenderComponent(_component_q_icon, {
        size: "38px",
        class: "text-white",
        name: unref(ionLogoYoutube)
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_icon, {
        size: "38px",
        class: "text-white",
        name: unref(ionLogoDiscord)
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_icon, {
        size: "38px",
        class: "text-white",
        name: unref(ionLogoX)
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_icon, {
        size: "38px",
        class: "text-white",
        name: unref(ionLogoInstagram)
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_icon, {
        size: "38px",
        class: "text-white",
        name: unref(ionLogoX)
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_icon, {
        size: "38px",
        class: "text-white",
        name: unref(ionLogoX)
      }, null, _parent));
      _push(`</div><div class="q-ma-md"><div class="q-pa-md row items-start q-gutter-md justify-center">`);
      _push(ssrRenderComponent(_component_q_card, {
        style: { "width": "300px", "max-width": "300px", "background": "black" },
        dark: "",
        class: "my-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_img, {
              style: { "max-width": "300px", "height": "150px" },
              fit: "cover",
              src: "https://japan.miyavi.com/static/fcopen/fanplakit/artist/miyavi_A7w9XvkS/img/logo--fcA7w9.png"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_card_section, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subtitle2"${_scopeId2}>FAN CLUB\u3000\u2192</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-subtitle2" }, "FAN CLUB\u3000\u2192")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_img, {
                style: { "max-width": "300px", "height": "150px" },
                fit: "cover",
                src: "https://japan.miyavi.com/static/fcopen/fanplakit/artist/miyavi_A7w9XvkS/img/logo--fcA7w9.png"
              }),
              createVNode(_component_q_card_section, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle2" }, "FAN CLUB\u3000\u2192")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_q_card, {
        style: { "width": "300px", "max-width": "300px", "background": "black" },
        dark: "",
        class: "my-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_img, {
              style: { "max-width": "300px", "height": "150px" },
              fit: "cover",
              src: "https://d1rjcmiyngzjnh.cloudfront.net/prod/public/fcopen/contents/banner/d833c631f284b281bc432c89bf8a78e0.jpeg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_card_section, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subtitle2"${_scopeId2}>ONLINE STORE\u3000\u2192</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-subtitle2" }, "ONLINE STORE\u3000\u2192")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_img, {
                style: { "max-width": "300px", "height": "150px" },
                fit: "cover",
                src: "https://d1rjcmiyngzjnh.cloudfront.net/prod/public/fcopen/contents/banner/d833c631f284b281bc432c89bf8a78e0.jpeg"
              }),
              createVNode(_component_q_card_section, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle2" }, "ONLINE STORE\u3000\u2192")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_q_card, {
        style: { "width": "300px", "max-width": "300px", "background": "black" },
        dark: "",
        class: "my-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_img, {
              style: { "max-width": "300px", "height": "150px" },
              fit: "cover",
              src: "https://miyavisake.jp/img/index_gallery02.jpg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_card_section, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subtitle2"${_scopeId2}>MIYAVI SAKE\u3000\u2192</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-subtitle2" }, "MIYAVI SAKE\u3000\u2192")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_img, {
                style: { "max-width": "300px", "height": "150px" },
                fit: "cover",
                src: "https://miyavisake.jp/img/index_gallery02.jpg"
              }),
              createVNode(_component_q_card_section, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle2" }, "MIYAVI SAKE\u3000\u2192")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_q_card, {
        style: { "width": "300px", "max-width": "300px", "background": "black" },
        dark: "",
        class: "my-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_img, {
              style: { "max-width": "300px", "height": "150px" },
              fit: "cover",
              src: "https://d1rjcmiyngzjnh.cloudfront.net/prod/public/fcopen/contents/banner/414d07d971a789102ab09e4c4fa336f6.jpeg"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_card_section, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subtitle2"${_scopeId2}>bubble\u3000\u2192</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-subtitle2" }, "bubble\u3000\u2192")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_img, {
                style: { "max-width": "300px", "height": "150px" },
                fit: "cover",
                src: "https://d1rjcmiyngzjnh.cloudfront.net/prod/public/fcopen/contents/banner/414d07d971a789102ab09e4c4fa336f6.jpeg"
              }),
              createVNode(_component_q_card_section, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle2" }, "bubble\u3000\u2192")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="q-py-xl"><div class="text-white text-h2 text-center q-mb-lg">MOVIE</div>`);
      _push(ssrRenderComponent(_component_q_parallax, { height: 600 }, {
        media: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<video width="100%" poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop muted${_scopeId}><source type="video/mp4"${ssrRenderAttr("src", generateImgPath("video"))}${_scopeId}></video>`);
          } else {
            return [
              createVNode("video", {
                width: "100%",
                poster: "https://cdn.quasar.dev/img/polina.jpg",
                autoplay: "",
                loop: "",
                muted: ""
              }, [
                createVNode("source", {
                  type: "video/mp4",
                  src: generateImgPath("video")
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="q-pa-md row items-start q-gutter-md justify-center"><!--[-->`);
      ssrRenderList(8, (item) => {
        _push(ssrRenderComponent(_component_q_card, {
          style: { "width": "300px", "max-width": "300px", "background": "black" },
          dark: "",
          class: "my-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_q_img, {
                style: { "max-width": "300px", "height": "150px" },
                fit: "cover",
                src: "https://d1rjcmiyngzjnh.cloudfront.net/prod/movie/thumbnail/1000000/596/44e6aa80cfeef7bc67620654aaf1a459104913ce82d9c01756447657f95e917e_t.jpeg"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_q_card_section, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-subtitle2 text-grey-7"${_scopeId2}>2022/1/2</div><div class="text-subtitle2"${_scopeId2}>FC\u9650\u5B9A\u751F\u914D\u4FE1#13</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-subtitle2 text-grey-7" }, "2022/1/2"),
                      createVNode("div", { class: "text-subtitle2" }, "FC\u9650\u5B9A\u751F\u914D\u4FE1#13")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_q_img, {
                  style: { "max-width": "300px", "height": "150px" },
                  fit: "cover",
                  src: "https://d1rjcmiyngzjnh.cloudfront.net/prod/movie/thumbnail/1000000/596/44e6aa80cfeef7bc67620654aaf1a459104913ce82d9c01756447657f95e917e_t.jpeg"
                }),
                createVNode(_component_q_card_section, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-subtitle2 text-grey-7" }, "2022/1/2"),
                    createVNode("div", { class: "text-subtitle2" }, "FC\u9650\u5B9A\u751F\u914D\u4FE1#13")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="q-py-xl"><div class="text-white text-h2 text-center q-mb-lg">NEWS</div>`);
      _push(ssrRenderComponent(_component_q_list, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_item_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`2022/12/12`);
                            } else {
                              return [
                                createTextVNode("2022/12/12")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u306E\u304A\u77E5\u3089\u305B`);
                            } else {
                              return [
                                createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u306E\u304A\u77E5\u3089\u305B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_item_label, {
                            class: "text-grey-7",
                            caption: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("2022/12/12")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_label, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u306E\u304A\u77E5\u3089\u305B")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_item_section, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("2022/12/12")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u306E\u304A\u77E5\u3089\u305B")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_separator, {
              spaced: "",
              inset: "",
              dark: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_item_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`2022/12/12`);
                            } else {
                              return [
                                createTextVNode("2022/12/12")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u30D7\u30EC\u30BC\u30F3\u30C8\u4F01\u753B\u306E\u304A\u77E5\u3089\u305B`);
                            } else {
                              return [
                                createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u30D7\u30EC\u30BC\u30F3\u30C8\u4F01\u753B\u306E\u304A\u77E5\u3089\u305B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_item_label, {
                            class: "text-grey-7",
                            caption: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("2022/12/12")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_label, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u30D7\u30EC\u30BC\u30F3\u30C8\u4F01\u753B\u306E\u304A\u77E5\u3089\u305B")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_item_section, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("2022/12/12")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u30D7\u30EC\u30BC\u30F3\u30C8\u4F01\u753B\u306E\u304A\u77E5\u3089\u305B")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_separator, {
              spaced: "",
              inset: "",
              dark: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_item_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`2022/12/12`);
                            } else {
                              return [
                                createTextVNode("2022/12/12")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`7/25(\u91D1)\u958B\u50AC\u300CFUJI ROCK FESTIVAL &#39;25\u300D\u306B\u51FA\u6F14\u6C7A\u5B9A\uFF01`);
                            } else {
                              return [
                                createTextVNode("7/25(\u91D1)\u958B\u50AC\u300CFUJI ROCK FESTIVAL '25\u300D\u306B\u51FA\u6F14\u6C7A\u5B9A\uFF01")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_item_label, {
                            class: "text-grey-7",
                            caption: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("2022/12/12")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_label, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("7/25(\u91D1)\u958B\u50AC\u300CFUJI ROCK FESTIVAL '25\u300D\u306B\u51FA\u6F14\u6C7A\u5B9A\uFF01")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_item_section, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("2022/12/12")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("7/25(\u91D1)\u958B\u50AC\u300CFUJI ROCK FESTIVAL '25\u300D\u306B\u51FA\u6F14\u6C7A\u5B9A\uFF01")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_separator, {
              spaced: "",
              inset: "",
              dark: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_item_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`2022/12/12`);
                            } else {
                              return [
                                createTextVNode("2022/12/12")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`MIYAVI\xD7\u30C7\u30B8\u30EA\u30A2\u30C8\u30EC\u30AB \u7B2C1\u5F3E\u30EA\u30EA\u30FC\u30B9\uFF01`);
                            } else {
                              return [
                                createTextVNode("MIYAVI\xD7\u30C7\u30B8\u30EA\u30A2\u30C8\u30EC\u30AB \u7B2C1\u5F3E\u30EA\u30EA\u30FC\u30B9\uFF01")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_item_label, {
                            class: "text-grey-7",
                            caption: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("2022/12/12")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_label, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("MIYAVI\xD7\u30C7\u30B8\u30EA\u30A2\u30C8\u30EC\u30AB \u7B2C1\u5F3E\u30EA\u30EA\u30FC\u30B9\uFF01")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_item_section, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("2022/12/12")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("MIYAVI\xD7\u30C7\u30B8\u30EA\u30A2\u30C8\u30EC\u30AB \u7B2C1\u5F3E\u30EA\u30EA\u30FC\u30B9\uFF01")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_item, null, {
                default: withCtx(() => [
                  createVNode(_component_q_item_section, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-grey-7",
                        caption: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("2022/12/12")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, { class: "text-white" }, {
                        default: withCtx(() => [
                          createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u306E\u304A\u77E5\u3089\u305B")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_q_separator, {
                spaced: "",
                inset: "",
                dark: ""
              }),
              createVNode(_component_q_item, null, {
                default: withCtx(() => [
                  createVNode(_component_q_item_section, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-grey-7",
                        caption: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("2022/12/12")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, { class: "text-white" }, {
                        default: withCtx(() => [
                          createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u30D7\u30EC\u30BC\u30F3\u30C8\u4F01\u753B\u306E\u304A\u77E5\u3089\u305B")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_q_separator, {
                spaced: "",
                inset: "",
                dark: ""
              }),
              createVNode(_component_q_item, null, {
                default: withCtx(() => [
                  createVNode(_component_q_item_section, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-grey-7",
                        caption: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("2022/12/12")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, { class: "text-white" }, {
                        default: withCtx(() => [
                          createTextVNode("7/25(\u91D1)\u958B\u50AC\u300CFUJI ROCK FESTIVAL '25\u300D\u306B\u51FA\u6F14\u6C7A\u5B9A\uFF01")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_q_separator, {
                spaced: "",
                inset: "",
                dark: ""
              }),
              createVNode(_component_q_item, null, {
                default: withCtx(() => [
                  createVNode(_component_q_item_section, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-grey-7",
                        caption: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("2022/12/12")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, { class: "text-white" }, {
                        default: withCtx(() => [
                          createTextVNode("MIYAVI\xD7\u30C7\u30B8\u30EA\u30A2\u30C8\u30EC\u30AB \u7B2C1\u5F3E\u30EA\u30EA\u30FC\u30B9\uFF01")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="q-py-xl"><div class="text-white text-h2 text-center q-mb-lg">BLOG</div>`);
      _push(ssrRenderComponent(_component_q_list, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_item_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`2022/12/12`);
                            } else {
                              return [
                                createTextVNode("2022/12/12")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u306E\u304A\u77E5\u3089\u305B`);
                            } else {
                              return [
                                createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u306E\u304A\u77E5\u3089\u305B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_item_label, {
                            class: "text-grey-7",
                            caption: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("2022/12/12")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_label, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u306E\u304A\u77E5\u3089\u305B")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_item_section, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("2022/12/12")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u306E\u304A\u77E5\u3089\u305B")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_separator, {
              spaced: "",
              inset: "",
              dark: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_item_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`2022/12/12`);
                            } else {
                              return [
                                createTextVNode("2022/12/12")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u30D7\u30EC\u30BC\u30F3\u30C8\u4F01\u753B\u306E\u304A\u77E5\u3089\u305B`);
                            } else {
                              return [
                                createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u30D7\u30EC\u30BC\u30F3\u30C8\u4F01\u753B\u306E\u304A\u77E5\u3089\u305B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_item_label, {
                            class: "text-grey-7",
                            caption: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("2022/12/12")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_label, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u30D7\u30EC\u30BC\u30F3\u30C8\u4F01\u753B\u306E\u304A\u77E5\u3089\u305B")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_item_section, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("2022/12/12")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u30D7\u30EC\u30BC\u30F3\u30C8\u4F01\u753B\u306E\u304A\u77E5\u3089\u305B")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_separator, {
              spaced: "",
              inset: "",
              dark: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_item_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`2022/12/12`);
                            } else {
                              return [
                                createTextVNode("2022/12/12")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`7/25(\u91D1)\u958B\u50AC\u300CFUJI ROCK FESTIVAL &#39;25\u300D\u306B\u51FA\u6F14\u6C7A\u5B9A\uFF01`);
                            } else {
                              return [
                                createTextVNode("7/25(\u91D1)\u958B\u50AC\u300CFUJI ROCK FESTIVAL '25\u300D\u306B\u51FA\u6F14\u6C7A\u5B9A\uFF01")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_item_label, {
                            class: "text-grey-7",
                            caption: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("2022/12/12")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_label, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("7/25(\u91D1)\u958B\u50AC\u300CFUJI ROCK FESTIVAL '25\u300D\u306B\u51FA\u6F14\u6C7A\u5B9A\uFF01")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_item_section, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("2022/12/12")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("7/25(\u91D1)\u958B\u50AC\u300CFUJI ROCK FESTIVAL '25\u300D\u306B\u51FA\u6F14\u6C7A\u5B9A\uFF01")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_separator, {
              spaced: "",
              inset: "",
              dark: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_item_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`2022/12/12`);
                            } else {
                              return [
                                createTextVNode("2022/12/12")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`MIYAVI\xD7\u30C7\u30B8\u30EA\u30A2\u30C8\u30EC\u30AB \u7B2C1\u5F3E\u30EA\u30EA\u30FC\u30B9\uFF01`);
                            } else {
                              return [
                                createTextVNode("MIYAVI\xD7\u30C7\u30B8\u30EA\u30A2\u30C8\u30EC\u30AB \u7B2C1\u5F3E\u30EA\u30EA\u30FC\u30B9\uFF01")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_item_label, {
                            class: "text-grey-7",
                            caption: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("2022/12/12")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_label, { class: "text-white" }, {
                            default: withCtx(() => [
                              createTextVNode("MIYAVI\xD7\u30C7\u30B8\u30EA\u30A2\u30C8\u30EC\u30AB \u7B2C1\u5F3E\u30EA\u30EA\u30FC\u30B9\uFF01")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_item_section, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_item_label, {
                          class: "text-grey-7",
                          caption: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("2022/12/12")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_item_label, { class: "text-white" }, {
                          default: withCtx(() => [
                            createTextVNode("MIYAVI\xD7\u30C7\u30B8\u30EA\u30A2\u30C8\u30EC\u30AB \u7B2C1\u5F3E\u30EA\u30EA\u30FC\u30B9\uFF01")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_item, null, {
                default: withCtx(() => [
                  createVNode(_component_q_item_section, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-grey-7",
                        caption: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("2022/12/12")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, { class: "text-white" }, {
                        default: withCtx(() => [
                          createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u306E\u304A\u77E5\u3089\u305B")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_q_separator, {
                spaced: "",
                inset: "",
                dark: ""
              }),
              createVNode(_component_q_item, null, {
                default: withCtx(() => [
                  createVNode(_component_q_item_section, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-grey-7",
                        caption: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("2022/12/12")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, { class: "text-white" }, {
                        default: withCtx(() => [
                          createTextVNode("\u7B2C13\u56DE MIYAVI FC\u9650\u5B9A \u751F\u914D\u4FE1\u30D7\u30EC\u30BC\u30F3\u30C8\u4F01\u753B\u306E\u304A\u77E5\u3089\u305B")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_q_separator, {
                spaced: "",
                inset: "",
                dark: ""
              }),
              createVNode(_component_q_item, null, {
                default: withCtx(() => [
                  createVNode(_component_q_item_section, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-grey-7",
                        caption: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("2022/12/12")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, { class: "text-white" }, {
                        default: withCtx(() => [
                          createTextVNode("7/25(\u91D1)\u958B\u50AC\u300CFUJI ROCK FESTIVAL '25\u300D\u306B\u51FA\u6F14\u6C7A\u5B9A\uFF01")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_q_separator, {
                spaced: "",
                inset: "",
                dark: ""
              }),
              createVNode(_component_q_item, null, {
                default: withCtx(() => [
                  createVNode(_component_q_item_section, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, {
                        class: "text-grey-7",
                        caption: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("2022/12/12")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, { class: "text-white" }, {
                        default: withCtx(() => [
                          createTextVNode("MIYAVI\xD7\u30C7\u30B8\u30EA\u30A2\u30C8\u30EC\u30AB \u7B2C1\u5F3E\u30EA\u30EA\u30FC\u30B9\uFF01")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/miyavi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=miyavi-B5h02bEf.mjs.map
