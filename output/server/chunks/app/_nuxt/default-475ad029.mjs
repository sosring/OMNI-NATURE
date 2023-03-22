import { p as publicAssetsURL } from '../../paths.mjs';
import { g as defineStore, _ as _export_sfc, d as __nuxt_component_0$1, h as useRouter } from '../server.mjs';
import { useSSRContext, ref, onMounted, mergeProps, unref, isRef, computed, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/vue';
import gsap from 'gsap';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';

const _imports_0 = "" + publicAssetsURL("images/Omni-logo.png");
const _sfc_main$4 = {
  __name: "TheNav",
  __ssrInlineRender: true,
  props: {
    showSideNav: {
      type: Boolean
    }
  },
  emits: ["update:showSideNav"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const routes = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Campaign", path: "/campaign" },
      { label: "Gallery", path: "/gallery" },
      { label: "Contact", path: "/contact" }
    ];
    const mobileBtn = computed(() => {
      return props.showSideNav ? "Close" : "Menu";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed right-0 top-0 left-0 backdrop-blur z-30 shadow" }, _attrs))} data-v-20eddad9><nav class="container mx-auto flex justify-between pr-2 sm:px-2" data-v-20eddad9>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "flex items-end bg-orange-200 px-4 py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="h-20 sm:h-24 object-cover" alt="ONC FOUNDATION LOGO" data-v-20eddad9${_scopeId}><h1 class="hidden sm:block sm:py-3 text-gray-700 text-xl lg:text-2xl font-oswald" data-v-20eddad9${_scopeId}> OMNI NATURE CARE <br data-v-20eddad9${_scopeId}> FOUNDATION </h1>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "h-20 sm:h-24 object-cover",
                alt: "ONC FOUNDATION LOGO"
              }),
              createVNode("h1", { class: "hidden sm:block sm:py-3 text-gray-700 text-xl lg:text-2xl font-oswald" }, [
                createTextVNode(" OMNI NATURE CARE "),
                createVNode("br"),
                createTextVNode(" FOUNDATION ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col items-end justify-center lg:hidden gap-2" data-v-20eddad9><button type="button" class="blue-btn" data-v-20eddad9> JOIN US </button><button type="button" class="material-symbols-outlined" data-v-20eddad9>${ssrInterpolate(unref(mobileBtn))}</button></div><div class="hidden lg:grid text-xl p-2" data-v-20eddad9><div class="flex justify-end items-end gap-3 text-base" data-v-20eddad9><button type="button" class="blue-btn" data-v-20eddad9> JOIN US </button></div><ul class="flex gap-4 items-end" data-v-20eddad9><!--[-->`);
      ssrRenderList(routes, (route) => {
        _push(`<li data-v-20eddad9>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: route.path,
          class: "link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(route.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(route.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></nav></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-20eddad9"]]);
const _sfc_main$3 = {
  __name: "TheSidebar",
  __ssrInlineRender: true,
  props: {
    showSideNav: {
      type: Boolean
    }
  },
  emits: ["update:showSideNav"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const routes = [
      { icon: "home", label: "Home", path: "/" },
      { icon: "docs_apps_script", label: "About", path: "/about" },
      { icon: "compost", label: "Campign", path: "/campaign" },
      { icon: "gallery_thumbnail", label: "Gallery", path: "/gallery" },
      { icon: "call", label: "Contact us", path: "/contact" },
      { icon: "join", label: "Join us", path: "/join" }
      //{ icon: 'currency_rupee', label: 'Donate', path: '/donate' },
    ];
    computed(() => {
      return props.showSideNav ? "Close" : "Menu";
    });
    const sidebarRef = ref("");
    const sidebarMounted = ref(null);
    const animationType = computed(() => {
      return sidebarMounted.value ? "sidebar-leave" : "sidebar-enter";
    });
    const closeSidenav = () => {
      sidebarMounted.value = true;
      setTimeout(() => {
        emits("update:showSideNav", false);
        sidebarMounted.value = false;
      }, 500);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      if (__props.showSideNav) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["fixed bg-primary z-40 rounded h-screen w-screen px-2 py-12 block md:hidden", unref(animationType)],
          ref_key: "sidebarRef",
          ref: sidebarRef
        }, _attrs))} data-v-25bd7914><div class="flex justify-between items-end border-b-4 border-secoundary" data-v-25bd7914>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/",
          onClick: closeSidenav,
          class: "flex justify-between items-end py-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex items-end" data-v-25bd7914${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="h-20 sm:h-28 object-cover" alt="omni care logo" data-v-25bd7914${_scopeId}><h1 class="text-title text-xl sm:text-2xl font-oswald" data-v-25bd7914${_scopeId}> OMNI NATURE <br data-v-25bd7914${_scopeId}> CARE FOUNDATION </h1></span>`);
            } else {
              return [
                createVNode("span", { class: "flex items-end" }, [
                  createVNode("img", {
                    src: _imports_0,
                    class: "h-20 sm:h-28 object-cover",
                    alt: "omni care logo"
                  }),
                  createVNode("h1", { class: "text-title text-xl sm:text-2xl font-oswald" }, [
                    createTextVNode(" OMNI NATURE "),
                    createVNode("br"),
                    createTextVNode(" CARE FOUNDATION ")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="material-symbols-outlined" data-v-25bd7914> close </button></div><div class="px-3 py-4" data-v-25bd7914><ul class="p-2 grid justify-end" data-v-25bd7914><!--[-->`);
        ssrRenderList(routes, (route) => {
          _push(`<li data-v-25bd7914>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: route.path,
            onClick: closeSidenav,
            class: "link flex items-end gap-4 my-2 sm:text-xl"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="material-symbols-outlined" data-v-25bd7914${_scopeId}>${ssrInterpolate(route.icon)}</i><p data-v-25bd7914${_scopeId}>${ssrInterpolate(route.label)}</p>`);
              } else {
                return [
                  createVNode("i", { class: "material-symbols-outlined" }, toDisplayString(route.icon), 1),
                  createVNode("p", null, toDisplayString(route.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-25bd7914"]]);
const _sfc_main$2 = {
  __name: "PopupModel",
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
    function joinAction() {
      useRouter().push("/join");
      closeModal();
    }
    computed(() => {
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
              class: "relative z-10"
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
                        _push4(`<div class="fixed inset-0 bg-black bg-opacity-25" data-v-0d3cf3d0${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 overflow-y-auto" data-v-0d3cf3d0${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center" data-v-0d3cf3d0${_scopeId2}>`);
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
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "model w-full max-w-md md:max-w-xl lg:h-auto transform overflow-hidden rounded-2xl bg-primary text-left align-middle shadow-xl transition-all text-gray-100 font-bold font-montserrat py-6 px-4 md:p-8 relative" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button class="material-symbols-outlined absolute right-4 top-4/5" data-v-0d3cf3d0${_scopeId4}> close </button>`);
                              _push5(ssrRenderComponent(unref(DialogTitle), {
                                as: "h3",
                                class: "heading py-1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Hey there! `);
                                  } else {
                                    return [
                                      createTextVNode(" Hey there! ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="mt-2" data-v-0d3cf3d0${_scopeId4}><p class="para text-sm leading-snug sm:w-4/4 sm:my-6" data-v-0d3cf3d0${_scopeId4}> Thanks for stopping by! Want to make a positive impact in the world? Consider volunteering with us! </p></div><div class="mt-4 text-end" data-v-0d3cf3d0${_scopeId4}><button type="button" class="orange-btn shadow-lg rounded-md text-sm sm:text-lg py-3 sm:px-6" data-v-0d3cf3d0${_scopeId4}> Take Action Now </button></div>`);
                            } else {
                              return [
                                createVNode("button", {
                                  onClick: closeModal,
                                  class: "material-symbols-outlined absolute right-4 top-4/5"
                                }, " close "),
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "heading py-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Hey there! ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "mt-2" }, [
                                  createVNode("p", { class: "para text-sm leading-snug sm:w-4/4 sm:my-6" }, " Thanks for stopping by! Want to make a positive impact in the world? Consider volunteering with us! ")
                                ]),
                                createVNode("div", { class: "mt-4 text-end" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "orange-btn shadow-lg rounded-md text-sm sm:text-lg py-3 sm:px-6",
                                    onClick: joinAction
                                  }, " Take Action Now ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "model w-full max-w-md md:max-w-xl lg:h-auto transform overflow-hidden rounded-2xl bg-primary text-left align-middle shadow-xl transition-all text-gray-100 font-bold font-montserrat py-6 px-4 md:p-8 relative" }, {
                            default: withCtx(() => [
                              createVNode("button", {
                                onClick: closeModal,
                                class: "material-symbols-outlined absolute right-4 top-4/5"
                              }, " close "),
                              createVNode(unref(DialogTitle), {
                                as: "h3",
                                class: "heading py-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Hey there! ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "mt-2" }, [
                                createVNode("p", { class: "para text-sm leading-snug sm:w-4/4 sm:my-6" }, " Thanks for stopping by! Want to make a positive impact in the world? Consider volunteering with us! ")
                              ]),
                              createVNode("div", { class: "mt-4 text-end" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "orange-btn shadow-lg rounded-md text-sm sm:text-lg py-3 sm:px-6",
                                  onClick: joinAction
                                }, " Take Action Now ")
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
                            createVNode(unref(DialogPanel), { class: "model w-full max-w-md md:max-w-xl lg:h-auto transform overflow-hidden rounded-2xl bg-primary text-left align-middle shadow-xl transition-all text-gray-100 font-bold font-montserrat py-6 px-4 md:p-8 relative" }, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  onClick: closeModal,
                                  class: "material-symbols-outlined absolute right-4 top-4/5"
                                }, " close "),
                                createVNode(unref(DialogTitle), {
                                  as: "h3",
                                  class: "heading py-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Hey there! ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "mt-2" }, [
                                  createVNode("p", { class: "para text-sm leading-snug sm:w-4/4 sm:my-6" }, " Thanks for stopping by! Want to make a positive impact in the world? Consider volunteering with us! ")
                                ]),
                                createVNode("div", { class: "mt-4 text-end" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "orange-btn shadow-lg rounded-md text-sm sm:text-lg py-3 sm:px-6",
                                    onClick: joinAction
                                  }, " Take Action Now ")
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
                class: "relative z-10"
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
                          createVNode(unref(DialogPanel), { class: "model w-full max-w-md md:max-w-xl lg:h-auto transform overflow-hidden rounded-2xl bg-primary text-left align-middle shadow-xl transition-all text-gray-100 font-bold font-montserrat py-6 px-4 md:p-8 relative" }, {
                            default: withCtx(() => [
                              createVNode("button", {
                                onClick: closeModal,
                                class: "material-symbols-outlined absolute right-4 top-4/5"
                              }, " close "),
                              createVNode(unref(DialogTitle), {
                                as: "h3",
                                class: "heading py-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Hey there! ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "mt-2" }, [
                                createVNode("p", { class: "para text-sm leading-snug sm:w-4/4 sm:my-6" }, " Thanks for stopping by! Want to make a positive impact in the world? Consider volunteering with us! ")
                              ]),
                              createVNode("div", { class: "mt-4 text-end" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "orange-btn shadow-lg rounded-md text-sm sm:text-lg py-3 sm:px-6",
                                  onClick: joinAction
                                }, " Take Action Now ")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopupModel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0d3cf3d0"]]);
const useDetailStore = defineStore("useDetails", {
  state: () => ({
    email: "omninaturecarefoundation @gmail.com",
    num1: "9394494938",
    num2: "9101576002",
    location: "HOUSE NO-11.BORA BHAWAN. RAJBARI PATH. GANESHGURI GUWAHATI -781005,ASSAM",
    map: "https://www.google.com/maps/place/NEOPHILIC+SOLUTIONS+OPC+PRIVATE+LIMITED/@26.151502,91.7803747,17z/data=!3m1!4b1!4m5!3m4!1s0x375a593d9546d6e1:0xa5180beb2533bdc8!8m2!3d26.1514972!4d91.7825634",
    facebook: "https://www.facebook.com/profile.php?id=100090751036408",
    instagram: "https://www.instagram.com/omni_nature_care/",
    dev: "https://www.linkedin.com/in/sosring-langthasa-2975b0241/"
  })
});
const _sfc_main$1 = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const useDetails = useDetailStore();
    const navs = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Campaign", path: "/campaign" },
      { label: "Gallery", path: "/gallery" },
      { label: "Contact", path: "/contact" },
      //{ label: 'Donate', path: '/donate' },
      { label: "Join us", path: "/join" }
    ];
    const legals = [
      { label: "Privacy Policy", path: "/policy" },
      { label: "Terms & Conditions", path: "/terms" }
    ];
    const socials = [
      { icon: "fa-facebook", path: useDetails.facebook },
      { icon: "fa-instagram", path: useDetails.instagram }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-footer" }, _attrs))} data-v-737b356e><div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8" data-v-737b356e><div class="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-3" data-v-737b356e><div data-v-737b356e>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "flex items-end border-b-4 border-secoundary py-1 space-x-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="h-28 w-28 object-cover" alt="omni care logo" data-v-737b356e${_scopeId}><h3 class="py-3 text-title text-xl sm:text-2xl font-oswald" data-v-737b356e${_scopeId}> OMNI NATURE <br data-v-737b356e${_scopeId}> CARE FOUNDATION </h3>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "h-28 w-28 object-cover",
                alt: "omni care logo"
              }),
              createVNode("h3", { class: "py-3 text-title text-xl sm:text-2xl font-oswald" }, [
                createTextVNode(" OMNI NATURE "),
                createVNode("br"),
                createTextVNode(" CARE FOUNDATION ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex mt-8 text-2xl md:text-4xl" data-v-737b356e><a${ssrRenderAttr("href", unref(useDetails).map)} target="_blank" class="address leading-snug font-montserrat font-bold text-title duration-150 md:hover:opacity-75 cursor-pointer" data-v-737b356e>${unref(useDetails).location}</a></div></div><div class="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4 lg:pt-24" data-v-737b356e><div data-v-737b356e><p class="footer-items" data-v-737b356e> Navigation </p><nav class="flex flex-col mt-4 space-y-2" data-v-737b356e><!--[-->`);
      ssrRenderList(navs, (nav) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "footer-links md:hover:opacity-75",
          to: nav.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(nav.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(nav.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div><div data-v-737b356e><p class="footer-items" data-v-737b356e> Contact Us </p><nav class="flex flex-col mt-4 space-y-4 text-sm" data-v-737b356e><a class="footer-links flex gap-2 item-center md:hover:opacity-75"${ssrRenderAttr("href", `mailto:${unref(useDetails).email}`)} data-v-737b356e><i class="material-symbols-outlined" data-v-737b356e> alternate_email </i><p class="text-xs" data-v-737b356e>${unref(useDetails).email}</p></a><div class="footer-links flex gap-2 md:hover:opacity-75" data-v-737b356e><i class="material-symbols-outlined" data-v-737b356e> phone_in_talk </i><div data-v-737b356e><a class="md:hover:opacity-75"${ssrRenderAttr("href", `tel:${unref(useDetails).num1}`)} data-v-737b356e><p data-v-737b356e>${unref(useDetails).num1}</p></a><a class="md:hover:opacity-75"${ssrRenderAttr("href", `tel:${unref(useDetails).num2}`)} data-v-737b356e><p data-v-737b356e>${unref(useDetails).num2}</p></a></div></div></nav></div><div data-v-737b356e><p class="footer-items" data-v-737b356e> Legal </p><nav class="flex flex-col mt-4 space-y-2 text-sm" data-v-737b356e><!--[-->`);
      ssrRenderList(legals, (legal) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "footer-links hover:opacity-75",
          to: legal.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(legal.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(legal.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div><div data-v-737b356e><p class="footer-items" data-v-737b356e> Socials </p><nav class="flex mt-4 gap-2 text-2xl text-title" data-v-737b356e><!--[-->`);
      ssrRenderList(socials, (social) => {
        _push(`<a class="${ssrRenderClass(`md:hover:opacity-75 
             fab ${social.icon} 
             cursor-pointer`)}"${ssrRenderAttr("href", social.path)} target="blank" data-v-737b356e></a>`);
      });
      _push(`<!--]--></nav></div></div></div><p class="mt-8 text-xs text-title" data-v-737b356e> \xA9 2022 OMNI NATURE CARE FOUNDATION </p><span class="text-xs text-gray-700" data-v-737b356e> Made with <i class="fa fa-heart text-red-500" data-v-737b356e></i> by <a class="mt-8 text-orange-500 hover:text-orange-400 font-bold"${ssrRenderAttr("href", unref(useDetails).dev)} target="blank" data-v-737b356e> sosring </a></span></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-737b356e"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const showSideNav = ref(false);
    const popup = ref(false);
    setTimeout(() => {
      popup.value = true;
    }, 1e3);
    onMounted(() => {
      gsap.from(".scroll-to-top", {
        scrollTrigger: {
          trigger: ".scroll-to-top",
          start: "20px 80%",
          end: "=+500",
          scrub: true,
          toggleAction: "restart pause resume none"
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "in"
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheNav = __nuxt_component_0;
      const _component_TheSidebar = __nuxt_component_1;
      const _component_PopupModel = __nuxt_component_2;
      const _component_TheFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))} data-v-0f8b9c4e>`);
      _push(ssrRenderComponent(_component_TheNav, {
        showSideNav: unref(showSideNav),
        "onUpdate:showSideNav": ($event) => isRef(showSideNav) ? showSideNav.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_TheSidebar, {
        showSideNav: unref(showSideNav),
        "onUpdate:showSideNav": ($event) => isRef(showSideNav) ? showSideNav.value = $event : null
      }, null, _parent));
      _push(`<button class="scroll-to-top material-symbols-outlined" data-v-0f8b9c4e> arrow_upward </button>`);
      _push(ssrRenderComponent(_component_PopupModel, {
        show: unref(popup),
        "onUpdate:show": ($event) => isRef(popup) ? popup.value = $event : null
      }, null, _parent));
      _push(`<main class="pt-24 sm:pt-28" data-v-0f8b9c4e>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f8b9c4e"]]);

export { _default as default };
//# sourceMappingURL=default-475ad029.mjs.map
