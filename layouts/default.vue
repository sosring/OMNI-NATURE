<template>
  <div class="h-screen w-screen">

   <header class="fixed right-0 p-2 
    top-0 left-0 backdrop-blur z-20">
    <TheNav />
   </header>
    
    <main class="pt-32
     h-full w-full">
      <slot />
    </main>
  </div>
</template>

<style scoped>
  header {
    background: rgba( 255 255 255 / .9);
  } 
</style>
