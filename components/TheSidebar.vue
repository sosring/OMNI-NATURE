<template>
  
  <aside v-if="showSideNav"
    class="fixed bg-primary z-40
    rounded h-screen w-screen px-2
    py-12 "
    :class="animationType"
    ref="sidebarRef">

    <nuxt-link to="/"
     @click="closeSidebar"
     class="flex justify-between 
     items-end py-4 border-b-4 
     border-secoundary">

      <img src="/images/Omni-logo.png" 
       class="h-20 object-cover"
       alt="omni care logo">

       <h1 class=" text-title 
        text-xl font-oswald">
        OMNI NATURE <br> CARE FOUNDATION
       </h1>

       <button class="material-symbols-outlined">
        close
       </button>

    </nuxt-link>


		<div class="px-3 py-4">
			<ul class="p-2 grid justify-end">
        <li v-for="route in routes">
          <nuxt-link :to="route.path"
           @click="closeSidebar"
           class="link flex items-end gap-4 my-2">
            
            <i class="material-symbols-outlined">
             {{route.icon}}</i>
            <p> {{ route.label }} </p>
          </nuxt-link>
        </li>
      </ul>
		</div>
  </aside>
</template>

<script setup>
  const routes = [
    { icon: 'home', label: 'Home', path: '/' },
    { icon: 'docs_apps_script', label: 'About', path: '/about' },
    { icon: 'compost', label: 'Campign', path: '/campaign' },
    { icon: 'gallery_thumbnail', label: 'Gallery', path: '/gallery' },
    { icon: 'call', label: 'Contact us', path: '/contact' },
    { icon: 'join', label: 'Join us', path: '/join' },
    { icon: 'currency_rupee', label: 'Donate', path: '/donate' },
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

  const sidebarRef = ref('')
  const sidebarMounted = ref(null) 

  const animationType = computed(() => {
    return sidebarMounted.value ? 'sidebar-leave' : 'sidebar-enter' 
  })

  const closeSidebar = () =>  {
   sidebarMounted.value = true
   setTimeout(() => {
     emits('update:showSideNav', false)
     sidebarMounted.value = false 
   }, 500);
  }
</script>

<style scoped>
  .sidebar-wrapper {
    background: rgba(0 0 0 / .4);
    backdrop-filter: blur(4px);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
  }
  .sidebar-enter {
   animation: enter .5s normal;
  }
  .sidebar-leave {
   animation: leave .5s normal;
  }
  @keyframes enter {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes leave {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
</style>
