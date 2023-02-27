<template>

  <section class="max-w-screen-xl mx-auto
    m-auto px-4 md:px-12 xl:px-6">
    <article class="space-y-6 md:space-y-0 
     md:flex md:gap-6 lg:items-center lg:gap-12">

      <div class="md:5/12 lg:w-8/12">
        <img class="rounded-md"
         src="/images/four-pillars.jpg" 
         alt="four pillars illustration">
      </div>

      <div class="md:7/12 lg:w-6/12">
        <h3 class="text-secoundary">
          IMPACT FOR SUSTAINABILITY
        </h3>
        <p class="mt-6">
          The concept of sustainability is composed of four pillars:
        </p>
        <p class="mt-4">
          Environmental protection is the most frequently discussed element. It is concerned with the reduction of carbon footprints, water usage, non-decomposable packaging, and wasteful processes as part of a supply chain. These processes can often be cost-effective, and financially useful as well as important for environmental sustainability.
        </p>
      </div>

    </article>

    <article class="mt-4 sm:mt-12">
      <h3 class="text-secoundary">
        OUR MISSION TOWARDS SOCIETY
      </h3>

      <div class="p-4 sm:p-6">
        <ul class="space-y-4 sm:space-y-6">
          <li v-for="mission in missions"
           class="list-disc">
            <p v-html="mission"></p> 
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script setup>
  const missions = [
   'To Promote Sustainable Technologies Within The Society.',
   'To Empower Private Business Institutions, Establishments, Schools And Colleges And Private Residences Towards The Use Of Green Energy And Guide Them To Recycle And Reuse The Natural Energy.',
   'To Educate the Youth of the remote areas about the technologies of Sustainable process that are done so that they can use the knowledge and move forward our goal and thereby earning a livelihood through it.',
   'Environmental protection is the most frequently discussed element. It is concerned with the reduction of carbon footprints, water usage, non decomposable packaging, and wasteful processes as part of a supply chain. These processes can often be cost- effective, and financially useful as well as important for environmental sustainability.' ]
</script>

<style scoped>

  .heading {
    font-size: clamp(1.1rem, 5vw, 2.1rem)
  }

  .para {
    font-size: clamp(.8rem, 2.5vw, 1.1rem);
  }

  h3 {
    @apply heading font-montserrat font-bold
  }

  p {
    @apply para font-raleway text-gray-600
  }
</style>
