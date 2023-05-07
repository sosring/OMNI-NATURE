<template>
  <section class="wrapper container 
   m-auto px-4 md:px-12 xl:px-6">

      <article class="space-y-6 md:space-y-0 
         md:flex md:gap-6 lg:items-center lg:gap-12">

        <div class="md:5/12 lg:w-8/12">
          <img class="rounded-md 
           h-full object-cover"
           src="/images/sustainable-environment.jpg" 
           alt="sustainable environment">
        </div>

        <div class="md:7/12 lg:w-6/12">
          <h2>
            Empowering Sustainability <br> Green Living for All
          </h2>
          <p class="mt-6">
            We care for Nature and make Society Sustainable by using Green energy resources and empowering people about the initiatives to be taken for making the Living habitat attached to nature.
          </p>
          <p class="mt-4">
            Humans Cannot Stop From Development Of Infrastructure Demands So We Have To Preserve The Natural-environment And Use Sustainable Technologies For Built-Environment.
          </p>

        </div>
      </article>

     <article class="my-6">
        <p>
        OMNI NATURE TECH FOUNDATION focus on green infrastructure,
        renewable energy , recycling of waste produced ,water treatment systems towards the society, related to sustainability. Sustainability is the ability to exist and develop without Depleting natural resources for the future.
        </p>

        <p class="mt-4">
        There are many benefits to sustainability, both short-term and long-
        term. We cannot maintain our Earth’s ecosystems or continue to
        function as we do if more sustainable choices are not made. If
        harmful processes are maintained with no change, it is likely that we
        will run out of fossil fuels, huge numbers of animal species will
        become extinct, and the atmosphere will be irreparably damaged.
        Clean air and nontoxic atmospheric conditions, growth of resources
        that can be relied upon, and water quality and cleanliness,
        are all benefits of sustainability.
        </p>
     </article>

     <div class="text-end">
      <a href="/OMNI.pdf" 
       download="OMNI" 
       class="blue-btn sm:py-3 
       text-xs uppercase">
       download our pdf
      </a>
     </div>
  </section>

  <section class=" my-8 sm:my-12 
   py-8 md:py-16 text-center
   bg-gradient-to-tr from-amber-200 
   to-cyan-500">

    <h3 class="quote font-bold 
     font-oswald text-gray-50">
      WE HUMANS MUST REALIZE THAT IN <br>
      ORDER TO SURVIVE ,WE MUST <br>
      HANDLE THE NATURE WITH CARE
   </h3>
  </section>
</template>

<script setup>
  import { useAnimate } from '~/composables/useAnimate'
  const { slide } = useAnimate()

  onMounted(() => {
    slide('.wrapper')
  })
</script>

<style scoped>

  .heading {
    font-size: clamp(1.1rem, 5vw, 1.7rem)
  }

  .quote {
    font-size: clamp(1.3rem, 3.5vw, 2rem)
  }

  .para {
    font-size: clamp(.8rem, 2.5vw, 1rem);
  }

  h2 {
    @apply heading font-montserrat text-secoundary font-bold
  }

  p {
    @apply para font-raleway text-gray-600
  }
</style>
