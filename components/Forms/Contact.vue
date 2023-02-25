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

    <label for="phone">Mobile No.</label>
    <input 
     type="tel" 
     name="phone"
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
      {{ btnState }}
     </button>
    </span>
  </fieldset>
</form>

  <Model 
   v-model:show="handler.showModel"
   :error="handler.error"
   :title="handler.modelTitle"
   :para="handler.modelPara"/>
</template>

<script setup>
 import emailjs from 'emailjs-com'
 const config = useRuntimeConfig()

 const credentials = reactive({
  fullname: '',
  email: '',
  number: '',
  address: '',
  message: ''
 })

 const handler = reactive({
  showModel: false,
  modelTitle: '',
  modelPara: '',
  error: null
 })

 const btnState = ref('Contact us') 

 const sendMail = async () => {
   try {
     btnState.value = 'Sending...'

     await emailjs.send(config.public.SERVICE_ID, config.public.TEMPLATE_ID, credentials, config.public.MAIL_KEY)
      .then(() => {
        handler.modelTitle = 'Email succesful.',
        handler.modelPara = 'Congratulations! Your email has been sent successfully.',
        btnState.value = 'Contact us'
        handler.showModel = true
      })
      .catch(err => {
        throw new Error(err)
      })

     await clearCredentials()  
   }
   catch(err) {
     handler.error = true
     handler.modelTitle = "Error" 
     handler.modelPara = err.message 
     btnState.value = 'Contact us'
     handler.showModel = true

     await clearCredentials()  
   }
 }

 const clearCredentials = () => {
    credentials.fullname = '',
    credentials.email = '',
    credentials.number = '',
    credentials.address = '',
    credentials.message = ''
 }

 const computeLetters = computed(() => {
  return credentials.message.length
 })

 const messageEmpty = computed(() => {
  return credentials.message >= 0 ? true : false   
 }) 
</script>

<style scoped>

  .heading {
    font-size: clamp(1.5rem, 5vw, 2.3rem)
  }

  .sub-heading {
    font-size: clamp(1.1rem, 5vw, 1.7rem);
  }
</style>
