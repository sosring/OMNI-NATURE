<template>

    <div class="container px-5 
      mx-auto text-title">

      <h1 class="heading font-bold 
       py-8 text-secoundary uppercase">
        Campaigns
       </h1>

      <article>

       <div v-show="!pending"
        class="flex flex-wrap -m-4">
        <Campaign-Card 
         v-for="campaign in campaigns"
         :campaign="campaign" />
        </div>

        <Pagination 
         :page="page"
         :skip="skip"
         :previous="previous"
         :max="campaigns.length"
         :next="next"/>
      </article>

      <div v-if="pending">
        <Loading />
      </div>

      <div v-if="error">
        error
      </div>

    </div>
</template>

<script setup>
  
  const page = ref(1) 
  const limit = ref(3)

  const { data: campaigns, error, pending, refesh } = await useLazyFetch(
   '/api/campaign',
    { query: { page, limit }}
  )

  const skip = ref((page.value - 1) * limit.value)
  watch(page , (newValue) => {
    skip.value = (page.value - 1) * limit.value
  })

  function next() {
    page.value++
  }

  function previous() {
    page.value--
  }
</script>

<style scoped>
  .heading {
    font-size: clamp(1.5rem, 5vw, 4rem)
  }
</style>
