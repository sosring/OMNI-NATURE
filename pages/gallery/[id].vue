<template>

  <section class="max-w-screen-xl mx-auto
   py-8 sm:py-12 space-y-6 px-4">

   <button class="orange-btn
    py-2 px-4 sm:text-lg"
    @click="$router.go(-1)">
      Back
   </button>

    <article class="text-center">

        <h3 class="my-4 md:my-8"
         v-html="gallery.title">
        </h3>

       <div class="grid sm:grid-cols-2
        lg:grid-cols-3 gap-4 md:gap-8">


         <div v-for="(image, index) in gallery.images"
          class="h-250 w-full relative 
          bg-gradient-to-br from-gray-100 
          to-gray-200 rounded-md overflow-hidden">
          <img class="absolute h-full 
           w-full object-cover object-bottom 
           cursor-pointer"
           :src="image"
           :alt="image">
         </div>
       </div>

      </article>

      <div v-if="showCarousel"
       class="carousel-wrapper fixed 
        top-0 left-0 right-0 bottom-0 
        z-10 backdrop-blur-sm flex 
        items-center justify-center">
      </div>
  </section>
</template>

<script setup>
  const id = useRoute().params.id
  const { data: gallery, error, pending } = await useFetch(`/api/gallery/${id}`)

  if(error.value) {
    throw createError({
      statusCode: 404,
      statusMessage: `A ${id} gallery does not exist!`
    })
  }

/*
  const showCarousel = ref(false)
  const carouselSlide = ref(0)

  function show (index) {
    showCarousel.value = true
    carouselSlide.value = index
  }
*/
</script>

<style scoped>
  .heading {
    font-size: clamp(1.5rem, 5vw, 3.7rem)
  }

  .para {
    font-size: clamp(.8rem, 2.5vw, 1.1rem);
  }

  h3 {
    @apply heading font-montserrat 
    text-secoundary font-bold uppercase
  }

  p {
    @apply para font-raleway text-gray-600
  }

  .carousel-wrapper {
    background: rgba( 0 0 0 / .4)
  }
</style>
