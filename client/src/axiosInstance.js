import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: import.meta.env.VITE_BASE_URL,
});

let accessToken = '';

function setAccessToken(newToken) {
  accessToken = newToken;
}

axiosInstance.interceptors.request.use((config) => {
  config.withCredentials = true;
  if (!config.headers.Authorization) {
    config.headers.Authorization = `${accessToken}`;
  }
  return config;
});

export { setAccessToken };

export default axiosInstance;
