import axios from "axios";
import { API_URL, apiInstance } from "../api-instacne";
import { API_ROUTES } from "../api-routes";
import { TLoginForm, TRegistrationForm } from "../types";
import { SuccessAuthResponse } from "../types/auth-response";

type LogoutSucessResponse = {
  id: number;
  userId: number;
  token: string;
};
export const authApiService = {
  registration: async (registrationData: Omit<TRegistrationForm, "confirmPassword">) => {
    const response = await apiInstance.post<SuccessAuthResponse>(
      API_ROUTES.AUTH + "/registration",
      registrationData,
    );

    return response.data;
  },

  login: async (loginData: TLoginForm) => {
    const response = await apiInstance.post<SuccessAuthResponse>(
      API_ROUTES.AUTH + "/login",
      loginData,
    );
    return response.data;
  },

  logout: async () => {
    const response = await apiInstance.post<LogoutSucessResponse>(API_ROUTES.AUTH + "/logout");
    return response;
  },
  checkAuth: async () => {
    const response = await axios.get<SuccessAuthResponse>(API_URL + API_ROUTES.AUTH + "/refresh", {
      withCredentials: true,
    });
    return response;
  },
};
