<template>

  <article class="rounded-xl shadow-md 
   bg-gradient-to-r from-indigo-50 
   to-blue-50 overflow-hidden
   h-300 sm:h-350">

     <div class="h-36 lg:h-48 relative 
      bg-gradient-to-br from-slate-100 
      to-slate-300">
      <img class="absolute
       h-full w-full object-cover"
       :src="`${campaign.thumbnail}`" 
       :alt="campaign.thumbnail">
     </div>

      <div class="p-4">
        <h3 class="text-sm md:text-base 
         font-montserrat font-medium text-gray-600 mb-2"
          v-html="campaign.title.slice(0,30) + '..'">
        </h3>

        <p class="leading-relaxed mb-2
         text-xs font-raleway break-all"
          v-html="summary">
        </p>

        <div class="flex items-center flex-wrap ">

          <nuxt-link :to="`/campaign/${campaign._id}`"
           class="blue-btn text-xs rounded 
           text-white font-poppins" >
            Learn more
          </nuxt-link> 
         
        </div>
      </div>
    </article>
</template>

<script setup>
  
    const props = defineProps({
      campaign: Object
    });

    const summary = props.campaign.description.slice(0, 150) + '...'   
</script>
