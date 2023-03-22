<template>
  
<footer class="bg-footer">

  <div class="container mx-auto
    px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 
     lg:gap-10 lg:grid-cols-3">

     <div>
      <nuxt-link to="/"
       class="flex items-end border-b-4 
       border-secoundary py-1
       space-x-4">

        <img src="/images/Omni-logo.png" 
         class="h-28 w-28 object-cover"
         alt="omni care logo">

         <h3 class="py-3 text-title 
          text-xl sm:text-2xl font-oswald">
          OMNI NATURE <br> CARE FOUNDATION
         </h3>
      </nuxt-link>

        <div class="flex mt-8 
         text-2xl md:text-4xl">

          <a :href="useDetails.map"
          target="_blank"
          class="address leading-snug 
          font-montserrat font-bold
          text-title duration-150
          md:hover:opacity-75 
          cursor-pointer"
          v-html="useDetails.location">
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8 
       lg:col-span-2 lg:grid-cols-4
       lg:pt-24">
        <div>
          <p class="footer-items">
            Navigation
          </p>

          <nav class="flex flex-col 
            mt-4 space-y-2">

            <nuxt-link v-for="nav in navs"
             class="footer-links md:hover:opacity-75"
             :to="nav.path"> {{ nav.label }} </nuxt-link>
          </nav>
        </div>

        <div>
          <p class="footer-items">
            Contact Us
          </p>

          <nav class="flex flex-col mt-4 
           space-y-4 text-sm">

            <a class="footer-links flex gap-2
             item-center md:hover:opacity-75" 
             :href="`mailto:${useDetails.email}`">

              <i class="material-symbols-outlined"> alternate_email </i>
              <p v-html="useDetails.email" 
              class="text-xs"></p>
            </a>

           <div class="footer-links flex 
            gap-2 md:hover:opacity-75 ">

            <i class="material-symbols-outlined"> phone_in_talk </i>
            <div>
              <a class="md:hover:opacity-75 " 
               :href="`tel:${useDetails.num1}`">
                <p v-html="useDetails.num1"></p>
              </a>

              <a class="md:hover:opacity-75 " 
               :href="`tel:${useDetails.num2}`">
                <p v-html="useDetails.num2"></p>
              </a>
            </div>
           </div>
          </nav>
        </div>

        <div>
          <p class="footer-items">
            Legal
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm">
            <nuxt-link v-for="legal in legals"
             class="footer-links hover:opacity-75"
             :to="legal.path"> {{ legal.label }} </nuxt-link>
          </nav>
        </div>

        <div>
          <p class="footer-items">
            Socials
          </p>

          <nav class="flex mt-4 gap-2 
           text-2xl text-title">

            <a v-for="social in socials"
             :class="`md:hover:opacity-75 
             fab ${social.icon} 
             cursor-pointer`" 
             :href="social.path"
             target="blank"> </a>
          </nav>
        </div>
      </div>

    </div>
    <p class="mt-8 text-xs text-title">
      © 2022 OMNI NATURE CARE FOUNDATION 
    </p>

    <span class="text-xs text-gray-700">
      Made with 
      <i class="fa fa-heart text-red-500"></i> in 
      <a class="mt-8 text-orange-500
        hover:text-orange-400 font-bold"
        :href="useDetails.dev" target="blank">
        Scratchlab
      </a>
    </span>
  </div>
 </footer>

</template>

<script setup>
  import { useDetailStore } from '~/stores/useDetails'

  const useDetails = useDetailStore()

  const navs = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Campaign', path: '/campaign' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
    //{ label: 'Donate', path: '/donate' },
    { label: 'Join us', path: '/join' }
  ] 

  const legals = [
    { label: 'Privacy Policy', path: '/policy'},
    { label: 'Terms & Conditions', path: '/terms' }
  ]

  const socials = [
    { icon: 'fa-facebook', path: useDetails.facebook },
    { icon: 'fa-instagram', path: useDetails.instagram },
  ]
</script>

<style scoped>
  .address {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }
</style>
