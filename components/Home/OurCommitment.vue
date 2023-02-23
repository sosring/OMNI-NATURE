<template>
  
  <section class="relative">

    <article class="max-w-screen-xl 
     mx-auto text-title py-8 px-4 
     lg:px-16">

      <h3 class="heading font-montserrat 
       font-bold mb-2 sm:mb-8">
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
    @swiper="onSwiper"
    @slideChange="onSlideChange"
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
      <HomeCard 
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

  .polygon {
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    background: linear-gradient(293.21deg, rgba( 0 0 0 / .2) 40.98%, rgba(185, 199, 210, .2) 102.93%), url('images/plant.jpg');
    background-size: cover;
    position: absolute;
    top: 0%;
    right: 0%
  }
  
  .swiper {
    height: 250px;
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
      position: absolute;
      margin-top: 3rem
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

  @media (min-width: 640px) {
    .swiper {
      height: 350px;
    }
  }

  @media (min-width: 1040px) {
    .swiper-slide {
      width: 40%
    }
  }
</style>
