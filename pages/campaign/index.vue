<template>

    <div class="container px-5 
     py-24 mx-auto text-title">
      <div class="flex flex-wrap -m-4">

        <Campaign-Card 
         v-for="i in 3" />

      </div>
    </div>
</template>

<style scoped>
  .heading {
    font-size: clamp(1.5rem, 5vw, 4rem)
  }
</style>
