<template>
    
  <section class="grid 
   md:grid-cols-2">

    <article class="relative">
      <div class="absolute top-1/2 
       left-1/2 -translate-x-1/2 
       -translate-y-1/2 grid gap-4">
        
        <div>
          <i class="material-symbols-outlined">mail</i>
        </div>

      </div>
    </article>

    <FormsContact />
  </section>
</template>

<script setup>
  const config = useRuntimeConfig()
  console.log(config.public)

  const contacts = [ 
    { label: 'Contact no.', detail: '9394494938/ <br> 9101576002', icon: 'call' },
    { label: 'Send Email', detail: 'omninaturecarefoundation @gmail.com', icon: 'mail' },
    { label: 'Contact no.', detail: '9394494938/ <br> 9101576002', icon: 'call' },
    { label: 'Visit Office', detail: 'HOUSE NO-11.BORA BHAWAN. RAJBARI PATH . GANESHGURI GUWAHATI -781005,ASSAM', icon: 'location' },
  ]
</script>
