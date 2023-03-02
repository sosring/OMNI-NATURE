<template>

  <article class="space-y-6 md:space-y-0 
     md:flex md:gap-6 lg:items-center lg:gap-12">

     <div class="md:w-5/12 lg:w-6/12">
      <img class="rounded-md object-cover"
       src="/images/green-empowerment.jpg" 
       alt="solar power industry">
      </div>

      <div class="md:w-7/12 lg:w-8/12">

        <h3 class="mt-8">
          1. PROMOTE SOLAR ENERGY TECHNOLOGIES <br> (URBAN & RURAL)
        </h3>
        <p class="mt-6">
          Solar is a renewable energy source that is free of dangerous
          carbon emissions. With solar, we can create cleaner power and
          protect the environment from climate change.
        </p>

        <p class="mt-4">
          Lighting Up Darkness In Villages. Enabling Children To Study At Night.
          Run Food Processing Machines Easily. Power can develop many Sectors in villages.
          END-UP POWER POVERTY IN VILLAGES.
        </p>
      </div>
    </article>

   <article class="grid gap-4
    lg:grid-flow-col">

    <div>
     <h3>USES IN URBAN AREA -</h3>

      <ul class="mt-4 px-6">
        <li v-for="urban in urbans"
         class="list-decimal">
          <p v-html="urban"></p>
        </li>
      </ul>
    </div>

    <div>
     <h3>USES IN RURAL AREA -</h3>

      <ul class="mt-4 px-6">
        <li v-for="rural in rurals"
         class="list-decimal">
          <p v-html="rural"></p>
        </li>
      </ul>
    </div>

    <div>
      <h3>ADVANTAGES OF SOLAR ENERGY</h3>

      <div>
        <ul class="mt-4 px-6">
          <li v-for="advantage in advantages"
           class="list-decimal">
            <p v-html="advantage"></p>
          </li>
        </ul>
      </div>
     </div>
   </article>
</template>

<script setup>
  
  const urbans = [
    'RESIDENTIAL BUILDINGS.', 
    'COMMERCIAL BUILDINGS.', 
    'HOSPITAL BUILDING.', 
    'HOTELS & TOURISM ESTABLISHMENTS.',
    'INSITUTIONAL BUILDINGS.',
    'OFFICE BUILDINGS(GOVT & PRIVATE).',
    'PARKING SPACES.',
    'RECREATIONAL SPACES',
    'INDUSTRIES.'
  ] 

  const rurals = [
    'AGRICULTURE WATER SYSTEM.',
    'HOUSEHOLD SOCIETY.',
    'SCHOOLS.',
    'PUBLIC SPACES.',
  ]

  const advantages = [
    'Renewable energy source',
    'Safe option',
    'Long lasting solution',
    'Government incentives',
    'Easy instalment',
    'Improved efficiencies',
    'Return on investment'
  ]
</script>

<style scoped>

  .heading {
    font-size: clamp(1.1rem, 5vw, 2.1rem)
  }

  .sub-heading {
    font-size: clamp(1.3rem, 2.5vw, 1.7rem)
  }

  .para {
    font-size: clamp(.8rem, 2.5vw, 1.1rem);
  }

  h3 {
    @apply sub-heading font-montserrat 
    text-title font-medium
  }

  p {
    @apply para font-raleway text-gray-600
  }
</style>
