import axios from 'axios';

const api = axios.create({
  baseURL: "https://happy-service.herokuapp.com"
});

export default api;
