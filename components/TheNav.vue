<template>

 <header class="fixed right-0 
  top-0 left-0 backdrop-blur z-30
  shadow">

  <nav class="max-w-screen-xl mx-auto 
   flex justify-between pr-2 sm:px-2">

    <nuxt-link to="/"
     class="flex items-end 
     bg-orange-200 px-4 py-2">

      <img src="/images/Omni-logo.png" 
       class="h-20 sm:h-24 object-cover"
       alt="ONC FOUNDATION LOGO">

       <h1 class="hidden sm:block 
        sm:py-3 text-gray-700 text-xl 
        lg:text-2xl font-oswald">
        OMNI NATURE CARE <br> FOUNDATION
       </h1>
    </nuxt-link>

  <div class="flex flex-col items-end  
  justify-end md:hidden gap-2">

    <button 
     type="button"
     class="blue-btn"
     @click="$router.push({ path: '/join' })">
      JOIN US
    </button>
    
    <button 
     type="button"
     @click="toggleNav"
     class="material-symbols-outlined">
      {{ mobileBtn }}
    </button>
  </div>

  <div class="hidden
   md:grid text-xl p-2">

    <div class="flex justify-end
      items-end gap-3 text-base">

      <button 
       type="button"
       class="blue-btn"
       @click="$router.push({ path: '/join' })">
        JOIN US
      </button>

      <button 
       type="button"
       class="orange-btn"
       @click="$router.push({ path: '/donate' })">
        DONATE
      </button>
    </div>

    <ul class="flex gap-4 items-end">
      <li v-for="route in routes">
        <nuxt-link :to="route.path"
         class="link">
          {{ route.label }}
        </nuxt-link>
      </li>
    </ul>
  </div>
  </nav>
 </header>

</template>

<script setup>

  const routes = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Campaign', path: '/campaign' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ]

  const props = defineProps({
     showSideNav: {
      type: Boolean
     }
  });

  const emits = defineEmits(['update:showSideNav'])

  const mobileBtn = computed(() => {
    return props.showSideNav ? 'Close' : 'Menu'
  })

  const toggleNav = () => emits('update:showSideNav', props.showSideNav = !props.showSideNav)
</script>

<style scoped>
  header {
    background: rgba( 255 255 255 / .9);
  } 
</style>
