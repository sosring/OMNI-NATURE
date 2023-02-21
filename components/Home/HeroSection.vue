<template>
  
  <section class="hero-section 
   relative h-full">

    <img src="/images/solar-panels.jpg" 
     alt="solar-panels"
     class="mix-blend-soft-light blur-sm 
     opacity-30 absolute h-full w-full
     object-cover">

    <article class="max-w-screen-xl 
     mx-auto relative flex h-full">

     <div class="text-title
      fond-montserrat py-8 px-4
      lg:p-16">

      <h2 class=" heading 
       font-bold mb-2 sm:mb-6">
        Nature's harmony <br>
        for modern sustainability.
      </h2>

      <p class="tagline mb-2 sm:mb-6">
       Join us in creating a world <br>
       that works for everyone.
      </p>

      <button class="donate-btn shadow-lg
       rounded-md text-base sm:text-lg 
       mt-4 py-3 px-6"
       @click="$router.push({ path: '/join' })">
        Take Action Now
      </button>
     </div>

    <img class="absolute -right-12 md:right-12
     bottom-0 h-250 sm:h-[550px] object-scale-down"
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
    font-size: clamp(1.3rem, 5vw, 4rem)
  }

  .tagline {
    font-size: clamp(1rem, 5vw, 2.2rem);
  }
</style>
