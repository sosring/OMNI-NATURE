<template>
  
  <section class="h-450 md:h-650
   relative overflow-hidden">

    <article class="h-full container 
     mx-auto relative flex items-center 
     py-8">

     <div class="text-title z-10
      fond-montserrat py-8 px-4">

      <h3 class="heading sm:w-3/4
       font-bold mb-12 md:mb-20">
        Join us today and be a part of
        creating a sustainable world for our future.
      </h3>

      <button 
       type="button"
       class="orange-btn 
       rounded-md text-sm md:text-base py-3 sm:px-6"
       @click="$router.push({ path: '/join' })">
        JOIN US 
      </button>
     </div>

     <img class="absolute bottom-0
      -right-0 h-250 sm:h-350"
      src="/images/environment-goals.png"
      alt="environment goals">

    </article>
  </section>

</template>

<style scoped>
  .heading {
    font-size: clamp(1.3rem, 5vw, 3rem)
  }
</style>
