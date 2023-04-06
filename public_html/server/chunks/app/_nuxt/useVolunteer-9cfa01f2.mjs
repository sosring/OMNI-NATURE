import { g as defineStore } from '../server.mjs';
import axios from 'axios';

const useVolunteerStore = defineStore("useVolunteer", {
  actions: {
    async addNewVolunteer(credentials) {
      try {
        return await axios.post("/api/volunteers/create", credentials);
      } catch (err) {
        return err;
      }
    },
    async addNewDoner(credentials) {
      try {
        return await axios.post("/api/doner/create", credentials);
      } catch (err) {
        return err;
      }
    }
  }
});

export { useVolunteerStore as u };
//# sourceMappingURL=useVolunteer-9cfa01f2.mjs.map
