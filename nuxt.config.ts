// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
     [
       '@pinia/nuxt', 
       {autoImports: ['defineStore', 'acceptHMRUpdate']}
     ],
     'nuxt-headlessui',
     '@nuxtjs/html-validator'
  ],
  headlessui: {
    prefix: 'Headless'
  },
  app: {
    head: {
      title: 'OMNI NATURE CARE FOUNDATION | NON PROFIT ORGANIZATION | GREEN INFRASTRUCTURE',
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
        { hid: 'description', name: 'description', content: process.env.DESC },
        { hid: 'keywords', name: 'keywords', content: process.env.KEYWORDS },
        { hid: 'copyright', name: 'copyright', content: process.env.COPYRIGHT },
        { hid: 'robots', name: 'robots', content: 'noindex' },
        { hid: 'designer', name: 'designer', content: 'sosring' }
      ]
    }
  },
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    DB_URI: process.env.DB_URI,
    public: {
    }
  },
  router: {
    scrollBehavior: () => ({ x: 0, y: 0, behavior: 'smooth'  })
  },
  nitro: {
    plugins: ['~/server/db/index.js']
  }
})
