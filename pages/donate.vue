<template>

  <section class="grid 
   md:grid-cols-2">

    <div class="h-full w-full 
      bg-[url('/images/community.jpg')]
      bg-cover bg-footer">
    </div>

    <FormsDonation />

  </section>
</template>

<script setup>
  useHead({
    title: 'OMNI NATURE CARE FOUNDATION | DONATE'
  })
</script>

<style scoped>

  .heading {
    font-size: clamp(1.3rem, 5vw, 2.7rem)
  }

  .para {
    font-size: clamp(.9rem, 5vw, 1.2rem);
  }
</style>
