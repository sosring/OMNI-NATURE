<template>

  <article class="rounded-xl shadow-md 
   bg-gradient-to-r from-indigo-50 
   to-blue-50 overflow-hidden">

      <img class="lg:h-48 md:h-36 
       w-full object-cover"
       :src="`${images[0]}`" 
       :alt="images[0]">

      <div class="py-2 px-4 flex justify-between">
        <h1 class="text-sm lg:text-lg font-bold
         font-montserrat text-gray-500"
          v-html="title">
        </h1>

        <nuxt-link :to="`/gallery/${id}`"
         class="orange-btn">
          view
         </nuxt-link>
      </div>
    </article>

</template>

<script setup>
  
    const props = defineProps({
      images: {
        type: Array
      },
      title: {
        type: String
      },
      id: {
        type: String
      }
    });
</script>
