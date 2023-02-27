<template>

<form class="w-full sm:max-w-2xl
 mx-auto py-12 px-2 md:px-6
 font-montserrat text-title"
 name="registration-form" 
 @submit.prevent="registerVolunteer">

  <h2 class="text-secoundary heading font-bold">Grateful for Donation</h2>
  <h3 class="sub-heading font-medium mb-8">
   Creating a Sustainable Future: Joining the Fight for Positive Change
  </h3>

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
       placeholder="12345" required="">

    </fieldset>

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
       text-gray-600 right-4 
       font-mono text-base z-10">
        {{computeLetters}}/300
      </p>
    </article>

    <span class="text-right">
     <button type="submit" 
     :disabled="messageEmpty"
     :class="messageEmpty ? 'disabled-btn' : 'blue-btn'"
     class="btn py-3 sm:text-lg">
      Donate now
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
     handler.modelPara = 'Error might have cause because email and number duplication' 
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
    font-size: clamp(.9rem, 5vw, 1rem);
  }
</style>
