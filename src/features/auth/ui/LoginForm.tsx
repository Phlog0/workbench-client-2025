import { Button } from "@/shared/ui";
import { EyeClosedIcon } from "lucide-react";
import { Eye } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { useLogin } from "../api/use-login";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema, type TLoginForm } from "@/shared/api/types";
import { FormInput } from "@/entities/auth";
import { WidgetSpinner } from "@/shared/ui/spinners";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "@/shared/constants";

export function LoginForm() {
  const signInMutation = useLogin();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "sergey.zadorkin.1@yandex.ru",
      password: "1234567",
    },
  });

  const onSubmit: SubmitHandler<TLoginForm> = (data) => {
    signInMutation.mutate(data);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleVisible = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      {signInMutation.isPending && <WidgetSpinner title="Вход..." />}
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[50%] mx-auto mt-5 flex flex-col gap-10"
        >
          <h2>Авторизация</h2>
          <FormInput name="email" label="E-mail" placeholder="user123@email.com" type="text" />
          <div className="flex items-center">
            <FormInput
              name="password"
              label="Пароль"
              type={isPasswordVisible ? "text" : "password"}
            />
            <Button type="button" onClick={handleVisible}>
              {isPasswordVisible ? <Eye /> : <EyeClosedIcon />}
            </Button>
          </div>

          <Button>Войти</Button>
          <p>
            У вас нет аккаунта?&nbsp;
            <Link to={APP_ROUTES.REGISTRATION} className="text-blue-600 underline font-bold">
              Зарегистрируйтесь в системе.
            </Link>
          </p>
        </form>
      </FormProvider>
    </>
  );
}
