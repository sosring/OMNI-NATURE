<template>
  
  <section class="hero-section 
   relative overflow-hidden">

    <img src="/images/solar-panels.jpg" 
     alt="solar-panels"
     class="mix-blend-soft-light blur-sm 
     opacity-40 absolute h-full w-full
     object-cover object-top">

    <article class="max-w-screen-xl
     mx-auto relative flex py-10 px-4">

     <div class="text-wrapper text-title 
      z-10 fond-montserrat py-8 px-4
      lg:py-16 space-y-6 md:space-y-8">

      <h2 class="heading 
       text-cyan-900 font-bold">
        Nature's harmony <br>
        for modern sustainability.
      </h2>

      <p class="tagline">
       Join us in creating a world <br>
       that works for everyone.
      </p>

      <button 
       type="button"
       class="orange-btn shadow-lg
       rounded-md text-sm sm:text-lg 
       py-3 sm:px-6"
       @click="$router.push('/join')">
        Take Action Now
      </button>
     </div>

    <img class="absolute -right-4 
     sm:right-0 z-0 -bottom-4 sm:bottom-0
     h-250 sm:h-350 md:h-450 lg:h-600 
     object-scale-down"
     src="/images/holding-plant.png" 
     alt="holding a plant">

    </article>
  </section>
</template>

<script setup>
  import { useAnimate } from '~/composables/useAnimate'

  const { slide } = useAnimate()

  onMounted(() => {
    slide('.text-wrapper')
  })
</script>

<style scoped>
  .hero-section {
    background: linear-gradient(293.21deg, rgba(183, 208, 227, .8)
    40.98%, rgba(185, 199, 210, .4) 102.93%);
  }

  .heading {
    font-size: clamp(1.5rem, 5vw, 4rem)
  }

  .tagline {
    font-size: clamp(1.1rem, 5vw, 2.2rem);
  }
</style>
