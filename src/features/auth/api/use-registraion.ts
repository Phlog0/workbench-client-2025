import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TRegistrationForm } from "@/shared/api/types";
import { APP_ROUTES, LOCAL_STORAGE_KEYS } from "@/shared/constants";
import { $api } from "@/shared/api/services";
import { useBoundStore } from "@/shared/appStore";
import { BadAuthResponse, SuccessAuthResponse } from "@/shared/api/types/auth-response";

export const useRegistration = () => {
  const navigate = useNavigate();
  const setAuth = useBoundStore((state) => state.setAuth);
  const setUser = useBoundStore((state) => state.setUser);
  return useMutation<SuccessAuthResponse, AxiosError<BadAuthResponse>, TRegistrationForm>({
    mutationFn: async (registrationData) =>
      await $api.auth.registration({
        email: registrationData.email,
        firstName: registrationData.firstName,
        secondName: registrationData.secondName,
        password: registrationData.password,
      }),

    onSuccess: (data) => {
      setAuth(true);
      setUser(data.user);
      console.log({ data });
      localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.accessToken);
      navigate(APP_ROUTES.PROJECTS_LIST);
    },
    onError: (error) => {
      if (error.status && error.status >= 500) {
        console.error(error);
        toast.error(`Внутренняя ошибка!`, {
          closeButton: true,
        });
      } else {
        toast.error(`Ошибка: ${error.response?.data.message.toString()} `, {
          closeButton: true,
        });
      }
    },
  });
};
