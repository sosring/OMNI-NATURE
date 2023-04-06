import { p as publicAssetsURL } from '../../paths.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { u as useHead } from './composables-c7a1e9e8.mjs';
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

const _imports_0$5 = "" + publicAssetsURL("images/sustainable-environment.jpg");
const _sfc_main$7 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="wrapper container m-auto px-4 md:px-12 xl:px-6" data-v-4c42bac1><article class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12" data-v-4c42bac1><div class="md:5/12 lg:w-8/12" data-v-4c42bac1><img class="rounded-md h-full object-cover"${ssrRenderAttr("src", _imports_0$5)} alt="sustainable environment" data-v-4c42bac1></div><div class="md:7/12 lg:w-6/12" data-v-4c42bac1><h2 data-v-4c42bac1> Empowering Sustainability <br data-v-4c42bac1> Green Living for All </h2><p class="mt-6" data-v-4c42bac1> We care for Nature and make Society Sustainable by using Green energy resources and empowering people about the initiatives to be taken for making the Living habitat attached to nature. </p><p class="mt-4" data-v-4c42bac1> Humans Cannot Stop From Development Of Infrastructure Demands So We Have To Preserve The Natural-environment And Use Sustainable Technologies For Built-Environment. </p></div></article><article class="my-6" data-v-4c42bac1><p data-v-4c42bac1> OMNI NATURE CARE FOUNDATION focus on green infrastructure, renewable energy , recycling of waste produced ,water treatment systems towards the society, related to sustainability. Sustainability is the ability to exist and develop without Depleting natural resources for the future. </p><p class="mt-4" data-v-4c42bac1> There are many benefits to sustainability, both short-term and long- term. We cannot maintain our Earth\u2019s ecosystems or continue to function as we do if more sustainable choices are not made. If harmful processes are maintained with no change, it is likely that we will run out of fossil fuels, huge numbers of animal species will become extinct, and the atmosphere will be irreparably damaged. Clean air and nontoxic atmospheric conditions, growth of resources that can be relied upon, and water quality and cleanliness, are all benefits of sustainability. </p></article><div class="text-end" data-v-4c42bac1><a href="/OMNI.pdf" download="OMNI" class="blue-btn sm:py-3 text-xs uppercase" data-v-4c42bac1> download our pdf </a></div></section><section class="my-8 sm:my-12 py-8 md:py-16 text-center bg-gradient-to-tr from-amber-200 to-cyan-500" data-v-4c42bac1><h3 class="quote font-bold font-oswald text-gray-50" data-v-4c42bac1> WE HUMANS MUST REALIZE THAT IN <br data-v-4c42bac1> ORDER TO SURVIVE ,WE MUST <br data-v-4c42bac1> HANDLE THE NATURE WITH CARE </h3></section><!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Intro.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4c42bac1"]]);
const _imports_0$4 = "" + publicAssetsURL("images/four-pillars.jpg");
const _sfc_main$6 = {
  __name: "Impact",
  __ssrInlineRender: true,
  setup(__props) {
    const missions = [
      "To Promote Sustainable Technologies Within The Society.",
      "To Empower Private Business Institutions, Establishments, Schools And Colleges And Private Residences Towards The Use Of Green Energy And Guide Them To Recycle And Reuse The Natural Energy.",
      "To Educate the Youth of the remote areas about the technologies of Sustainable process that are done so that they can use the knowledge and move forward our goal and thereby earning a livelihood through it.",
      "Environmental protection is the most frequently discussed element. It is concerned with the reduction of carbon footprints, water usage, non decomposable packaging, and wasteful processes as part of a supply chain. These processes can often be cost- effective, and financially useful as well as important for environmental sustainability."
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto m-auto px-4 md:px-12 xl:px-6" }, _attrs))} data-v-154c7b3b><article class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12" data-v-154c7b3b><div class="md:5/12 lg:w-8/12" data-v-154c7b3b><img class="rounded-md"${ssrRenderAttr("src", _imports_0$4)} alt="four pillars illustration" data-v-154c7b3b></div><div class="md:7/12 lg:w-6/12" data-v-154c7b3b><h3 class="text-secoundary" data-v-154c7b3b> IMPACT FOR SUSTAINABILITY </h3><p class="mt-6" data-v-154c7b3b> The concept of sustainability is composed of four pillars: </p><p class="mt-4" data-v-154c7b3b> Environmental protection is the most frequently discussed element. It is concerned with the reduction of carbon footprints, water usage, non-decomposable packaging, and wasteful processes as part of a supply chain. These processes can often be cost-effective, and financially useful as well as important for environmental sustainability. </p></div></article><article class="mt-4 sm:mt-12" data-v-154c7b3b><h3 class="text-secoundary" data-v-154c7b3b> OUR MISSION TOWARDS SOCIETY </h3><div class="p-4 sm:p-6" data-v-154c7b3b><ul class="space-y-4 sm:space-y-6" data-v-154c7b3b><!--[-->`);
      ssrRenderList(missions, (mission) => {
        _push(`<li class="list-disc" data-v-154c7b3b><p data-v-154c7b3b>${mission}</p></li>`);
      });
      _push(`<!--]--></ul></div></article></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Impact.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-154c7b3b"]]);
const _imports_0$3 = "" + publicAssetsURL("images/green-empowerment.jpg");
const _sfc_main$5 = {
  __name: "First",
  __ssrInlineRender: true,
  setup(__props) {
    const urbans = [
      "RESIDENTIAL BUILDINGS.",
      "COMMERCIAL BUILDINGS.",
      "HOSPITAL BUILDING.",
      "HOTELS & TOURISM ESTABLISHMENTS.",
      "INSITUTIONAL BUILDINGS.",
      "OFFICE BUILDINGS(GOVT & PRIVATE).",
      "PARKING SPACES.",
      "RECREATIONAL SPACES",
      "INDUSTRIES."
    ];
    const rurals = [
      "AGRICULTURE WATER SYSTEM.",
      "HOUSEHOLD SOCIETY.",
      "SCHOOLS.",
      "PUBLIC SPACES."
    ];
    const advantages = [
      "Renewable energy source",
      "Safe option",
      "Long lasting solution",
      "Government incentives",
      "Easy instalment",
      "Improved efficiencies",
      "Return on investment"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><article class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12" data-v-4a8a4fd1><div class="md:w-5/12 lg:w-6/12" data-v-4a8a4fd1><img class="w-full rounded-md object-cover"${ssrRenderAttr("src", _imports_0$3)} alt="solar power industry" data-v-4a8a4fd1></div><div class="md:w-7/12 lg:w-8/12" data-v-4a8a4fd1><h3 class="mt-8 heading" data-v-4a8a4fd1> 1. PROMOTE SOLAR ENERGY TECHNOLOGIES <br data-v-4a8a4fd1> (URBAN &amp; RURAL) </h3><p class="mt-6" data-v-4a8a4fd1> Solar is a renewable energy source that is free of dangerous carbon emissions. With solar, we can create cleaner power and protect the environment from climate change. </p><p class="mt-4" data-v-4a8a4fd1> Lighting Up Darkness In Villages. Enabling Children To Study At Night. Run Food Processing Machines Easily. Power can develop many Sectors in villages. END-UP POWER POVERTY IN VILLAGES. </p></div></article><article class="grid gap-4 lg:grid-flow-col" data-v-4a8a4fd1><div data-v-4a8a4fd1><h3 data-v-4a8a4fd1>USES IN URBAN AREA </h3><ul class="mt-4 px-6" data-v-4a8a4fd1><!--[-->`);
      ssrRenderList(urbans, (urban) => {
        _push(`<li class="list-decimal" data-v-4a8a4fd1><p data-v-4a8a4fd1>${urban}</p></li>`);
      });
      _push(`<!--]--></ul></div><div data-v-4a8a4fd1><h3 data-v-4a8a4fd1>USES IN RURAL AREA </h3><ul class="mt-4 px-6" data-v-4a8a4fd1><!--[-->`);
      ssrRenderList(rurals, (rural) => {
        _push(`<li class="list-decimal" data-v-4a8a4fd1><p data-v-4a8a4fd1>${rural}</p></li>`);
      });
      _push(`<!--]--></ul></div><div data-v-4a8a4fd1><h3 data-v-4a8a4fd1>ADVANTAGES OF SOLAR ENERGY</h3><div data-v-4a8a4fd1><ul class="mt-4 px-6" data-v-4a8a4fd1><!--[-->`);
      ssrRenderList(advantages, (advantage) => {
        _push(`<li class="list-decimal" data-v-4a8a4fd1><p data-v-4a8a4fd1>${advantage}</p></li>`);
      });
      _push(`<!--]--></ul></div></div></article><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Objectives/First.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4a8a4fd1"]]);
const _imports_0$2 = "" + publicAssetsURL("images/rain-water-harvesting.jpg");
const _sfc_main$4 = {
  __name: "Secound",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      "Catchment- Used to collect and store the captured rainwater.",
      "Conveyance system \u2013 It is used to transport the harvested water from the catchment to the recharge zone.",
      "Flush- It is used to flush out the first spell of rain.",
      "Filter \u2013 Used for filtering the collected rainwater and removing pollutants.",
      "Tanks and the recharge structures: Used to store the filtered water which is ready to use."
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><article class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12" data-v-952f9cc4><div class="md:w-7/12 lg:w-8/12" data-v-952f9cc4><h3 class="mt-8 heading" data-v-952f9cc4> 2. RECYCLE AND TREATMENT OF USED WATER ALSO HARVEST THE RAIN WATER </h3><p class="mt-6 sub-heading" data-v-952f9cc4> RECYCLE &amp; TREATMENT OF WASTE WATER </p><p class="mt-4" data-v-952f9cc4> Wastewater recycling enables more sustainable water usage and is an important step in combating climate change. The reduction of water wastage is particularly relevant to industrial manufacturers, who make up approximately 20% of global water consumption. Wastewater recycling systems make it possible for manufacturers to drastically reduce their water consumption, saving money and reducing the strain on local resources. Improved health and safety. Reduced water scarcity. Lower industrial costs. Meeting industry standards and regulations. Lowered strain on the environment. </p></div><div class="md:w-5/12 lg:w-6/12" data-v-952f9cc4><img class="w-full rounded-md object-cover"${ssrRenderAttr("src", _imports_0$2)} alt="rain water harvesting" data-v-952f9cc4></div></article><article class="space-y-6 md:space-y-0" data-v-952f9cc4><div class="md:w-7/12 lg:w-8/12" data-v-952f9cc4><p class="mt-6 sub-heading" data-v-952f9cc4> - RAIN WATER HARVESTING </p><p class="mt-4" data-v-952f9cc4> Rainwater harvesting is the simple process or technology used to conserve rainwater by collecting, storing, conveying and purifying of rainwater that runs off from rooftops, parks, roads, open grounds, etc. for later use. Rainwater harvesting systems consists of the following components: - </p></div></article><article data-v-952f9cc4><div data-v-952f9cc4><ul class="mt-4 px-6" data-v-952f9cc4><!--[-->`);
      ssrRenderList(steps, (step) => {
        _push(`<li class="list-decimal" data-v-952f9cc4><p data-v-952f9cc4>${step}</p></li>`);
      });
      _push(`<!--]--></ul></div></article><article data-v-952f9cc4><h3 data-v-952f9cc4>ADVANTAGES OF RAINWATER HARVESTING</h3><p class="mt-4 sub-heading" data-v-952f9cc4> The benefits of the rainwater harvesting system are listed below. </p><div data-v-952f9cc4><ul class="mt-4 px-6" data-v-952f9cc4><!--[-->`);
      ssrRenderList(steps, (step) => {
        _push(`<li class="list-decimal" data-v-952f9cc4><p data-v-952f9cc4>${step}</p></li>`);
      });
      _push(`<!--]--></ul></div></article><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Objectives/Secound.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-952f9cc4"]]);
const _imports_0$1 = "" + publicAssetsURL("images/waste-management-technology.jpeg");
const _sfc_main$3 = {
  __name: "Third",
  __ssrInlineRender: true,
  setup(__props) {
    const organic = [
      {
        title: "Liquid waste",
        para: "Food leftovers, fruit/vegetable peels, waste tea powder, coffee beans, landscape and pruning waste, other green waste, processed food, raw food materials, meat and bones, food- soiled paper, eggshells, leaf plates."
      },
      {
        title: "Dry waste",
        para: " Newspapers, magazines, brown paper, paper bags, paper packaging materials, ribbons, strings, leaflets, notebooks, wood, furniture."
      }
    ];
    const nonOrganic = [
      {
        title: "Plastic",
        para: "Plastic bags, containers, jars, bottles, covers, caps, milk pouches, food packets, soda bottles, wrappers."
      },
      {
        title: "Metals",
        para: "Utensils, batteries, pipes, nails, tools, aluminium foils, metal scraps, tetra packs, wires."
      },
      {
        title: "Glass",
        para: "Bottles, plates, cups, shards, mirrors, ceramics."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><article class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12" data-v-9b54f3a8><div class="md:w-5/12 lg:w-6/12" data-v-9b54f3a8><img class="w-full rounded-md object-cover"${ssrRenderAttr("src", _imports_0$1)} alt="wate management technology" loading="lazy" data-v-9b54f3a8></div><div class="md:w-7/12 lg:w-8/12" data-v-9b54f3a8><h3 class="mt-8 heading" data-v-9b54f3a8> 3. TECHNOLOGIES TO RECYCLE OF WASTE GENERATED AND USE IN AN EFFECTIVE MANNER TYPES OF HOUSEHOLD WASTE Organic Waste </h3><div class="mt-4" data-v-9b54f3a8><p class="sub-heading font-bold" data-v-9b54f3a8> Organic waste </p><ul class="mt-4 px-6" data-v-9b54f3a8><!--[-->`);
      ssrRenderList(organic, (waste) => {
        _push(`<li class="list-decimal space-y-2" data-v-9b54f3a8><p class="sub-heading" data-v-9b54f3a8>${waste.title}</p><p data-v-9b54f3a8>${waste.para}</p></li>`);
      });
      _push(`<!--]--></ul></div></div></article><article data-v-9b54f3a8><div class="mt-4" data-v-9b54f3a8><p class="sub-heading font-bold" data-v-9b54f3a8> Non-organic Recyclable waste (solid rubbish) </p><ul class="mt-4 px-6" data-v-9b54f3a8><!--[-->`);
      ssrRenderList(nonOrganic, (waste) => {
        _push(`<li class="list-decimal space-y-2" data-v-9b54f3a8><p class="sub-heading" data-v-9b54f3a8>${waste.title}</p><p data-v-9b54f3a8>${waste.para}</p></li>`);
      });
      _push(`<!--]--></ul></div></article><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Objectives/Third.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9b54f3a8"]]);
const _imports_0 = "" + publicAssetsURL("images/net-zero.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12" }, _attrs))} data-v-93eba068><div class="md:w-7/12 lg:w-8/12" data-v-93eba068><h3 class="mt-8 heading" data-v-93eba068> 4. MAKE THE SOCIETY NET ZERO CARBON EMISSIONS AND ECO-FRIENDLY TOWARDS NATURE </h3><p class="mt-6" data-v-93eba068> The most feasible pathways to net-zero emissions include four main strategies: Generate electricity without emissions. Use vehicles and equipment that are powered by electricity instead of fossil fuels. Use energy more efficiently. Remove carbon dioxide from the atmosphere. Net zero refers to a state in which the greenhouse gases going into the atmosphere are balanced by removal out router: { scrollBehavior: function (to, from, savedPosition) { return { x: 0, y: 0 } } }, </p><p class="mt-4" data-v-93eba068> The term net zero is important because \u2013 For CO2 at least \u2013 this is the state at which global warming stops. The Paris Agreement underlines the need for net zero. It requires states to \u2018achieve a balance between anthropogenic emissions by sources and removals by sinks of greenhouse gases in the second half of this century\u2019. </p></div><div class="md:w-5/12 lg:w-6/12" data-v-93eba068><img class="w-full rounded-md object-cover"${ssrRenderAttr("src", _imports_0)} alt="carbon credit illustration" data-v-93eba068></div></article>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Objectives/Fourth.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-93eba068"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_About_Objectives_First = __nuxt_component_0;
  const _component_About_Objectives_Secound = __nuxt_component_1;
  const _component_About_Objectives_Third = __nuxt_component_2$1;
  const _component_About_Objectives_Fourth = __nuxt_component_3;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "container m-auto p-4 md:p-12 xl:px-6 space-y-4 sm:space-y-6" }, _attrs))} data-v-a7f0b400><h2 data-v-a7f0b400> OUR OBJECTIVE IS TO PROMOTE <br data-v-a7f0b400> GREEN DEVELOPETMENT WITH NATURE </h2>`);
  _push(ssrRenderComponent(_component_About_Objectives_First, null, null, _parent));
  _push(ssrRenderComponent(_component_About_Objectives_Secound, null, null, _parent));
  _push(ssrRenderComponent(_component_About_Objectives_Third, null, null, _parent));
  _push(ssrRenderComponent(_component_About_Objectives_Fourth, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Objective.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a7f0b400"]]);
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "OMNI NATURE CARE FOUNDATION | ABOUT"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_About_Intro = __nuxt_component_0$1;
      const _component_About_Impact = __nuxt_component_1$1;
      const _component_About_Objective = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_About_Intro, null, null, _parent));
      _push(ssrRenderComponent(_component_About_Impact, null, null, _parent));
      _push(ssrRenderComponent(_component_About_Objective, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-6c3dbce6.mjs.map
