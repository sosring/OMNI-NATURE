// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
     [
       '@pinia/nuxt', 
     {autoImports: ['defineStore', 'acceptHMRUpdate']}
     ]
  ],
  app: {
    head: {
      title: 'OMNI NATURE CARE FOUNDATION | NON PROFIT ORGANIZATION | SUSTAINABLE DEVELOPMENT | GREEN INFRASTRUCTURE',
      link: [
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css", integrity: "sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==", crossorigin: "anonymous", referrerpolicy: "no-referrer" }
      ]
    }
  },
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    DB_URI: process.env.DB_URI
  },
  nitro: {
    plugins: ['~/server/db/index.js']
  }
})
