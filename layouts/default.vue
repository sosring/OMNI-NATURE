<template>
  <div class="h-screen w-screen
   overflow-x-hidden overflow-y-scroll
   scroll-smooth ">

    <TheNav 
    v-model:showSideNav="showSideNav"/>

    <TheSidebar 
    v-model:showSideNav="showSideNav"/>

    <a class="material-symbols-outlined 
     fixed right-8 bottom-20 bg-secoundary
     z-20 text-primary p-2 rounded-full
     shadow-lg" 
     href="mailto: omninaturecarefoundation@gmail.com">
      mail
    </a>
    
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
