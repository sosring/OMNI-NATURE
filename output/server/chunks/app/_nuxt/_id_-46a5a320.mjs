import { _ as _export_sfc, a as useRoute, c as createError } from '../server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-82b30054.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const id = useRoute().params.id;
    const { data: gallery, error, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/gallery/${id}`, "$wRZ6AxWpUX")), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage: `A ${id} gallery does not exist!`
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 sm:py-12 space-y-6 px-4" }, _attrs))} data-v-47e5a498><button class="orange-btn py-2 px-4 sm:text-lg" data-v-47e5a498> Back </button><article class="wrapper text-center" data-v-47e5a498><h3 class="my-4 md:my-8" data-v-47e5a498>${unref(gallery).title}</h3><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" data-v-47e5a498><!--[-->`);
      ssrRenderList(unref(gallery).images, (image, index) => {
        _push(`<div class="h-250 w-full relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-md overflow-hidden" data-v-47e5a498><img class="absolute h-full w-full object-cover object-bottom"${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", image)} data-v-47e5a498></div>`);
      });
      _push(`<!--]--></div></article></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47e5a498"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-46a5a320.mjs.map
