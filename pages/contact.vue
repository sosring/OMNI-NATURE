<template>
    
  <section class="grid 
   md:grid-cols-2">

    <div class="h-full w-full 
      bg-[url('/images/community.jpg')]
      bg-cover bg-footer">
    </div>

    <FormsContact />
  </section>
</template>

<script setup>
  const config = useRuntimeConfig()

  const contacts = [ 
    { label: 'Contact no.', detail: '9394494938/ <br> 9101576002', icon: 'call' },
    { label: 'Send Email', detail: 'omninaturecarefoundation @gmail.com', icon: 'mail' },
    { label: 'Contact no.', detail: '9394494938/ <br> 9101576002', icon: 'call' },
    { label: 'Visit Office', detail: 'HOUSE NO-11.BORA BHAWAN. RAJBARI PATH . GANESHGURI GUWAHATI -781005,ASSAM', icon: 'location' },
  ]
</script>
