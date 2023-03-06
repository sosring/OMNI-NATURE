<template>

<form class="wrapper w-full sm:max-w-2xl
 mx-auto py-8 px-4 md:px-6 font-montserrat 
 text-title"
 name="registration-form" 
 @submit.prevent="registerVolunteer">

 <div class="mb-6 border-b-2 
  border-highlight">
  <h2 class="text-secoundary 
   heading font-bold">
   Register now
  </h2>
  <h3 class="sub-heading 
   font-medium">
    Let's join our community
  </h3>
 </div>

  <fieldset class="grid gap-4">

    <div>
      <label for="full-name">Full Name</label>
      <input type="text" name="name" 
      class="form-inputs" 
      v-model="credentials.fullname"
      maxlength="22"
      placeholder="First and Last" required="">
    </div>

    <div>
      <label for="email-address">Email Address</label>
      <input type="email" name="_replyto" 
      class="form-inputs" 
      v-model="credentials.email"
      placeholder="email@domain.tld" required="">
    </div>

    <div>
      <label for="phone">Mobile No.</label>
      <input 
       type="number" 
       name="phone"
       class="form-inputs" 
       v-model="credentials.number"
       placeholder="your number" required="">
    </div>

    <fieldset class="grid gap-8 
     sm:grid-cols-2">

      <legend>Locale</legend>

      <select name=""
       class="form-inputs bg-primary" 
       v-model="credentials.country"
       maxlength="10"
       required="">

        <option value="" selected>Selected Country</option>
        <option :value="country.isoCode"
         class="form-option"
         v-for="country in countries">
          {{ country.name }}
        </option>
      </select>

      <select name="state" 
       :disabled="!states"
       :class="{'bg-red': !states }"
       class="form-inputs bg-primary" 
       v-model="credentials.state"
       required="">

        <option value="" selected>Selected State</option>
        <option v-for="state in states" 
         class="form-option"
         :value="state.isoCode">
          {{state.name}}
         </option> 
      </select>

      <select name=""
       :disabled="!cities"
       class="form-inputs bg-primary" 
       v-model="credentials.city"
       required="">

        <option value="" selected>Selected City</option>
        <option :value="city.name" 
         class="form-option"
         v-for="city in cities">
          {{ city.name }}
        </option>
      </select>

      <input type="number" 
       name="postal-code" 
       class="form-inputs"
       v-model="credentials.pincode"
       maxlength="6"
       placeholder="Pincode"
       required="">

    </fieldset>

     <div>
      <label for="street-address">Street Address</label>
      <input type="text"
       name="street" 
       class="form-inputs" 
       v-model="credentials.address"
       placeholder="Your Address">
     </div>


   <div class="relative">
     <label class="">Message</label>
     <textarea type="text"
      maxlength="300"
      class="form-textarea
      resize-none border p-4"
      v-model="credentials.message"
      placeholder="Write Message ..."/>

      <p class="absolute bottom-2
       text-gray-600 right-4 
       font-mono text-base z-10">
        {{computeLetters}}/300
      </p>
    </div>

    <span class="text-right">
     <button type="submit" 
     :disabled="messageEmpty"
     :class="messageEmpty ? 'disabled-btn' : 'blue-btn'"
     class="btn py-3 sm:text-lg">
      Register now
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
 import { Country, State, City }  from 'country-state-city';
 import { useVolunteerStore } from '~/stores/useVolunteer'
 import { useAnimate } from '~/composables/useAnimate'

 const { slide } = useAnimate()

 onMounted(() => {
   slide('.wrapper')
 })

 const { addNewVolunteer } = useVolunteerStore()

 const credentials = reactive({
  fullname: '',
  email: '',
  number: '',
  address: '',
  country: '',
  state: '',
  city: '',
  pincode: '',
  message: ''
 })

 const handler = reactive({
  showModel: false,
  modelTitle: '',
  modelPara: '',
  error: null
 })

 const registerVolunteer = async () => {
   try {
     const { data } = await addNewVolunteer(credentials)

     if(data.error) {
      throw new Error(data.message)
     } else {
       handler.modelTitle = 'Registration successful.',
       handler.modelPara = "Thank you for registering to volunteer with us."
       handler.error = data.error
       handler.showModel = true
     }

     await clearCredentials()  
   }
   catch(err) {
     handler.error = true
     handler.modelTitle = "Error" 
     handler.modelPara = err
     handler.showModel = true

     await clearCredentials()  
   }
 }

 const clearCredentials = () => {
    credentials.fullname = '',
    credentials.email = '',
    credentials.number = '',
    credentials.address = '',
    credentials.country = '',
    credentials.state = '',
    credentials.city = '',
    credentials.pincode = '',
    credentials.message = ''
 }

  const messageEmpty = computed(() => {
   return credentials.message >= 0 ? true : false   
  }) 

  const computeLetters = computed(() => {
   return credentials.message.split('').length
  })

  const countries = Country.getAllCountries()

  const states = computed(() => {
   return State.getStatesOfCountry(credentials.country)
  })

  const cities = computed(() => {
    return City.getCitiesOfState(credentials.country, credentials.state)
  })
</script>

<style scoped>

  .heading {
    font-size: clamp(1.5rem, 5vw, 3rem)
  }

  .sub-heading {
    font-size: clamp(1.1rem, 5vw, 1.4rem);
  }
</style>
