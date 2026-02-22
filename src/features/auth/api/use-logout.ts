import { $api } from "@/shared/api/services";
import { BadAuthResponse } from "@/shared/api/types/auth-response";
import { useBoundStore } from "@/shared/appStore";
import { APP_ROUTES, LOCAL_STORAGE_KEYS } from "@/shared/constants";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useLogout() {
  const setAuth = useBoundStore(state => state.setAuth);
  const setUser = useBoundStore(state => state.setUser);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: $api.auth.logout,

    onSuccess: () => {
      setAuth(false);
      setUser(null);
      navigate(APP_ROUTES.LOGIN);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
      toast.success("Вы вышли из аккаунта!");
    },
    onError(error: AxiosError<BadAuthResponse>) {
      toast.error("случилась ошибка при выходе из аккаунта!");
      console.error(error);
    },
  });
}
