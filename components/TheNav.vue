<template>

  <nav class="max-w-screen-xl 
   mx-auto flex justify-between">

    <nuxt-link to="/"
     class="flex items-end">

      <img src="/images/Omni-logo.png" 
       class="h-28 w-28 object-cover"
       alt="omni care logo">

       <h1 class="hidden sm:block 
        sm:py-3 text-title
        sm:text-2xl font-oswald">
        OMNI NATURE CARE <br> FOUNDATION
       </h1>
    </nuxt-link>

  <span class="hidden
   sm:grid text-xl p-2">

    <div class="flex justify-end
      items-end gap-3 text-base">

      <button class="join-btn"
       @click="$router.push({ path: '/join' })">
        JOIN US
      </button>

      <button class="donate-btn"
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
  </span>
  </nav>
</template>

<script setup>

  const routes = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Campign', path: '/campaign' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ]
</script>
