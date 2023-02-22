<template>
  
  <section class="hero-section 
   relative overflow-hidden">

    <img src="/images/solar-panels.jpg" 
     alt="solar-panels"
     class="mix-blend-soft-light blur-sm 
     opacity-30 absolute h-full w-full
     object-cover">

    <article class="max-w-screen-xl 
     mx-auto relative flex py-8">

     <div class="text-title z-10
      fond-montserrat py-8 px-4
      lg:p-16 space-y-6 md:space-y-8">

      <h2 class=" heading 
       font-bold">
        Nature's harmony <br>
        for modern sustainability.
      </h2>

      <p class="tagline">
       Join us in creating a world <br>
       that works for everyone.
      </p>

      <button class="donate-btn shadow-lg
       rounded-md text-sm sm:text-lg 
       py-3 sm:px-6"
       @click="$router.push({ path: '/join' })">
        Take Action Now
      </button>
     </div>

    <img class="absolute -right-4 
     sm:right-12 z-0 -bottom-8 sm:bottom-0
     h-250 sm:h-350 lg:h-[550px] object-scale-down"
     src="/images/holding-plant.png" 
     alt="holding a plant">

    </article>
  </section>
</template>

<style scoped>
  .hero-section {
    background: linear-gradient(293.21deg, rgba(183, 208, 227, 1) 40.98%, rgba(185, 199, 210, .5) 102.93%);
  }

  .heading {
    font-size: clamp(1.5rem, 5vw, 4rem)
  }

  .tagline {
    font-size: clamp(1.1rem, 5vw, 2.2rem);
  }
</style>
