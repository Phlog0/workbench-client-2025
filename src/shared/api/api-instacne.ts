import axios, { AxiosError } from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants";
import { $api } from "./services";
import axiosRetry from "axios-retry";
export const API_URL = "http://localhost:3000/api";

export const apiInstance = axios.create({
  baseURL: import.meta.env.SERVER_URL || API_URL,
  withCredentials: true,
});

apiInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN)}`;
  return config;
});

// apiInstance.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error: AxiosError) => {
//     try {
//       const originalRequest = error.config;
//       if (error.response?.status === 401 && error.config) {
//         const response = await $api.auth.checkAuth();
//         localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, response.data.accessToken);
//         return apiInstance.request(originalRequest as InternalAxiosRequestConfig);
//       }
//     } catch {
//       console.error("Вы не авторизованы!");
//     }
//   },
// );
axiosRetry(apiInstance, {
  retries: 3,
  retryCondition: (error: AxiosError) => {
    return error.response?.status === 401;
  },
  async onRetry() {
    const response = await $api.auth.checkAuth();
    localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, response.data.accessToken);
  },
});
