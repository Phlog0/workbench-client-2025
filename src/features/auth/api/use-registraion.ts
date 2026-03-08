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
  const setAuth = useBoundStore(state => state.setAuth);
  const setUser = useBoundStore(state => state.setUser);
  return useMutation<SuccessAuthResponse, AxiosError<BadAuthResponse>, TRegistrationForm>({
    mutationFn: async registrationData =>
      await $api.auth.register({
        email: registrationData.email,
        firstName: registrationData.firstName,
        secondName: registrationData.secondName,
        password: registrationData.password,
      }),

    onSuccess: data => {
      setAuth(true);
      setUser(data.user);
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.accessToken);
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, String(data.user.id));
      navigate(APP_ROUTES.PROJECTS_LIST);
    },
    onError: error => {
      if (error.response) {
        toast.error(`Ошибка: ${error.response?.data.message.toString()} `, {
          closeButton: true,
          id: "use-register-error",
        });
      } else if (error.request) {
        toast.error(`Сервер временно недоступен. Проверьте подключение к интернету`, {
          closeButton: true,
          id: "use-register-error",
        });
      } else {
        console.error(error);
        toast.error(`Произошла неизвестная ошибка`, {
          closeButton: true,
          id: "use-register-error",
        });
      }
    },
  });
};
