<template>
  <div class="h-screen 
   w-screen scroll-smooth
   overflow-x-hidden">

    <TheNav 
    v-model:showSideNav="showSideNav"/>

    <TheSidebar 
    v-model:showSideNav="showSideNav"/>

    <nuxt-link to="/contact"
     class="material-symbols-outlined 
     fixed right-8 bottom-20 bg-secoundary
     z-20 text-primary p-2 rounded-full
     shadow-lg">
      mail
    </nuxt-link>
    
    <main class="pt-20 
     sm:pt-28">
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
  .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
