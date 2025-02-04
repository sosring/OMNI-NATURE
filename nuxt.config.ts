// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
     [
       '@pinia/nuxt', 
       {autoImports: ['defineStore', 'acceptHMRUpdate']}
     ],
     'nuxt-headlessui',
     '@nuxtjs/robots'
  ],
  server: {
    host: '0.0.0.0',
    port: 4000
  },
  robots: {
    UserAgent: '*',
    Disallow: '/api',
    Allow: '/'
  },
  googleAnalytics: {
    id: process.env.GA_MEASUREMENT_ID
  },
  headlessui: {
    prefix: 'Headless'
  },
  app: {
    head: {
      title: 'OMNI NATURE TECH FOUNDATION | NON PROFIT | GREEN INFRASTRUCTURE',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css", integrity: "sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==", crossorigin: "anonymous", referrerpolicy: "no-referrer" },
        { rel: "icon", type: "image/x-icon", href: "/images/favicon.png" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" } 
      ],
      meta: [
        { charset: 'utf-8', },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'The OMNI NATURE TECH Foundation advocates for sustainable living through the use of green energy, recycling waste, and water treatment systems. The foundation emphasizes the need to preserve natural resources while continuing to meet the demands of infrastructure development.' },
        { hid: 'keywords', name: 'keywords', content: 'OMNI NATURE TECH FOUNDATION, Environmental Protection, Carbon Emissions, Sustainable Technologies, Natural Resources, Carbon Footprints, Environmental Sustainability, Ecosystem, Climate Change, Green Infrastructure' },
        { hid: 'copyright', name: 'copyright', content: 'OMNI CARE NATURE FOUNDATION' },
        { hid: 'robots', name: 'robots', content: 'index' },
        { hid: 'designer', name: 'designer', content: 'sosring' },

        { name: "og:title", content: "OMNI NATURE TECH FOUNDATION" },
        { name: "og:description", content: "The OMNI NATURE TECH Foundation advocates for sustainable living through the use of green energy, recycling waste, and water treatment systems. The foundation emphasizes the need to preserve natural resources while continuing to meet the demands of infrastructure development." },
        { name: "og:image", content: "~/images/favicon.png" },
        { name: "og:url", content: "https://onc-foundation.com" },

        { name: "twitter:title", content: "OMNI NATURE TECH FOUNDATION" },
        { name: "twitter:description", content: "The OMNI NATURE TECH Foundation advocates for sustainable living through the use of green energy, recycling waste, and water treatment systems. The foundation emphasizes the need to preserve natural resources while continuing to meet the demands of infrastructure development." },
        { name: "twitter:url", content: "https://onc-foundation.com" },
        { name: "twitter:card", content: "The OMNI NATURE TECH Foundation advocates for sustainable living through the use of green energy, recycling waste, and water treatment systems." }
      ]
    }
  },
  css: ['@/assets/css/tailwind.css'],
  runtimeConfig: {
    DB_URI: process.env.DB_URI,
    DB_KEY: process.env.DB_KEY,

    public: {
     WEB_LINK: process.env.WEB_LINK,
     TEMPLATE_ID: process.env.TEMPLATE_ID,
     SERVICE_ID: process.env.SERVICE_ID,
     MAIL_KEY: process.env.MAIL_KEY,
     GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID
    }
  },
  nitro: {
    plugins: ['~/server/db/index.js']
  }
})
