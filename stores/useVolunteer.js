import axios from 'axios'

export const useVolunteerStore = defineStore('useVolunteer', {

  actions: {

    async addNewVolunteer (credentials) {
      try {
        return await axios.post('/api/volunteers/create', credentials) 
      }
      catch (err) {
        return err
      }
    },

    async addNewDoner (credentials) {
      try {
        return await axios.post('/api/doner/create', credentials) 
      }
      catch (err) {
        return err
      }
    }
 }
})
