<template>
  <article class="space-y-6 md:space-y-0 
     md:flex md:gap-6 lg:items-center lg:gap-12">

      <div class="md:w-7/12 lg:w-8/12">

        <h3 class="mt-8">
          4. MAKE THE SOCIETY NET ZERO CARBON EMISSIONS AND ECO-FRIENDLY TOWARDS NATURE
        </h3>
        <p class="mt-6">
          The most feasible pathways to net-zero emissions include four main strategies:
          Generate electricity without emissions. Use vehicles and equipment that are
          powered by electricity instead of fossil fuels. Use energy more efficiently.
          Remove carbon dioxide from the atmosphere. Net zero refers to a state in which the
          greenhouse gases going into the atmosphere are balanced by removal out
          of the atmosphere.
        </p>

        <p class="mt-4 sub-heading">
          The term net zero is important because –
          For CO2 at least – this is the state at which global warming stops. The Paris Agreement underlines the need for net zero. It requires   states to ‘achieve a balance between anthropogenic  emissions by sources and removals by sinks of greenhouse gases in the second half of this century’.
        </p>
      </div>

     <div class="md:w-5/12 lg:w-6/12">
      <img class="rounded-md object-cover"
       src="/images/carbon-credit-illustration.png" 
       alt="carbon credit illustration">
      </div>

    </article>
</template>

<style scoped>

  .heading {
    font-size: clamp(1.3rem, 2.5vw, 1.5rem)
  }

  .sub-heading {
    font-size: clamp(.9rem, 5vw, 1.2rem);
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
