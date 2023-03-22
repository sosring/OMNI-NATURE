import { _ as __nuxt_component_0 } from './Loading-27ca09bc.mjs';
import { _ as _export_sfc, e as useState, c as createError, d as __nuxt_component_0$1 } from '../server.mjs';
import { ref, withAsyncContext, watch, mergeProps, unref, useSSRContext, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$2 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    campaign: Object
  },
  setup(__props) {
    const props = __props;
    const summary = props.campaign.description.slice(0, 150) + "...";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "rounded-xl shadow-md bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden" }, _attrs))}><div class="h-36 lg:h-48 relative bg-gradient-to-br from-slate-100 to-slate-300"><img class="absolute h-full w-full object-cover"${ssrRenderAttr("src", `${__props.campaign.thumbnail}`)}${ssrRenderAttr("alt", __props.campaign.thumbnail)}></div><div class="p-4"><h3 class="text-sm md:text-base font-montserrat font-medium text-gray-600 mb-2">${__props.campaign.title.slice(0, 30) + ".."}</h3><p class="leading-relaxed mb-2 text-xs font-raleway break-all">${summary}</p><div class="flex items-center flex-wrap">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/campaign/${__props.campaign._id}`,
        class: "blue-btn text-xs rounded text-white font-poppins"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Learn more `);
          } else {
            return [
              createTextVNode(" Learn more ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></article>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Campaign/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    page: {
      type: Number
    },
    max: {
      type: Number
    },
    skip: {
      type: Number
    },
    next: {
      type: Function
    },
    previous: {
      type: Function
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-6 text-right" }, _attrs))}><nav aria-label="Page navigation example"><ul class="inline-flex"><li><button${ssrIncludeBooleanAttr(__props.page <= 1) ? " disabled" : ""} class="${ssrRenderClass([{ "disabled-btn": __props.page <= 1 }, "bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight px-3 h-10"])}" type="button"> Previous </button></li><li><p type="button" class="border border-gray-300 h-10 py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700">${ssrInterpolate(__props.page)}</p></li><li><button type="button"${ssrIncludeBooleanAttr(__props.skip > __props.max) ? " disabled" : ""} class="${ssrRenderClass([{ "disabled-btn": __props.skip > __props.max }, "bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight h-10 px-3"])}"> Next </button></li></ul></nav></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const page = useState("page", () => 1);
    const limit = ref(3);
    const { data: campaigns, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/campaign",
      { query: { page, limit } },
      "$KV6uH0JrlQ"
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Please check your network connection!"
      });
    }
    const skip = ref(page.value * limit.value);
    watch(page, (newValue) => {
      skip.value = page.value * limit.value;
    });
    function next() {
      page.value++;
    }
    function previous() {
      page.value--;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_0;
      const _component_Campaign_Card = _sfc_main$2;
      const _component_Pagination = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper container px-5 mx-auto text-title" }, _attrs))} data-v-38ccfc26><h1 class="heading font-bold py-4 text-secoundary uppercase" data-v-38ccfc26> Campaigns </h1><article data-v-38ccfc26>`);
      if (unref(pending)) {
        _push(`<div data-v-38ccfc26>`);
        _push(ssrRenderComponent(_component_Loading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="wrapper grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-v-38ccfc26><!--[-->`);
        ssrRenderList(unref(campaigns), (campaign) => {
          _push(ssrRenderComponent(_component_Campaign_Card, { campaign }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(_component_Pagination, {
        page: unref(page),
        skip: unref(skip),
        previous,
        max: unref(campaigns).length,
        next
      }, null, _parent));
      _push(`</article></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/campaign/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-38ccfc26"]]);

export { index as default };
//# sourceMappingURL=index-03acf534.mjs.map
