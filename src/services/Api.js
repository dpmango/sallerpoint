import axios from 'axios';
import store from '../store/store';

// let BACKEND_URL = process.env.NODE_ENV === 'production' ? "http://name.herokuapp.com" : "http://localhost:8000/"
let BACKEND_URL = "http://qa.kinimetrix.com:8082/SellerPoint/"

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'authToken': store.getState().login.authToken,
    // 'withCredentials': true,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

export default api;
