<template>

  <article class="rounded-xl shadow-md 
   bg-gradient-to-r from-indigo-50 
   to-blue-50 overflow-hidden">

     <div class="h-36 lg:h-48 relative 
      bg-gradient-to-br from-slate-100 
      to-slate-300">
      <img class="absolute
       h-full w-full object-cover"
       :src="`${images[0]}`" 
       :alt="images[0]">
     </div>

      <div class="py-2 px-4 flex justify-between">
        <h1 class="text-sm lg:text-lg font-bold
         font-montserrat text-title"
          v-html="title">
        </h1>

        <nuxt-link :to="`/gallery/${id}`"
         class="blue-btn">
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
