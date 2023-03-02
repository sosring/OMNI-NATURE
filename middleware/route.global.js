export default defineNuxtRouteMiddleware ((to, from) => {

    if(process.client) {
     return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
})
