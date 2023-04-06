import { _ as _export_sfc, a as useRoute, c as createError } from '../server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-82b30054.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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
    const { data: campaign, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/campaign/${id}`, "$d82GNOdiwJ")), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "This Campaign does not exist!"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 sm:py-12 space-y-6 px-4" }, _attrs))} data-v-52aef395><button class="orange-btn py-2 px-4 sm:text-lg" data-v-52aef395> Back </button><article class="wrapper space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12" data-v-52aef395><div class="md:w-5/12 lg:w-6/12" data-v-52aef395><img class="rounded-md object-cover"${ssrRenderAttr("src", unref(campaign).thumbnail)} alt="campaign.thumbnail" data-v-52aef395></div><div class="md:w-7/12 lg:w-8/12" data-v-52aef395><h3 class="mt-8" data-v-52aef395>${unref(campaign).title}</h3><p class="mt-6" data-v-52aef395>${unref(campaign).description}</p></div></article></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/campaign/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52aef395"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-2427b1b2.mjs.map
