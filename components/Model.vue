<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-30">
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
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden
              rounded-2xl bg-white p-6 text-left align-middle 
              shadow-xl transition-all">

              <DialogTitle
                as="h3"
                class="text-lg font-medium 
                leading-6 text-gray-900
                font-montserrat border-b-2 py-1"
                :class="{ 'text-red-600': error }">

                <i class="material-symbols-outlined 
                  rounded-full p-1"
                  :class="!error ? 'bg-blue-100 text-blue-500' :
                  'text-red-500'">
                 {{ iconStatus }}
                </i>

                {{title}}
              </DialogTitle>

              <div class="mt-2">
                <p class="text-sm text-gray-500
                 font-raleway">
                  {{para}}
                </p>
              </div>

              <div class="mt-4 text-end">

                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border 
                   border-transparent bg-blue-100 px-4 py-2 text-sm 
                   font-medium text-blue-900 hover:bg-blue-200 
                   focus:outline-none focus-visible:ring-2 
                   focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                   @click="closeModal">
                   Close 
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
