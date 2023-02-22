// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
     [
       '@pinia/nuxt', 
     {autoImports: ['defineStore', 'acceptHMRUpdate']}
     ],
     'nuxt-headlessui'
  ],
  headlessui: {
    prefix: 'Headless'
  },
  app: {
    head: {
      title: 'OMNI NATURE CARE FOUNDATION | NON PROFIT ORGANIZATION | SUSTAINABLE DEVELOPMENT | GREEN INFRASTRUCTURE',
      link: [
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css", integrity: "sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==", crossorigin: "anonymous", referrerpolicy: "no-referrer" },
        { rel: "icon", type: "image/x-icon", href: "/images/favicon.png" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" } 
      ]
    }
  },
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    DB_URI: process.env.DB_URI,

    public
    : {
      MAP_LOCATION: process.env.MAP_LOCATION,
      FB: process.env.FB,
      IG: process.env.IG
    }
  },
  nitro: {
    plugins: ['~/server/db/index.js']
  }
})
