<template>

    <div class="wrapper container 
     px-5 mx-auto text-title">

      <h1 class="heading font-bold 
       py-4 text-secoundary uppercase">
        Campaigns
       </h1>

      <article>

        <div v-if="pending">
          <Loading />
        </div>

       <div v-else
        class="wrapper grid sm:grid-cols-2
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
  import { useAnimate } from '~/composables/useAnimate'
  const { slide } = useAnimate()

  onMounted(() => {
    slide('.wrapper')
  })
  
  const page = useState('page', () => 1)
  const limit = ref(3)

  const { data: campaigns, pending, error } = await useFetch(
   '/api/campaign',
    { query: { page, limit }}
  )

  if(error.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Please check your network connection!'
    })
  }

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
    font-size: clamp(1.5rem, 5vw, 3.5rem)
  }
</style>
