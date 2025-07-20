import { useMutation } from "@tanstack/react-query";
import { authApiInstance, HttpErrorResponse } from "@/shared/api";
import { AxiosError } from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { SignUp } from "@/shared/api/types";
import { ROUTES } from "@/shared/constants";

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (signUpData: SignUp) => authApiInstance.sigUp(signUpData),
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
      toast.error(`Ошибка при регистрации: ${error.message.toString()}`, {
        closeButton: true,
      });
    },
  });
};
