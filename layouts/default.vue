<template>
  <div class="h-screen w-screen
   overflow-x-hidden">

    <TheNav />
    
    <main class="pt-32">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
  header {
    background: rgba( 255 255 255 / .9);
  } 
</style>
