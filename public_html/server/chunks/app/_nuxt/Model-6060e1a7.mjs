import { computed, unref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/vue';

const _sfc_main = {
  __name: "Model",
  __ssrInlineRender: true,
  props: {
    show: Boolean,
    title: String,
    para: String,
    error: Boolean
  },
  emits: ["update:show"],
  setup(__props, { emit: emits }) {
    const props = __props;
    function closeModal() {
      emits("update:show", false);
    }
    const iconStatus = computed(() => {
      return props.error ? "warning" : "check";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        appear: "",
        show: __props.show,
        as: "template"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              onClose: closeModal,
              class: "relative z-30"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-black bg-opacity-25"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: ["text-lg font-medium leading-6 text-gray-900 font-montserrat border-b-2 py-1", { "text-red-600": __props.error }]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<i class="${ssrRenderClass([!__props.error ? "bg-blue-100 text-blue-500" : "text-red-500", "material-symbols-outlined rounded-full p-1"])}"${_scopeId5}>${ssrInterpolate(unref(iconStatus))}</i> ${ssrInterpolate(__props.title)}`);
                                  } else {
                                    return [
                                      createVNode("i", {
                                        class: ["material-symbols-outlined rounded-full p-1", !__props.error ? "bg-blue-100 text-blue-500" : "text-red-500"]
                                      }, toDisplayString(unref(iconStatus)), 3),
                                      createTextVNode(" " + toDisplayString(__props.title), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="mt-2"${_scopeId4}><p class="text-sm text-gray-500 font-raleway"${_scopeId4}>${ssrInterpolate(__props.para)}</p></div><div class="mt-4 text-end"${_scopeId4}><button type="button" class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"${_scopeId4}> Close </button></div>`);
                            } else {
                              return [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: ["text-lg font-medium leading-6 text-gray-900 font-montserrat border-b-2 py-1", { "text-red-600": __props.error }]
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", {
                                      class: ["material-symbols-outlined rounded-full p-1", !__props.error ? "bg-blue-100 text-blue-500" : "text-red-500"]
                                    }, toDisplayString(unref(iconStatus)), 3),
                                    createTextVNode(" " + toDisplayString(__props.title), 1)
                                  ]),
                                  _: 1
                                }, 8, ["class"]),
                                createVNode("div", { class: "mt-2" }, [
                                  createVNode("p", { class: "text-sm text-gray-500 font-raleway" }, toDisplayString(__props.para), 1)
                                ]),
                                createVNode("div", { class: "mt-4 text-end" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                    onClick: closeModal
                                  }, " Close ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogTitle), {
                                as: "h3",
                                class: ["text-lg font-medium leading-6 text-gray-900 font-montserrat border-b-2 py-1", { "text-red-600": __props.error }]
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", {
                                    class: ["material-symbols-outlined rounded-full p-1", !__props.error ? "bg-blue-100 text-blue-500" : "text-red-500"]
                                  }, toDisplayString(unref(iconStatus)), 3),
                                  createTextVNode(" " + toDisplayString(__props.title), 1)
                                ]),
                                _: 1
                              }, 8, ["class"]),
                              createVNode("div", { class: "mt-2" }, [
                                createVNode("p", { class: "text-sm text-gray-500 font-raleway" }, toDisplayString(__props.para), 1)
                              ]),
                              createVNode("div", { class: "mt-4 text-end" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                  onClick: closeModal
                                }, " Close ")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                      createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                              default: withCtx(() => [
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: ["text-lg font-medium leading-6 text-gray-900 font-montserrat border-b-2 py-1", { "text-red-600": __props.error }]
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", {
                                      class: ["material-symbols-outlined rounded-full p-1", !__props.error ? "bg-blue-100 text-blue-500" : "text-red-500"]
                                    }, toDisplayString(unref(iconStatus)), 3),
                                    createTextVNode(" " + toDisplayString(__props.title), 1)
                                  ]),
                                  _: 1
                                }, 8, ["class"]),
                                createVNode("div", { class: "mt-2" }, [
                                  createVNode("p", { class: "text-sm text-gray-500 font-raleway" }, toDisplayString(__props.para), 1)
                                ]),
                                createVNode("div", { class: "mt-4 text-end" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                    onClick: closeModal
                                  }, " Close ")
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                as: "div",
                onClose: closeModal,
                class: "relative z-30"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                    createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogTitle), {
                                as: "h3",
                                class: ["text-lg font-medium leading-6 text-gray-900 font-montserrat border-b-2 py-1", { "text-red-600": __props.error }]
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", {
                                    class: ["material-symbols-outlined rounded-full p-1", !__props.error ? "bg-blue-100 text-blue-500" : "text-red-500"]
                                  }, toDisplayString(unref(iconStatus)), 3),
                                  createTextVNode(" " + toDisplayString(__props.title), 1)
                                ]),
                                _: 1
                              }, 8, ["class"]),
                              createVNode("div", { class: "mt-2" }, [
                                createVNode("p", { class: "text-sm text-gray-500 font-raleway" }, toDisplayString(__props.para), 1)
                              ]),
                              createVNode("div", { class: "mt-4 text-end" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                  onClick: closeModal
                                }, " Close ")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Model.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Model-6060e1a7.mjs.map
