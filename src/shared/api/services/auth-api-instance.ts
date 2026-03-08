import axios from "axios";
import { apiInstance } from "../api-instacne";
import { API_ROUTES } from "../api-routes";
import { TLoginForm, TRegistrationForm } from "../types";
import { SuccessAuthResponse } from "../types/auth-response";

export type LogoutSucessResponse = {
  id: number;
  userId: number;
  token: string;
};
export const authApiService = {
  register: async (registerData: Omit<TRegistrationForm, "confirmPassword">) => {
    const response = await apiInstance.post<SuccessAuthResponse>(
      API_ROUTES.AUTH + "/register",
      registerData
    );

    return response.data;
  },

  login: async (loginData: TLoginForm) => {
    const response = await apiInstance.post<SuccessAuthResponse>(
      API_ROUTES.AUTH + "/login",
      loginData
    );
    return response.data;
  },

  // при перезагрузке можно сразу перенестись в проекты.
  verifyUser: async () => {
    const response = await apiInstance.post<Omit<SuccessAuthResponse, "accessToken">>(
      API_ROUTES.AUTH + "/verifyUser"
    );
    return response.data;
  },

  logout: async () => {
    const response = await apiInstance.post<LogoutSucessResponse>(API_ROUTES.AUTH + "/logout");
    return response;
  },
  refresh: async () => {
    const response = await axios.get<SuccessAuthResponse>(
      import.meta.env.VITE_SERVER_API_URL + API_ROUTES.AUTH + "/refresh",
      {
        withCredentials: true,
      }
    );

    return response.data;
  },
};
