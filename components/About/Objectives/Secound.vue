<template>
    <article class="space-y-6 md:space-y-0 
       md:flex md:gap-6 lg:items-center lg:gap-12">

        <div class="md:w-7/12 lg:w-8/12">

          <h3 class="mt-8">
            2. RECYCLE AND TREATMENT OF USED WATER ALSO HARVEST THE RAIN WATER
          </h3>
          <p class="mt-6 sub-heading">
            RECYCLE & TREATMENT OF WASTE WATER
          </p>

          <p class="mt-4">
            Wastewater recycling enables more sustainable water usage and is an
            important step in combating climate change. The reduction of water
            wastage is particularly relevant to industrial manufacturers, who make up approximately 20% of global water consumption. Wastewater recycling systems make it possible for manufacturers to drastically reduce their water consumption, saving money and reducing the strain on local resources. Improved health and safety. Reduced water scarcity. Lower industrial costs. Meeting industry standards and regulations. Lowered strain on the environment.
          </p>
        </div>

     <div class="md:w-5/12 lg:w-6/12">
      <img class="rounded-md object-cover"
       src="/images/rain-water-harvesting.jpg" 
       alt="rain water harvesting">
      </div>

      </article>

   <article class="space-y-6 md:space-y-0">

      <div class="md:w-7/12 lg:w-8/12">
        <p class="mt-6 sub-heading">
        - RAIN WATER HARVESTING
        </p>

        <p class="mt-4">
          Rainwater harvesting is the simple process or technology used to conserve rainwater by
          collecting, storing, conveying and purifying of rainwater that runs off from rooftops, parks,
          roads, open grounds, etc. for later use. Rainwater harvesting systems consists of the
          following components: -
        </p>
      </div>


    </article>

  <article>
    <div>
      <ul class="mt-4 px-6">
        <li v-for="step in steps"
         class="list-decimal">
          <p v-html="step"></p>
        </li>
      </ul>
    </div>
   </article>

   <article>
    <h3>ADVANTAGES OF RAINWATER HARVESTING</h3>

    <p class='mt-4 sub-heading'>
     The benefits of the rainwater harvesting system are listed below. 
    </p>

    <div>
      <ul class="mt-4 px-6">
        <li v-for="step in steps"
         class="list-decimal">
          <p v-html="step"></p>
        </li>
      </ul>
    </div>
   </article>
</template>

<script setup>

 // rain water harvesting steps
 const steps = [
    'Catchment- Used to collect and store the captured rainwater.',
    'Conveyance system – It is used to transport the harvested water from the catchment to the recharge zone.',
    'Flush- It is used to flush out the first spell of rain.',
    'Filter – Used for filtering the collected rainwater and removing pollutants.',
    'Tanks and the recharge structures: Used to store the filtered water which is ready to use.'

  ]

  const advantages = [
    'Less cost',
    'Helps in reducing the water bill',
    'Decreases the demand for water',
    'Reduces the need for imported water',
    'Promotes both water and energy conservation',
    'Improves the quality and quantity of groundwater',
    'Does not require a filtration system for landscape irrigation',
    'This technology is relatively simple, easy to install and operate',
    'It reduces soil erosion, storm water runoff, flooding, and polluton',
    'f surface water with fertilizers, pesticides, metals and other sediments',
    'It is an excellent source of water for landscape irrigation with no',
    'chemicals, dissolved salts and free from all minerals.',
  ]
</script>

<style scoped>

  .heading {
    font-size: clamp(1.3rem, 2.5vw, 1.7rem)
  }

  .sub-heading {
    font-size: clamp(.9rem, 5vw, 1.2rem)
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
