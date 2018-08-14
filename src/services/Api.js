import axios from 'axios';
import store from '../store/store';

// const BACKEND_URL = process.env.NODE_ENV === 'production' ? "http://name.herokuapp.com" : "http://localhost:8000/"
const BACKEND_URL = "http://localhost:10547/SellerPoint/"
//const BACKEND_URL = "http://qa.kinimetrix.com:8082/SellerPoint/";

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'authToken': store.getState().login.authToken,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
});

export default api;
export { BACKEND_URL};
