<template>

  <section class="grid 
   md:grid-cols-2">
    <div class="h-full w-full 
      bg-[url('/images/community.jpg')]
      bg-cover bg-footer">
    </div>

    <TheForm />
  </section>
</template>

<script setup>
  useHead({
    title: 'OMNI NATURE CARE FOUNDATION | JOIN US | REGISTRATION'
  })
</script>

<style scoped>

  .heading {
    font-size: clamp(1.5rem, 5vw, 3rem)
  }

  .sub-heading {
    font-size: clamp(1.1rem, 5vw, 1.7rem);
  }
</style>
