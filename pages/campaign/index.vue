<template>

    <div class="max-w-screen-xl 
     px-5 mx-auto text-title">

      <h1 class="heading font-bold 
       py-4 text-secoundary uppercase">
        Campaigns
       </h1>

      <article>

        <div v-show="pending">
          <Loading />
        </div>

       <div v-show="!pending"
        class="grid sm:grid-cols-2
        lg:grid-cols-3 gap-6 lg:gap-8">

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

    </div>
</template>

<script setup>
  
  const page = useState('page', () => 1)
  const limit = ref(3)

  const { data: campaigns, pending, error, refesh } = await useFetch(
   '/api/campaign',
    { query: { page, limit }}
  )

  const skip = ref(page.value * limit.value)
  watch(page , (newValue) => {
    skip.value = page.value * limit.value
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
