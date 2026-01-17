import { Button } from "@/shared/ui";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { Eye } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRegistration } from "../api/use-registraion";

import { TRegistrationForm, RegistrationSchema } from "@/shared/api/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { WidgetSpinner } from "@/shared/ui/spinners";
import { APP_ROUTES } from "@/shared/constants";
import { FormInput } from "@/entities/auth";
export function RegistrationForm() {
  const registrationMutation = useRegistration();
  const form = useForm({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      email: "",
      firstName: "",
      password: "",
      secondName: "",
      confirmPassword: "",
    },
  });
  const onSubmit: SubmitHandler<TRegistrationForm> = (data) => {
    registrationMutation.mutate(data);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleVisible = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      {registrationMutation.isPending && <WidgetSpinner title="Регистрация..." />}
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[50%] mx-auto mt-5 flex flex-col gap-10"
        >
          <h2>Регистрация</h2>

          <FormInput name="firstName" label="Ваше имя" placeholder="Иван" type="text" />
          <FormInput name="secondName" label="Фамилия" placeholder="Иванов" type="text" />
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
          <div className="flex items-center">
            <FormInput
              name="confirmPassword"
              label="Повторите пароль"
              type={isPasswordVisible ? "text" : "password"}
            />
            <Button type="button" onClick={handleVisible}>
              {isPasswordVisible ? <Eye /> : <EyeClosedIcon />}
            </Button>
          </div>

          <Button>Войти</Button>
          <p>
            Уже есть аккаунт?&nbsp;
            <Link to={APP_ROUTES.LOGIN} className="text-blue-600 underline font-bold">
              Войдите в систему.
            </Link>
          </p>
        </form>
      </FormProvider>
    </>
  );
}
