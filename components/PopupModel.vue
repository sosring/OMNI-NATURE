<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="closeModal" 
     class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
         <div
          class="flex min-h-full items-center 
          justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">

            <DialogPanel class="model w-full max-w-md md:max-w-xl
             lg:h-auto transform overflow-hidden rounded-2xl 
             text-left align-middle shadow-xl transition-all text-gray-100
             font-bold font-montserrat py-6 px-4 md:p-8 relative">

             <button 
              @click="closeModal"
              class="material-symbols-outlined
              absolute right-4 top-4/5">
               close 
             </button>

              <DialogTitle as="h3"
                class="heading py-1">
                Hey there!
              </DialogTitle>

              <div class="mt-2">
                <p class="para text-sm 
                 leading-snug sm:w-4/4
                 sm:my-6">
                  Thanks for stopping by! Want to make a 
                  positive impact in the world? Consider 
                  volunteering with us!
                </p>
              </div>

              <div class="mt-4 text-end">

              <button 
               type="button"
               class="orange-btn shadow-lg
               rounded-md text-sm sm:text-lg 
               py-3 sm:px-6"
               @click="$router.push('/join')">
                Take Action Now
              </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
  import { ref } from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'

  const props = defineProps({
    show: Boolean,
    title: String,
    para: String,
    error: Boolean
  });

  const emits = defineEmits(['update:show']) 

  function closeModal() {
    emits('update:show', false)
  }

  const iconStatus = computed(() => {
    return props.error ? 'warning' : 'check'
  }) 
</script>

<style scoped>
  .model {
    background: url('/images/pop-bg.png'), linear-gradient(rgba( 0 0 0 / .2), rgba( 0 0 0 / .2)) ;
    background-size: cover;
    background-blend-mode: overlay;
  }

  .heading {
    font-size: clamp(1.5rem, 5vw, 3rem)
  }

  .para {
    font-size: clamp(.9rem, 2.5vw, 1.4rem);
  }
</style>
