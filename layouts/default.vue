<template>
  <div class="h-screen 
   w-screen scroll-smooth">

    <TheNav 
    v-model:showSideNav="showSideNav"/>

    <TheSidebar 
    v-model:showSideNav="showSideNav"/>

    <button class="material-symbols-outlined 
     fixed right-8 bottom-20 bg-highlight
     z-20 text-primary p-2 rounded-full
     shadow-lg"
     @click="scrollTop">
      arrow_upward
    </button>

    <PopupModel
     v-model:show="popup"/>
    
    <main class="pt-24 sm:pt-28">
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

  function scrollTop () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Popup Logic

  const popup = ref(false)

  setTimeout(() => {
    popup.value = true
  }, 10000);

</script>

<style scoped>
  header {
    background: rgba( 255 255 255 / .9);
  } 
</style>
