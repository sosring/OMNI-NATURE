import { p as publicAssetsURL } from '../../paths.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Mousewheel } from 'swiper';
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
import 'gsap';
import 'defu';

const _imports_0$2 = "" + publicAssetsURL("images/solar-panels.jpg");
const _imports_1 = "" + publicAssetsURL("images/holding-plant.png");
const _sfc_main$5 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section relative overflow-hidden" }, _attrs))} data-v-c481d4ff><img${ssrRenderAttr("src", _imports_0$2)} alt="solar-panels" class="mix-blend-soft-light blur-sm opacity-40 absolute inset-0 object-cover object-top" data-v-c481d4ff><article class="container mx-auto relative flex py-10 px-4" data-v-c481d4ff><div class="text-wrapper text-title z-10 fond-montserrat py-10 space-y-6 md:space-y-8" data-v-c481d4ff><h2 class="heading text-cyan-900 font-bold" data-v-c481d4ff> Nature&#39;s harmony <br data-v-c481d4ff> for modern sustainability. </h2><p class="tagline" data-v-c481d4ff> Let us unite in creating a world <br data-v-c481d4ff> that works for everyone. </p><button type="button" class="orange-btn shadow-lg rounded-md text-sm sm:text-lg py-3 sm:px-6" data-v-c481d4ff> Take Action Now </button></div><img class="absolute -right-4 sm:right-0 z-0 -bottom-4 sm:bottom-0 h-250 sm:h-350 md:h-450 object-scale-down"${ssrRenderAttr("src", _imports_1)} alt="holding a plant" data-v-c481d4ff></article></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c481d4ff"]]);
const _imports_0$1 = "" + publicAssetsURL("images/four-pillars.png");
const _sfc_main$4 = {
  __name: "AboutSummary",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative grid items-center" }, _attrs))} data-v-be289dd2><article class="text-wrapper container mx-auto h-full text-title py-8 px-4 sm:py-16 md:py-24 z-10 space-y-6 md:space-y-8" data-v-be289dd2><h3 class="heading font-montserrat font-bold" data-v-be289dd2> OMNI NATURE <br data-v-be289dd2> CARE FOUNDATION </h3><p class="tagline font-raleway lg:w-4/5 leading-sung" data-v-be289dd2> The Omni Nature Care Foundation advocates for sustainable living through the use of green energy, recycling waste, and water treatment systems. The foundation emphasizes the need to preserve natural resources while continuing to meet the demands of infrastructure development. Sustainability is crucial for the long-term survival of our ecosystems and animal species, and has benefits such as clean air, reliable resources, and improved water quality. </p><button type="button" class="orange-btn py-3" data-v-be289dd2> KNOW MORE </button></article><img class="z-0 absolute top-0 -right-0 hidden lg:block h-250 sm:h-350"${ssrRenderAttr("src", _imports_0$1)} alt="four pillars of Sustainability" data-v-be289dd2></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/AboutSummary.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-be289dd2"]]);
const _sfc_main$3 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    card: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-md bg-primary overflow-hidden shadow-gray-300 shadow h-[90%]" }, _attrs))}><img class="h-4/5 w-full object-cover"${ssrRenderAttr("src", `/images/${__props.card.img}.jpg`)}${ssrRenderAttr("alt", __props.card.img)}><p class="h-1/5 p-2 font-montserrat font-bold text-xs sm:text-sm text-center text-title flex items-center justify-center">${ssrInterpolate(__props.card.name)}</p></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Card.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "OurCommitment",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      { name: "Sustainable tech promotion", img: "sustainable-tech" },
      { name: "Green energy empowerment and guidance", img: "green-empowerment" },
      { name: "Educate youth on sustainability", img: "educate-youth" },
      { name: "Environmental protection through efficiency", img: "environmental-protection" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Home_Card = _sfc_main$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-e3f3c19c><article class="diagonal container mx-auto text-title py-8 px-4 z-10" data-v-e3f3c19c><h3 class="heading font-montserrat text-gray-50 z-10 font-bold mb-2 sm:mb-8" data-v-e3f3c19c> Our Commitment to <br data-v-e3f3c19c> Improving Society. </h3>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Pagination), unref(Autoplay), unref(Mousewheel)],
        loop: false,
        "slides-per-view": "auto",
        "space-between": 30,
        grabCursor: true,
        mousewheel: true,
        scrollbar: { draggable: true },
        pagination: {
          clickable: true,
          dynamicBullets: true
        },
        autoplay: {
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(cards, (card) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Home_Card, { card }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Home_Card, { card }, null, 8, ["card"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(cards, (card) => {
                return createVNode(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createVNode(_component_Home_Card, { card }, null, 8, ["card"])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/OurCommitment.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e3f3c19c"]]);
const _imports_0 = "" + publicAssetsURL("images/environment-goals.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-450 md:h-650 relative overflow-hidden" }, _attrs))} data-v-8a36be80><article class="h-full container mx-auto relative flex items-center py-8" data-v-8a36be80><div class="text-title z-10 fond-montserrat py-8 px-4" data-v-8a36be80><h3 class="heading sm:w-3/4 font-bold mb-12 md:mb-20" data-v-8a36be80> Join us today and be a part of creating a sustainable world for our future. </h3><button type="button" class="orange-btn rounded-md text-sm md:text-base py-3 sm:px-6" data-v-8a36be80> JOIN US </button></div><img class="absolute bottom-0 -right-0 h-250 sm:h-350"${ssrRenderAttr("src", _imports_0)} alt="environment goals" data-v-8a36be80></article></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/JoinSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8a36be80"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Home_HeroSection = __nuxt_component_0;
  const _component_Home_AboutSummary = __nuxt_component_1;
  const _component_Home_OurCommitment = __nuxt_component_2;
  const _component_Home_JoinSection = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Home_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_Home_AboutSummary, null, null, _parent));
  _push(ssrRenderComponent(_component_Home_OurCommitment, null, null, _parent));
  _push(ssrRenderComponent(_component_Home_JoinSection, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-04395d41.mjs.map
