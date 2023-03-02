export default defineNuxtRouteMiddleware ((to, from) => {

    if(process.client) {
     window.scrollTo({ top: 0, behavior: 'smooth' })
    }
})
