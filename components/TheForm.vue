<template>

<form class="w-full sm:max-w-2xl
 mx-auto py-12 px-2 md:px-6"
 name="registration-form" 
 @submit.prevent="submit">

  <fieldset class="grid gap-4">

    <label for="full-name">Full Name</label>
    <input type="text" name="name" 
    class="form-inputs" 
    v-model="credentials.fullname"
    placeholder="First and Last" required="">

    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" 
    class="form-inputs" 
    v-model="credentials.email"
    placeholder="email@domain.tld" required="">

    <label for="email-address">Mobile NO.</label>
    <input type="number" name="_replyto" 
    class="form-inputs" 
    v-model="credentials.number"
    placeholder="your number" required="">

    <fieldset class="grid gap-8 
     sm:grid-cols-2">

      <legend>Locale</legend>

      <select name=""
       class="form-inputs bg-primary" 
       v-model="credentials.country"
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

      <input type="text" 
       name="postal-code" 
       class="form-inputs"
       v-model="credentials.pincode"
       placeholder="12345" required="">

    </fieldset>

    <label for="street-address">Street Address</label>
    <input type="text"
     name="street" 
     class="form-inputs" 
     v-model="credentials.address"
     placeholder="Your Address">


    <span class="relative">
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
   </span>

    <span class="text-right">
     <input type="submit" 
     name="submit" 
     class="join-btn py-3
     sm:text-lg"
     value="Register Now">
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
  country: '',
  state: '',
  city: '',
  pincode: '',
  message: ''
 })

 const submit = () => addNewVolunteer({
  fullname: credentials.fullname,
  email: credentials.email,
  number: credentials.number,
  address: credentials.address,
  country: credentials.country,
  state: credentials.state,
  city: credentials.city,
  pincode: credentials.pincode,
  message: credentials.message
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
