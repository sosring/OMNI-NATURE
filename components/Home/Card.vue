<template>
  <div class="rounded-md
    overflow-hidden shadow-md">
    <img class="h-[150px] sm:h-250 w-full object-cover"
     :src="`/images/${card.img}.jpg`" 
     :alt="card.img">

     <p class="py-4 sm:px-1 font-montserrat
      font-bold text-xs sm:text-sm
      text-center text-title">
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
