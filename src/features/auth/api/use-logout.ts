import { $api } from "@/shared/api/services";
import { BadAuthResponse } from "@/shared/api/types/auth-response";
import { useBoundStore } from "@/shared/appStore";
import { APP_ROUTES, LOCAL_STORAGE_KEYS, SOCKET_EVENTS } from "@/shared/constants";
import { socket } from "@/shared/lib";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useLogout() {
  const setAuth = useBoundStore(state => state.setAuth);
  const user = useBoundStore(state => state.user);
  const setUser = useBoundStore(state => state.setUser);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: $api.auth.logout,

    onSuccess: () => {
      navigate(APP_ROUTES.LOGIN);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_ID);
      socket.off(SOCKET_EVENTS.USER_SYSTEM_CONNECT);
      socket.off(SOCKET_EVENTS.BROADCAST_SYSTEM_ONLINE_COUNT);

      socket.emit(SOCKET_EVENTS.USER_SYSTEM_LOGOUT, user?.id);

      setAuth(false);
      setUser(null);
      toast.success("Вы вышли из аккаунта!");
    },
    onError(error: AxiosError<BadAuthResponse>) {
      toast.error("случилась ошибка при выходе из аккаунта!");
      console.error(error);
    },
  });
}
