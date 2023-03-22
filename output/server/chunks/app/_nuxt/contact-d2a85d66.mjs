import { _ as _sfc_main$2 } from './Model-d1160c86.mjs';
import { f as useRuntimeConfig, _ as _export_sfc } from '../server.mjs';
import { mergeProps, useSSRContext, reactive, ref, computed, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import '@headlessui/vue';
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

const _sfc_main$1 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig().public;
    const credentials = reactive({
      fullname: "",
      email: "",
      number: "",
      address: "",
      message: ""
    });
    const handler = reactive({
      showModel: false,
      modelTitle: "",
      modelPara: "",
      error: null
    });
    const btnState = ref("Contact us");
    const computeLetters = computed(() => {
      return credentials.message.length;
    });
    const messageEmpty = computed(() => {
      return credentials.message >= 0 ? true : false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Model = _sfc_main$2;
      _push(`<!--[--><form class="wrapper w-full sm:max-w-2xl mx-auto py-8 px-4 md:px-6 font-montserrat text-title" name="registration-form" data-v-bd2db353><div class="mb-6 border-b-2 border-highlight" data-v-bd2db353><h2 class="text-secoundary heading font-bold" data-v-bd2db353> Get in Touch with Us </h2></div><fieldset class="grid gap-4" data-v-bd2db353><div data-v-bd2db353><label for="full-name" data-v-bd2db353>Full Name</label><input type="text" name="name" class="form-inputs"${ssrRenderAttr("value", unref(credentials).fullname)} maxlength="22" placeholder="First and Last" required="" data-v-bd2db353></div><div data-v-bd2db353><label for="email-address" data-v-bd2db353>Email Address</label><input type="email" name="_replyto" class="form-inputs"${ssrRenderAttr("value", unref(credentials).email)} placeholder="email@domain.tld" required="" data-v-bd2db353></div><div data-v-bd2db353><label for="phone" data-v-bd2db353>Mobile No.</label><input type="number" name="phone" class="form-inputs"${ssrRenderAttr("value", unref(credentials).number)} placeholder="your number" required="" data-v-bd2db353></div><div data-v-bd2db353><label for="street-address" data-v-bd2db353>Street Address</label><input type="text" name="street" class="form-inputs"${ssrRenderAttr("value", unref(credentials).address)} placeholder="Your Address" data-v-bd2db353></div><div class="relative" data-v-bd2db353><label class="" data-v-bd2db353>Message</label><textarea type="text" maxlength="300" class="form-textarea resize-none border p-4" placeholder="Write Message ..." data-v-bd2db353>${ssrInterpolate(unref(credentials).message)}</textarea><p class="absolute bottom-2 text-title right-4 font-mono text-base z-10" data-v-bd2db353>${ssrInterpolate(unref(computeLetters))}/300 </p></div><span class="text-right" data-v-bd2db353><button type="submit"${ssrIncludeBooleanAttr(unref(messageEmpty)) ? " disabled" : ""} class="${ssrRenderClass([unref(messageEmpty) ? "disabled-btn" : "orange-btn", "btn py-3 sm:text-lg"])}" data-v-bd2db353>${ssrInterpolate(unref(btnState))}</button></span></fieldset></form>`);
      _push(ssrRenderComponent(_component_Model, {
        show: unref(handler).showModel,
        "onUpdate:show": ($event) => unref(handler).showModel = $event,
        error: unref(handler).error,
        title: unref(handler).modelTitle,
        para: unref(handler).modelPara
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Forms/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bd2db353"]]);
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormsContact = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid md:grid-cols-2" }, _attrs))}><div class="h-full w-full bg-[url(&#39;/images/community.jpg&#39;)] bg-cover bg-footer"></div>`);
      _push(ssrRenderComponent(_component_FormsContact, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-d2a85d66.mjs.map
