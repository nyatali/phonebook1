import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

class ContactsApi {
  constructor() {
    this.path = '/contacts';
  }

  async getAllContacts() {
    try {
      const { data } = await axios.get(this.path);

      return data;
    } catch (e) {
      throw e;
    }
  }

  async createContact(args) {
    try {
      const { data } = await axios.post(this.path, args);

      return data;
    } catch (e) {
      throw e;
    }
  }
}

export default new ContactsApi();
