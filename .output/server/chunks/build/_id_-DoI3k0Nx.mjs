import { defineComponent, withAsyncContext, ref, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { f as useRoute, u as useRouter } from './server.mjs';
import { u as useFetch, _ as __nuxt_component_4, a as __nuxt_component_6 } from './fetch-rZgmSnzQ.mjs';
import { b as __nuxt_component_2, c as __nuxt_component_3, d as __nuxt_component_5, _ as __nuxt_component_1 } from './QSeparator-2OCLeQZd.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const { data: user } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/user/${route.params.id}`, "$NkXAAUCDSV")), __temp = await __temp, __restore(), __temp);
    const post = ref({ name: user.value.name, email: user.value.email });
    async function deletePost() {
      await $fetch(`/api/user/${route.params.id}`, {
        method: "DELETE"
      });
      router.push("/user/");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_card = __nuxt_component_2;
      const _component_q_card_section = __nuxt_component_3;
      const _component_q_input = __nuxt_component_4;
      const _component_q_separator = __nuxt_component_5;
      const _component_q_card_actions = __nuxt_component_6;
      const _component_q_btn = __nuxt_component_1;
      _push(`<!--[--><form>`);
      _push(ssrRenderComponent(_component_q_card, { class: "q-ma-lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_card_section, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-h6"${_scopeId2}>\u30E6\u30FC\u30B6\u30FC\u7DE8\u96C6</div> ${ssrInterpolate(unref(user).id)} <div${_scopeId2}>`);
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
                    createVNode("div", { class: "text-h6" }, "\u30E6\u30FC\u30B6\u30FC\u7DE8\u96C6"),
                    createTextVNode(" " + toDisplayString(unref(user).id) + " ", 1),
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
                    label: "\u66F4\u65B0"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_btn, {
                      flat: "",
                      type: "submit",
                      color: "primary",
                      label: "\u66F4\u65B0"
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
                  createVNode("div", { class: "text-h6" }, "\u30E6\u30FC\u30B6\u30FC\u7DE8\u96C6"),
                  createTextVNode(" " + toDisplayString(unref(user).id) + " ", 1),
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
                    label: "\u66F4\u65B0"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      _push(ssrRenderComponent(_component_q_btn, {
        label: "\u524A\u9664",
        onClick: deletePost
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DoI3k0Nx.mjs.map
