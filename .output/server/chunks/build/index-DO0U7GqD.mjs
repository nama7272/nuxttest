import { defineComponent, withAsyncContext, ref, withCtx, unref, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, getCurrentInstance, computed, h, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch, _ as __nuxt_component_4, a as __nuxt_component_6 } from './fetch-rZgmSnzQ.mjs';
import { u as useRouter, e as createComponent } from './server.mjs';
import { _ as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3, d as __nuxt_component_5, u as useDarkProps, e as useDark, h as hSlot } from './QSeparator-2OCLeQZd.mjs';
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

const separatorValues = ["horizontal", "vertical", "cell", "none"];
const __nuxt_component_0 = createComponent({
  name: "QMarkupTable",
  props: {
    ...useDarkProps,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    wrapCells: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (v) => separatorValues.includes(v)
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const classes = computed(
      () => `q-markup-table q-table__container q-table__card q-table--${props.separator}-separator` + (isDark.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.flat === true ? " q-table--flat" : "") + (props.bordered === true ? " q-table--bordered" : "") + (props.square === true ? " q-table--square" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "")
    );
    return () => h("div", {
      class: classes.value
    }, [
      h("table", { class: "q-table" }, hSlot(slots.default))
    ]);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: user } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/user", "$ySyYdPSUiE")), __temp = await __temp, __restore(), __temp);
    console.log(user.value);
    useRouter();
    const post = ref({ name: "", email: "" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_markup_table = __nuxt_component_0;
      const _component_q_btn = __nuxt_component_1;
      const _component_q_card = __nuxt_component_2;
      const _component_q_card_section = __nuxt_component_3;
      const _component_q_input = __nuxt_component_4;
      const _component_q_separator = __nuxt_component_5;
      const _component_q_card_actions = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_q_markup_table, { class: "q-ma-lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-left"${_scopeId}>ID</th><th class="text-right"${_scopeId}>Name</th><th class="text-right"${_scopeId}>EmailAddress</th><th class="text-right"${_scopeId}>\u7DE8\u96C6\u30DC\u30BF\u30F3</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(unref(user), (post2) => {
              _push2(`<tr${_scopeId}><td class="text-left"${_scopeId}>${ssrInterpolate(post2.id)}</td><td class="text-right"${_scopeId}>${ssrInterpolate(post2.name)}</td><td class="text-right"${_scopeId}>${ssrInterpolate(post2.email)}</td><td class="text-right"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_q_btn, {
                to: `/user/${post2.id}/`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u7DE8\u96C6`);
                  } else {
                    return [
                      createTextVNode("\u7DE8\u96C6")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left" }, "ID"),
                  createVNode("th", { class: "text-right" }, "Name"),
                  createVNode("th", { class: "text-right" }, "EmailAddress"),
                  createVNode("th", { class: "text-right" }, "\u7DE8\u96C6\u30DC\u30BF\u30F3")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(user), (post2) => {
                  return openBlock(), createBlock("tr", {
                    key: unref(user).id
                  }, [
                    createVNode("td", { class: "text-left" }, toDisplayString(post2.id), 1),
                    createVNode("td", { class: "text-right" }, toDisplayString(post2.name), 1),
                    createVNode("td", { class: "text-right" }, toDisplayString(post2.email), 1),
                    createVNode("td", { class: "text-right" }, [
                      createVNode(_component_q_btn, {
                        to: `/user/${post2.id}/`
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u7DE8\u96C6")
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form>`);
      _push(ssrRenderComponent(_component_q_card, { class: "q-ma-lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_card_section, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-h6"${_scopeId2}>\u30E6\u30FC\u30B6\u30FC\u767B\u9332</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    id: "name",
                    modelValue: unref(post).name,
                    "onUpdate:modelValue": ($event) => unref(post).name = $event,
                    label: "name"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="q-mt-md"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    id: "email",
                    modelValue: unref(post).email,
                    "onUpdate:modelValue": ($event) => unref(post).email = $event,
                    label: "email"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-h6" }, "\u30E6\u30FC\u30B6\u30FC\u767B\u9332"),
                    createVNode("div", null, [
                      createVNode(_component_q_input, {
                        outlined: "",
                        id: "name",
                        modelValue: unref(post).name,
                        "onUpdate:modelValue": ($event) => unref(post).name = $event,
                        label: "name"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "q-mt-md" }, [
                      createVNode(_component_q_input, {
                        outlined: "",
                        id: "email",
                        modelValue: unref(post).email,
                        "onUpdate:modelValue": ($event) => unref(post).email = $event,
                        label: "email"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_separator, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_card_actions, { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_btn, {
                    flat: "",
                    type: "submit",
                    color: "primary",
                    label: "\u767B\u9332"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_btn, {
                      flat: "",
                      type: "submit",
                      color: "primary",
                      label: "\u767B\u9332"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_card_section, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-h6" }, "\u30E6\u30FC\u30B6\u30FC\u767B\u9332"),
                  createVNode("div", null, [
                    createVNode(_component_q_input, {
                      outlined: "",
                      id: "name",
                      modelValue: unref(post).name,
                      "onUpdate:modelValue": ($event) => unref(post).name = $event,
                      label: "name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "q-mt-md" }, [
                    createVNode(_component_q_input, {
                      outlined: "",
                      id: "email",
                      modelValue: unref(post).email,
                      "onUpdate:modelValue": ($event) => unref(post).email = $event,
                      label: "email"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_q_separator),
              createVNode(_component_q_card_actions, { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(_component_q_btn, {
                    flat: "",
                    type: "submit",
                    color: "primary",
                    label: "\u767B\u9332"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DO0U7GqD.mjs.map
