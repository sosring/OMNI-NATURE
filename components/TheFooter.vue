<template>
  
<footer class="bg-footer">

  <div class="max-w-screen-xl px-4  
    py-8 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 
     xl:gap-20 xl:grid-cols-3">

     <div>
      <nuxt-link to="/"
       class="flex items-end border-b-4 
       border-secoundary py-1
       space-x-4">

        <img src="/images/Omni-logo.png" 
         class="h-28 w-28 object-cover"
         alt="omni care logo">

         <h1 class="py-3 text-title 
          text-xl sm:text-2xl font-oswald">
          OMNI NATURE <br> CARE FOUNDATION
         </h1>
      </nuxt-link>

        <div class="flex mt-8 
         text-2xl md:text-4xl">

          <a href="https://www.google.com/maps/place/NEOPHILIC+SOLUTIONS+OPC+PRIVATE+LIMITED/@26.151502,91.7803747,17z/data=!3m1!4b1!4m5!3m4!1s0x375a593d9546d6e1:0xa5180beb2533bdc8!8m2!3d26.1514972!4d91.7825634"
          target="_blank"
          class="address leading-snug 
          font-montserrat font-bold
          text-title duration-150
          hover:opacity-75">
          HOUSE NO-11.BORA BHAWAN. <br>
          RAJBARI PATH . GANESHGURI <br>
          GUWAHATI -781005,ASSAM
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8 
       lg:col-span-2 xl:grid-cols-4
       xl:pt-24">
        <div>
          <p class="footer-items">
            Navigation
          </p>

          <nav class="flex flex-col 
            mt-4 space-y-2">

            <nuxt-link v-for="nav in navs"
             class="footer-links hover:opacity-75"
             :to="nav.path"> {{ nav.label }} </nuxt-link>
          </nav>
        </div>

        <div>
          <p class="footer-items">
            Contact Us
          </p>

          <nav class="flex flex-col mt-4 
           space-y-4 text-sm ">
            <a class="footer-links 
             hover:opacity-75 flex gap-2" 
             href="mailto:omninaturecarefoundation @gmail.com">

              <i class="material-symbols-outlined"> alternate_email </i>
              <p> omninaturecarefoundation @gmail.com </p>
            </a>

           <div class="footer-links flex gap-2 hover:opacity-75 ">

            <i class="material-symbols-outlined"> phone_in_talk </i>
            <span>
              <a class="hover:opacity-75 " 
               href="tel:9394494938">
                <p>9394494938</p>
              </a>

              <a class="hover:opacity-75 " 
               href="tel:9101576002">
                <p>9101576002</p>
              </a>
            </span>
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
            <a class="hover:opacity-75 
             fab fa-facebook" href=""> </a>
            <a class="hover:opacity-75 
            fab fa-instagram" href=""> </a>
          </nav>
        </div>
      </div>

    </div>
    <p class="mt-8 text-xs text-title">
      © 2022 OMNI NATURE CARE FOUNDATION 
    </p>
    <a class="mt-8 text-xs text-title"
     href="https://github.com/sosring" target="blank">
      WEBSITE DEVELOPER
    </a>
  </div>
 </footer>

</template>

<script setup>

  const navs = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Campign', path: '/campign' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
    { label: 'Donate', path: '/donate' },
    { label: 'Join us', path: '/join' },
  ] 

  const legals = [
    { label: 'Privacy Policy', path: '/policy'},
    { label: 'Terms & Conditions', path: '/terms' }
  ]

  const config = useRuntimeConfig()
</script>

<style scoped>
  .address {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }
</style>
