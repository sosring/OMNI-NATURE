import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default defineNuxtPlugin((nuxtApp) => {
  if(process.client) {
    gsap.registerPlugin(ScrollTrigger);
  }

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
