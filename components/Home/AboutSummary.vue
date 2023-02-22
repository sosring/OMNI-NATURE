<template>

  <section class="h-full relative">

    <article class="max-w-screen-xl 
     mx-auto h-full text-title
     py-8 px-4 lg:px-16 lg:pt-12">

    <h3 class="heading font-montserrat 
     font-bold mb-2 sm:mb-8">
      OMNI NATURE <br>  CARE FOUNDATION
    </h3>

    <p class="tagline mb-2 sm:mb-8
     font-raleway w-4/5 leading-relaxed">
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

    <button class="donate-btn py-3"
     @click="$router.push({ path: '/about' })">
      KNOW MORE
    </button>
   </article>

   <img class="absolute top-0 -right-0
    h-250 sm:h-450"
    src="/images/four-pillars.png"
    alt="four pillars of Sustainability">

  </section>
</template>

<style scoped>
  .heading {
    font-size: clamp(1.3rem, 5vw, 4rem)
  }

  .tagline {
    font-size: clamp(1rem, 5vw, 1.3rem);
  }
</style>
