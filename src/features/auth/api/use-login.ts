import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TLoginForm } from "@/shared/api/types";
import { APP_ROUTES, LOCAL_STORAGE_KEYS } from "@/shared/constants";
import { $api } from "@/shared/api/services";
import { useBoundStore } from "@/shared/appStore";
import { BadAuthResponse, SuccessAuthResponse } from "@/shared/api/types/auth-response";

export const useLogin = () => {
  const navigate = useNavigate();
  const setAuth = useBoundStore((state) => state.setAuth);
  const setUser = useBoundStore((state) => state.setUser);
  return useMutation<SuccessAuthResponse, AxiosError<BadAuthResponse>, TLoginForm>({
    mutationFn: (loginData) => $api.auth.login(loginData),

    onSuccess: (data) => {
      setAuth(true);
      setUser(data.user);
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.accessToken);
      navigate(APP_ROUTES.PROJECTS_LIST);
    },
    onError: (error) => {
      toast.error(`Ошибка: ${error.response?.data.message.toString()} `, {
        closeButton: true,
        id: "use-login-error",
      });
    },
  });
};
