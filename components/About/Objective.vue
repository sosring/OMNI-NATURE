<template>

  <section class="container
   m-auto p-4 md:p-12 xl:px-6
   space-y-4 sm:space-y-6">

     <h2>
       OUR OBJECTIVE IS TO PROMOTE <br>
       GREEN DEVELOPETMENT WITH NATURE 
     </h2>

     <About-Objectives-First />
     <About-Objectives-Secound />
     <About-Objectives-Third />
     <About-Objectives-Fourth />
  </section>

</template>

<style scoped>

  .heading {
    font-size: clamp(1rem, 5vw, 1.7rem)
  }

  h2 {
    @apply heading font-montserrat 
    text-secoundary font-bold
  }

</style>
