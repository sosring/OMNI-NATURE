<template>
  <div class="rounded-md bg-primary
    overflow-hidden shadow-gray-300
    shadow h-[90%]">
    <img class="h-4/5 w-full object-cover"
     :src="`/images/${card.img}.jpg`" 
     :alt="card.img">

     <p class="h-1/5 p-2 font-montserrat
      font-bold text-xs sm:text-sm
      text-center text-title flex 
      items-center justify-center">
      {{card.name}}
     </p>
  </div>
</template>

<script setup>
  
  const props = defineProps({
    card: {
      type: Object 
    }
  });
</script>
