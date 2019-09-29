import axios from "axios";

/* Import of getToken other class JS */
import { getToken } from '../api/LoginAuth';

const api = axios.create({
  baseURL: "https://vemserdbc2019.herokuapp.com"
});

api.interceptors.request.use( async config => {
  const token = getToken();
  if ( token ) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;