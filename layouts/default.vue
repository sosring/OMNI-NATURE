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
     shadow-lg scroll-btn"
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
  import gsap from 'gsap'

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

  // ScrollToTop
  onMounted(() => {
    gsap.from( '.scroll-btn', {
      scrollTrigger: {
        trigger: '.scroll-btn',
        start: "20px 80%",
        end: "=+500",
        scrub: true,
        toggleAction: "restart pause resume none"
      }, 
      y: 20,
      opacity: 0,
      duration: .5,
      ease: 'in'
    })
  })
</script>

<style scoped>
  header {
    background: rgba( 255 255 255 / .9);
  } 
</style>
