<template>

  <div class="p-4 md:w-1/3">
    <div class="rounded-xl 
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

          <nuxt-link :to="`/campaign/${campaign._id}`"
           class="blue-btn py-2 
           rounded-md text-white 
           font-poppins font-medium" >
            VIEW
           </nuxt-link> 
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
