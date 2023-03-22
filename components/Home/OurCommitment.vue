<template>
  
  <section class="relative">

  <article class="diagonal container 
   mx-auto text-title py-8 px-4 z-10">

    <h3 class="heading font-montserrat 
     text-gray-50 z-10 font-bold mb-2 sm:mb-8">
      Our Commitment to <br> Improving Society.
    </h3>

    <swiper
      :modules="[Pagination, Autoplay,  Mousewheel]"
      :loop="false"
      slides-per-view="auto"
      :space-between="30"
      :grabCursor="true"
      :mousewheel="true"
      :scrollbar="{ draggable: true }"
      :pagination="{ 
       clickable: true,
       dynamicBullets: true
      }"
      :autoplay="{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false 
      }">

      <swiper-slide v-for="card in cards">
        <Home-Card 
         :card="card"/>
      </swiper-slide>
    </swiper>
  </article>
 </section>

</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, Autoplay, Pagination } from 'swiper';

  import "swiper/css/pagination"
  import 'swiper/css';

    const cards = [
    { name: 'Sustainable tech promotion', img: "sustainable-tech" },
    { name: 'Green energy empowerment and guidance', img: 'green-empowerment' },
    { name: 'Educate youth on sustainability', img: 'educate-youth' },
    { name: 'Environmental protection through efficiency', img: 'environmental-protection' }
  ]
</script>

<style scoped>
  .heading {
    font-size: clamp(1.3rem, 5vw, 3.5rem)
  }

  .tagline {
    font-size: clamp(1rem, 5vw, 1.3rem);
  }

  .diagonal  {
    isolation: isolate;
  }

  .diagonal::after {
    content: '';
    background: linear-gradient(rgba( 0 0 0 / .4) 40.98%, rgba(185, 199, 210, .1) 102.93%), url('/images/plant.jpg');
    background: cover;
    position: absolute;
    inset: 0;
    z-index: -1;
    transform: skewY(-3deg)
  }

  .diagonal::before {
    content: '';
    background: linear-gradient(rgba( 0 0 0 / .4) 40.98%, rgba(185, 199, 210, .1) 102.93%), url('/images/plant.jpg');
    background: cover;
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: .2;
    transform: skewY(3deg)
  }

  .swiper {
    height: 200px;
    width: min(1140px, 100%);
    padding: 1rem;
    position: relative;
  }

  .swiper-slide {
    height: 100%;
    width: 90%
  }


  .sliderWrapper {
    :global(.swiper-pagination-bullet) {
      background: #000000;
    }
    :global(.swiper-pagination-bullet-active) {
      background:  #f59b48;
    }
 }

  @media(min-width: 480px) {
    .swiper-slide {
      width: 60%
    }
  }

  @media (min-width: 540px) {
    .swiper {
      height: 300px;
    }
  }

  @media (min-width: 1040px) {
    .swiper-slide {
      width: 40%
    }
  }
</style>
