<template>
  
  <section class="h-full relative">

    <article class="max-w-screen-xl 
     mx-auto h-full text-title
     py-8 px-4 lg:px-16 lg:pt-12">

    <h3 class="heading font-montserrat 
     font-bold mb-2 sm:mb-8">
      Our Commitment to <br> Improving Society.
    </h3>

    </article>

   <div class="polygon h-full"></div>

  </section>
</template>

<style scoped>
  .heading {
    font-size: clamp(1.3rem, 5vw, 4rem)
  }

  .tagline {
    font-size: clamp(1rem, 5vw, 1.3rem);
  }

  .polygon {
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    background: linear-gradient(293.21deg, rgba( 0 0 0 / .2) 40.98%, rgba(185, 199, 210, .2) 102.93%), url('images/plant.jpg');
    background-size: cover;
    top: 0%;
    right: 0%
  }
</style>
