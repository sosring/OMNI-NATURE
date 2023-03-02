<template>

  <article class="rounded-xl shadow-md 
   bg-gradient-to-r from-indigo-50 
   to-blue-50 overflow-hidden xl:h-400">

     <div class="lg:h-48 md:h-36 relative 
      bg-gradient-to-br from-slate-100 
      to-slate-300">
      <img class="absolute
       h-full w-full object-cover"
       :src="`${campaign.thumbnail}`" 
       :alt="campaign.thumbnail">
     </div>

      <div class="p-6">
        <h1 class="text-sm lg:text-base 
         font-montserrat font-medium text-gray-600 mb-3"
          v-html="campaign.title.slice(0,32) + '..'">
        </h1>

        <p class="leading-relaxed mb-3 
        text-xs lg:text-sm font-raleway
        break-all"
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
    </article>
</template>

<script setup>
  
    const props = defineProps({
      campaign: Object
    });

    const summary = props.campaign.description.slice(0, 150) + '...'   
</script>
