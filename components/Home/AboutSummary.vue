<template>

  <section class="relative
   grid items-center">

    <article class="max-w-screen-xl 
     mx-auto h-full text-title
     py-8 px-4 md:py-24 lg:px-16 z-10 
     space-y-6 md:space-y-8">

    <h3 class="heading font-montserrat 
     font-bold">
      OMNI NATURE <br>  CARE FOUNDATION
    </h3>

    <p class="tagline font-raleway 
      lg:w-4/5 leading-sung">
      The Omni Nature Care Foundation advocates for 
      sustainable living through the use of green energy, 
      recycling waste, and water treatment systems. 
      The foundation emphasizes the need to preserve natural 
      resources while continuing to meet the demands of 
      infrastructure development. Sustainability is crucial 
      for the long-term survival of our ecosystems and animal 
      species, and has benefits such as clean air, reliable 
      resources, and improved water quality.
    </p>

    <button 
     type="button"
     class="orange-btn py-3"
     @click="$router.push({ path: '/about' })">
      KNOW MORE
    </button>
   </article>

   <img class="z-0 absolute top-0 -right-0
    hidden lg:block h-250 sm:h-450"
    src="/images/four-pillars.png"
    alt="four pillars of Sustainability">

  </section>
</template>

<style scoped>
  .heading {
    font-size: clamp(1.3rem, 5vw, 3.7rem)
  }

  .tagline {
    font-size: clamp(.8rem, 2.5vw, 1.3rem);
  }
</style>
