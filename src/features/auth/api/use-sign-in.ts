import { useMutation } from "@tanstack/react-query";
import { authApiInstance, HttpErrorResponse } from "@/shared/api";
import { AxiosError } from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { SignIn } from "@/shared/api/types";
import { ROUTES } from "@/shared/constants";

export const useSignIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (signInData: SignIn) => authApiInstance.signIn(signInData),
    // Опционально: настройки мутации
    onSuccess: (data) => {
      try {
        if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
          navigate(ROUTES.PROJECTS_LIST);
        } else throw new Error("Ошибка при работе с токеном");
      } catch (error) {
        console.error(error);
      }
      console.log(data);
    },
    onError: (error: AxiosError<HttpErrorResponse>) => {
      toast.error("Неверный пароль", {
        closeButton: true,
      });
    },
  });
};
