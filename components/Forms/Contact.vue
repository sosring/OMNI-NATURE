<template>

<form class="w-full sm:max-w-2xl
 mx-auto py-12 px-2 md:px-6
 font-montserrat text-title"
 name="registration-form" 
 @submit.prevent="sendMail">

  <div class="space-y-2 my-4">
    <h2 class="text-secoundary heading font-bold">
      We're delighted to receive feedback from our community!
    </h2>

    <h3 class="sub-heading 
     font-medium text-title">
      Connect with us
    </h3>
  </div>

  <fieldset class="grid gap-4">

    <label for="full-name">Full Name</label>
    <input type="text" name="name" 
    class="form-inputs" 
    v-model="credentials.fullname"
    maxlength="22"
    placeholder="First and Last" required="">

    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" 
    class="form-inputs" 
    v-model="credentials.email"
    placeholder="email@domain.tld" required="">

    <label for="mobile-number">Mobile No.</label>
    <input 
     type="number" 
     class="form-inputs" 
     maxlength="10"
     v-model="credentials.number"
     placeholder="your number" required="">

    <label for="street-address">Street Address</label>
    <input type="text"
     name="street" 
     class="form-inputs" 
     v-model="credentials.address"
     placeholder="Your Address">


   <article class="relative">
     <label class="">Message</label>
     <textarea type="text"
      maxlength="300"
      class="form-textarea
      resize-none border p-4"
      v-model="credentials.message"
      placeholder="Write Message ..."/>

      <p class="absolute bottom-2
       text-title right-4 
       font-mono text-base z-10">
        {{computeLetters}}/300
      </p>
    </article>

    <span class="text-right">
     <button type="submit" 
     :disabled="messageEmpty"
     :class="messageEmpty ? 'disabled-btn' : 'orange-btn'"
     class="btn py-3 sm:text-lg">
      Contact us
     </button>
    </span>
  </fieldset>
</form>

</template>

<script setup>
 import { Country, State, City }  from 'country-state-city';
 import { useVolunteerStore } from '~/stores/useVolunteer'

 const { addNewVolunteer } = useVolunteerStore()

 const credentials = reactive({
  fullname: '',
  email: '',
  number: '',
  address: '',
  message: ''
 })

 const handler = reactive({
  error: null,
  success: null,
 })

 const sendMail = async () => {
   try {
     addNewVolunteer({
      fullname: credentials.fullname,
      email: credentials.email,
      number: credentials.number,
      address: credentials.address,
      message: credentials.message
     })

     handler.success = 'Your Email has been send' 
     clearCredentials()  
   }
   catch(err) {
     handler.error = err.message
     clearCredentials()  
   }
 }

 const clearCredentials = () => {
    credentials.fullname = '',
    credentials.email = '',
    credentials.number = '',
    credentials.address = '',
    credentials.message = ''
 }

 const messageEmpty = computed(() => {
  return credentials.message >= 0 ? true : false   
 }) 
</script>

<style scoped>

  .heading {
    font-size: clamp(1.5rem, 5vw, 2rem)
  }

  .sub-heading {
    font-size: clamp(1.1rem, 5vw, 1.7rem);
  }
</style>
