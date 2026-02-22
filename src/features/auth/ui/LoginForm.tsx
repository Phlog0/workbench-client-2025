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
  const loginMutation = useLogin();
  const form = useForm({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: import.meta.env.VITE_LOGIN_FORM_DEFAULT_EMAIL || "",
      password: import.meta.env.VITE_LOGIN_FORM_DEFAULT_PASSWORD || "",
    },
  });

  const onSubmit: SubmitHandler<TLoginForm> = data => {
    loginMutation.mutate(data);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleVisible = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <>
      {loginMutation.isPending && <WidgetSpinner title="Вход..." />}
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex flex-col gap-10"
        >
          <h2 className="text-3xl text-center">Авторизация</h2>
          <FormInput
            name="email"
            label="E-mail (Вы можете ввести любую почту по шаблону, вы просто ее не сможете подтвердить)"
            placeholder="test123@test.test"
            type="text"
          />
          <div className="flex items-center">
            <FormInput
              name="password"
              label="Пароль"
              type={isPasswordVisible ? "text" : "password"}
            />
            <Button
              type="button"
              onClick={handleVisible}
            >
              {isPasswordVisible ? <Eye /> : <EyeClosedIcon />}
            </Button>
          </div>

          <Button type="submit">Войти</Button>
          <p>
            У вас нет аккаунта?&nbsp;
            <Link
              to={APP_ROUTES.REGISTRATION}
              className="text-blue-600 underline font-bold"
            >
              Зарегистрируйтесь в системе.
            </Link>
          </p>
        </form>
      </FormProvider>
    </>
  );
}
