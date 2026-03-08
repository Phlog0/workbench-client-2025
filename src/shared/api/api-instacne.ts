import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants";
import { $api } from "./services";
// import axiosRetry from "axios-retry";

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
  withCredentials: true,
});

apiInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN)}`;
  return config;
});

apiInstance.interceptors.response.use(
  config => {
    return config;
  },
  async (error: AxiosError) => {
    try {
      const originalRequest = error.config;
      if (error.response?.status === 401 && error.config) {
        const response = await $api.auth.refresh();
        localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, response.accessToken);
        localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, String(response.user.id));
        return apiInstance.request(originalRequest as InternalAxiosRequestConfig);
      }
    } catch {
      console.error("Вы не авторизованы!");
      localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    }
  }
);
// axiosRetry(apiInstance, {
//   retries: 3,
//   retryCondition: (error: AxiosError) => {
//     return error.response?.status === 401;
//   },
//   async onRetry() {
//     const response = await $api.auth.refresh();
//     localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, response.accessToken);
//   },
//   async onMaxRetryTimesExceeded() {
//     console.log("it's over");
//   },
// });
