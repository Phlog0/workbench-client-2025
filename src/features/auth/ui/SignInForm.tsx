import { AuthFormField } from "@/entities/auth";
import { Button, Form } from "@/shared/ui";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { Eye } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignIn } from "../api/use-sign-in";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignIn, SignInSchema } from "@/shared/api/types";
import { cn } from "@/shared/lib";

export function SignInForm() {
  const signInMutation = useSignIn();
  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignIn> = (data) => {
    signInMutation.mutate(data);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleVisible = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  console.log(signInMutation.error?.response?.data);
  return (
    <div className="max-w-[50%] mx-auto mt-5">
      <Form {...form}>
        <h1 className="text-center text-4xl mt-5 font-gost">Авторизация</h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <AuthFormField
            control={form.control}
            formLabel={"Email"}
            name="email"
            inputType="email"
          />
          <div className="flex items-end">
            <AuthFormField
              className={cn("grow", {
                "text-destructive":
                  signInMutation.error?.response?.data.message === "Неверный пароль",
              })}
              control={form.control}
              formLabel={"Пароль"}
              name="password"
              inputType={isPasswordVisible ? "text" : "password"}
            />
            <Button onClick={handleVisible} className="w-16 mt-auto" type="button">
              {isPasswordVisible ? <Eye /> : <EyeClosedIcon />}
            </Button>
          </div>
          <div className="text-center">
            <Button className="" type="submit">
              Войти
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-5">
        Нет аккаунта?{" "}
        <Link className="text-blue-600 underline" to={"/sign-up"}>
          Зарегистрируйтесь в системе
        </Link>
        .
      </div>
    </div>
  );
}
