<template>

  <div class="p-4 md:w-1/3">
    <div class="h-full rounded-xl 
     shadow-md bg-gradient-to-r 
     from-indigo-50 to-blue-50 overflow-hidden">
      <img class="lg:h-48 md:h-36 w-full 
       object-cover"
       :src="`${campaign.thumbnail}`" alt="thumbnail">

      <div class="p-6">
        <h1 class="text-base font-montserrat 
         font-medium text-gray-600 mb-3"
          v-html="campaign.title">
        </h1>

        <p class="leading-relaxed 
          mb-3 text-sm font-raleway"
          v-html="summary">
        </p>
        <div class="flex items-center flex-wrap ">

          <nuxt-link :to="`/campaign/${campaign._id}`"
           class="blue-btn py-2 
           rounded-lg text-white 
           font-poppins font-medium" >
            Learn more
           </nuxt-link> 
         
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  
    const props = defineProps({
      campaign: Object
    });

    const summary = props.campaign.summary + '...'   
</script>
