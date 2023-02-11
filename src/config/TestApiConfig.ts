import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
}

const testApi = axios.create(axiosConfig);  

export default testApi