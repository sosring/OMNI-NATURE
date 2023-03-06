import VueGtag from 'vue-gtag-next'


export default defineNuxtPlugin((nuxtApp) => {
  const { GA_MEASUREMENT_ID } = useRuntimeConfig().public

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: GA_MEASUREMENT_ID
    }
  })
})
