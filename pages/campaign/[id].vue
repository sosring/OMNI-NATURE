<template>

  <section class="max-w-screen-xl mx-auto
   py-8 sm:py-12 space-y-6 px-4">

   <button class="orange-btn
    py-2 px-4 sm:text-lg"
    @click="$router.go(-1)">
      Back
   </button>

    <article class="space-y-6 md:space-y-0 
       md:flex md:gap-6 lg:items-center lg:gap-12">

       <div class="md:w-5/12 lg:w-6/12">
        <img class="rounded-md object-cover"
         :src="campaign.thumbnail" 
         alt="campaign.thumbnail">
        </div>

        <div class="md:w-7/12 lg:w-8/12">

          <h3 class="mt-8"
           v-html="campaign.title">
          </h3>

          <p class="mt-6"
           v-html="campaign.description">
          </p>
        </div>
      </article>
  </section>
</template>

<script setup>
  const id = useRoute().params.id

  const { data: campaign, pending, error } = await useFetch(`/api/campaign/${id}`) 

  if(!campaign) {
    throw createError({
      statusCode: 404,
      statusMessage: 'No such campaign is available!'
    })
  }

</script>

<style scoped>
  .heading {
    font-size: clamp(1.3rem, 2.5vw, 1.7rem)
  }

  .para {
    font-size: clamp(.8rem, 2.5vw, 1.1rem);
  }

  h3 {
    @apply heading font-montserrat 
    text-title font-medium
  }

  p {
    @apply para font-raleway text-gray-600
  }
</style>
