import { _ as _sfc_main$2 } from './Model-6060e1a7.mjs';
import { mergeProps, useSSRContext, reactive, computed, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import { Country, State, City } from 'country-state-city';
import { u as useVolunteerStore } from './useVolunteer-9cfa01f2.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { u as useHead } from './composables-c7a1e9e8.mjs';
import '@headlessui/vue';
import 'axios';
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
  __name: "Registration",
  __ssrInlineRender: true,
  setup(__props) {
    useVolunteerStore();
    const credentials = reactive({
      fullname: "",
      email: "",
      number: "",
      address: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      message: ""
    });
    const handler = reactive({
      showModel: false,
      modelTitle: "",
      modelPara: "",
      error: null
    });
    const messageEmpty = computed(() => {
      return credentials.message >= 0 ? true : false;
    });
    const computeLetters = computed(() => {
      return credentials.message.split("").length;
    });
    const countries = Country.getAllCountries();
    const states = computed(() => {
      return State.getStatesOfCountry(credentials.country);
    });
    const cities = computed(() => {
      return City.getCitiesOfState(credentials.country, credentials.state);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Model = _sfc_main$2;
      _push(`<!--[--><form class="wrapper w-full sm:max-w-2xl mx-auto py-8 px-4 md:px-6 font-montserrat text-title" name="registration-form" data-v-5082d755><div class="mb-6 border-b-2 border-highlight" data-v-5082d755><h2 class="text-secoundary heading font-bold" data-v-5082d755> Register now </h2><h3 class="sub-heading font-medium" data-v-5082d755> Let&#39;s join our community </h3></div><fieldset class="grid gap-4" data-v-5082d755><div data-v-5082d755><label for="full-name" data-v-5082d755>Full Name</label><input type="text" name="name" class="form-inputs"${ssrRenderAttr("value", unref(credentials).fullname)} maxlength="22" placeholder="First and Last" required="" data-v-5082d755></div><div data-v-5082d755><label for="email-address" data-v-5082d755>Email Address</label><input type="email" name="_replyto" class="form-inputs"${ssrRenderAttr("value", unref(credentials).email)} placeholder="email@domain.tld" required="" data-v-5082d755></div><div data-v-5082d755><label for="phone" data-v-5082d755>Mobile No.</label><input type="number" name="phone" class="form-inputs"${ssrRenderAttr("value", unref(credentials).number)} placeholder="your number" required="" data-v-5082d755></div><fieldset class="grid gap-8 sm:grid-cols-2" data-v-5082d755><legend data-v-5082d755>Locale</legend><select name="" class="form-inputs bg-primary" maxlength="10" required="" data-v-5082d755><option value="" selected data-v-5082d755>Selected Country</option><!--[-->`);
      ssrRenderList(unref(countries), (country) => {
        _push(`<option${ssrRenderAttr("value", country.isoCode)} class="form-option" data-v-5082d755>${ssrInterpolate(country.name)}</option>`);
      });
      _push(`<!--]--></select><select name="state"${ssrIncludeBooleanAttr(!unref(states)) ? " disabled" : ""} class="${ssrRenderClass([{ "bg-red": !unref(states) }, "form-inputs bg-primary"])}" required="" data-v-5082d755><option value="" selected data-v-5082d755>Selected State</option><!--[-->`);
      ssrRenderList(unref(states), (state) => {
        _push(`<option class="form-option"${ssrRenderAttr("value", state.isoCode)} data-v-5082d755>${ssrInterpolate(state.name)}</option>`);
      });
      _push(`<!--]--></select><select name=""${ssrIncludeBooleanAttr(!unref(cities)) ? " disabled" : ""} class="form-inputs bg-primary" required="" data-v-5082d755><option value="" selected data-v-5082d755>Selected City</option><!--[-->`);
      ssrRenderList(unref(cities), (city) => {
        _push(`<option${ssrRenderAttr("value", city.name)} class="form-option" data-v-5082d755>${ssrInterpolate(city.name)}</option>`);
      });
      _push(`<!--]--></select><input type="number" name="postal-code" class="form-inputs"${ssrRenderAttr("value", unref(credentials).pincode)} maxlength="6" placeholder="Pincode" required="" data-v-5082d755></fieldset><div data-v-5082d755><label for="street-address" data-v-5082d755>Street Address</label><input type="text" name="street" class="form-inputs"${ssrRenderAttr("value", unref(credentials).address)} placeholder="Your Address" data-v-5082d755></div><div class="relative" data-v-5082d755><label class="" data-v-5082d755>Message</label><textarea type="text" maxlength="300" class="form-textarea resize-none border p-4" placeholder="Write Message ..." data-v-5082d755>${ssrInterpolate(unref(credentials).message)}</textarea><p class="absolute bottom-2 text-gray-600 right-4 font-mono text-base z-10" data-v-5082d755>${ssrInterpolate(unref(computeLetters))}/300 </p></div><span class="text-right" data-v-5082d755><button type="submit"${ssrIncludeBooleanAttr(unref(messageEmpty)) ? " disabled" : ""} class="${ssrRenderClass([unref(messageEmpty) ? "disabled-btn" : "blue-btn", "btn py-3 sm:text-lg"])}" data-v-5082d755> Register now </button></span></fieldset></form>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Forms/Registration.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5082d755"]]);
const _sfc_main = {
  __name: "join",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "OMNI NATURE CARE FOUNDATION | JOIN US | REGISTRATION"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormsRegistration = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid md:grid-cols-2" }, _attrs))}><div class="h-full w-full bg-[url(&#39;/images/community.jpg&#39;)] bg-cover bg-footer"></div>`);
      _push(ssrRenderComponent(_component_FormsRegistration, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/join.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=join-2c95bd78.mjs.map
