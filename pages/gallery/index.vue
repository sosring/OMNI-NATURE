
<template>

    <div class="max-w-screen-xl 
     px-5 mx-auto text-title">

      <h1 class="heading font-bold 
       py-4 text-secoundary uppercase">
        Gallery
       </h1>

      <article>
        <div v-if="pending">
          <Loading />
        </div>

       <div v-else
        class="grid sm:grid-cols-2
        lg:grid-cols-3 gap-6 lg:gap-8
        mb-12">

        <Gallery-Card 
         v-for="{_id, title, images} in gallery"
         :images="images" 
         :title="title"
         :id="_id"/>
        </div>

      </article>

    </div>
</template>

<script setup>
  
  const page = ref(1)
  const limit = ref(3)

  const { data: gallery, pending, error, refesh } = await useFetch(
   '/api/gallery',
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
