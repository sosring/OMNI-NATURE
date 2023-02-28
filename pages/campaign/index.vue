<template>

    <div class="container px-5 
      mx-auto text-title">

      <h1 class="heading font-bold 
       py-8 text-secoundary uppercase">
        Campaigns
       </h1>

      <div class="flex flex-wrap -m-4">

        <Campaign-Card 
         v-for="campaign in campaigns"
         :campaign="campaign" />

      </div>
    </div>
</template>

<script setup>
 
  const { data: campaigns, error, pending } = await useFetch('/api/campaign')
</script>

<style scoped>
  .heading {
    font-size: clamp(1.5rem, 5vw, 4rem)
  }
</style>
