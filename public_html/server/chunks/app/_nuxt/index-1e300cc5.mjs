import { _ as __nuxt_component_0 } from './Loading-27ca09bc.mjs';
import { _ as _export_sfc, d as __nuxt_component_0$1 } from '../server.mjs';
import { ref, withAsyncContext, watch, mergeProps, unref, useSSRContext, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useFetch } from './fetch-82b30054.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'gsap';
import 'defu';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';
import 'ohash';

const _sfc_main$1 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array
    },
    title: {
      type: String
    },
    id: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "rounded-xl shadow-md bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden" }, _attrs))}><div class="h-36 lg:h-48 relative bg-gradient-to-br from-slate-100 to-slate-300"><img class="absolute h-full w-full object-cover"${ssrRenderAttr("src", `${__props.images[0]}`)}${ssrRenderAttr("alt", __props.images[0])}></div><div class="py-2 px-4 flex justify-between"><h1 class="text-sm lg:text-base font-bold font-montserrat text-title">${__props.title}</h1>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/gallery/${__props.id}`,
        class: "blue-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` view `);
          } else {
            return [
              createTextVNode(" view ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></article>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const page = ref(1);
    const limit = ref(3);
    const { data: gallery, pending, error, refesh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/gallery",
      { query: { page, limit } },
      "$gIcRkpEHTT"
    )), __temp = await __temp, __restore(), __temp);
    const skip = ref(page.value * limit.value);
    watch(page, (newValue) => {
      skip.value = page.value * limit.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_0;
      const _component_Gallery_Card = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper container px-5 mx-auto text-title" }, _attrs))} data-v-a1a41d01><h1 class="heading font-bold py-4 text-secoundary uppercase" data-v-a1a41d01> Gallery </h1><article data-v-a1a41d01>`);
      if (unref(pending)) {
        _push(`<div data-v-a1a41d01>`);
        _push(ssrRenderComponent(_component_Loading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="wrapper grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12" data-v-a1a41d01><!--[-->`);
        ssrRenderList(unref(gallery), ({ _id, title, images }) => {
          _push(ssrRenderComponent(_component_Gallery_Card, {
            images,
            title,
            id: _id
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</article></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1a41d01"]]);

export { index as default };
//# sourceMappingURL=index-1e300cc5.mjs.map
