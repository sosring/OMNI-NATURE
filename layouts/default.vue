<template>
  <div class="h-screen w-screen
   overflow-x-hidden overflow-y-scroll
   scroll-smooth ">

    <TheNav 
    v-model:showSideNav="showSideNav"/>

    <TheSidebar 
    v-model:showSideNav="showSideNav"/>
    
    <main class="pt-20 sm:pt-28">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
  const showSideNav = ref(false)

  const toggleNav = () => {
    showSidebar.value = !showSideNav.value
  }
</script>

<style scoped>
  header {
    background: rgba( 255 255 255 / .9);
  } 
</style>
