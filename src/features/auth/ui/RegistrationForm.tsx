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
const random = Math.floor(Math.random() * (10000 - 1) + 1);
export function RegistrationForm() {
  const registrationMutation = useRegistration();
  const form = useForm({
    mode: "onSubmit",
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      email: `test-${random}@test.test`,
      firstName: "Test",
      password: "1234567",
      secondName: "Test",
      confirmPassword: "1234567",
    },
  });
  const onSubmit: SubmitHandler<TRegistrationForm> = data => {
    registrationMutation.mutate(data);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const handleVisible = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <>
      {registrationMutation.isPending && <WidgetSpinner title="Регистрация..." />}
      <FormProvider {...form}>
        <h2 className="text-3xl text-center">Регистрация</h2>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-2 max-w-200 px-4"
        >
          <div>
            <FormInput
              name="firstName"
              label="Ваше имя"
              placeholder="Иван"
              type="text"
            />
            <FormInput
              name="secondName"
              label="Фамилия"
              placeholder="Иванов"
              type="text"
            />
          </div>
          <FormInput
            name="email"
            label="E-mail (Вы можете ввести любую почту по шаблону, вы просто ее не сможете подтвердить)"
            placeholder="user123@email.com"
            type="text"
            className="self-start"
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
          <div className="flex items-center">
            <FormInput
              name="confirmPassword"
              label="Повторите пароль"
              type={isPasswordVisible ? "text" : "password"}
            />
            <Button
              type="button"
              onClick={handleVisible}
            >
              {isPasswordVisible ? <Eye /> : <EyeClosedIcon />}
            </Button>
          </div>

          <Button type="submit">Зарегистрироваться</Button>
          <p>
            Уже есть аккаунт?&nbsp;
            <Link
              to={APP_ROUTES.LOGIN}
              className="text-blue-600 underline font-bold"
            >
              Войдите в систему.
            </Link>
          </p>
        </form>
      </FormProvider>
    </>
  );
}
