import { AuthFormField } from "@/entities/auth";
import { Button, Form } from "@/shared/ui";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { Eye } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignUp } from "../api/use-sign-up";

import { SignUp, SignUpSchema } from "@/shared/api/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@/shared/ui/spinners";
export function SignUpForm() {
  const signUpMutation = useSignUp();
  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      firstName: "",
      password: "",
      secondName: "",
    },
  });
  const onSubmit: SubmitHandler<SignUp> = (data) => {
    signUpMutation.mutate(data);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleVisible = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      {signUpMutation.isPending && (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/20 grid place-content-center">
          <Spinner />
        </div>
      )}
      <div className="max-w-[50%] mx-auto mt-5">
        <h1 className="text-center text-4xl mt-5 font-gost">Регистрация</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <AuthFormField control={form.control} formLabel={"Имя"} name="firstName" />

            <AuthFormField control={form.control} formLabel={"Фамилия"} name="secondName" />
            <AuthFormField
              control={form.control}
              formLabel={"Email"}
              name="email"
              inputType="email"
            />
            <div className="flex items-center">
              <AuthFormField
                className="grow"
                control={form.control}
                formLabel={"Пароль"}
                name="password"
                inputType={isPasswordVisible ? "text" : "password"}
              />
              {/* <button>a</button> */}
              <Button type="button" onClick={handleVisible} className="w-16">
                {isPasswordVisible ? <Eye /> : <EyeClosedIcon />}
              </Button>
            </div>
            <div className="text-center">
              <Button className="" type="submit">
                Зарегистрироваться
              </Button>
            </div>
          </form>
        </Form>
        <div className="mt-5">
          Имеется аккаунт?{" "}
          <Link className="text-blue-600 underline" to={"/sign-in"}>
            Войти в систему
          </Link>
          .
        </div>
      </div>
    </>
  );
}
