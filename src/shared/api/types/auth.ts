import { z } from "zod/v4";

export const SignUpSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      error: "Минимальное количество символов: 2.",
    })
    .trim(),
  secondName: z
    .string()
    .min(2, {
      error: "Минимальное количество символов: 2.",
    })
    .trim(),
  email: z
    .email({ error: "Неправильно заполнен email" })
    .min(1, { error: "This field has to be filled." })
    .trim(),
  password: z
    .string()
    .trim()
    .min(7, { error: "Пароль должен быть не менее 7 символов" })
    .max(24, { error: "Пароль должен быть не более 24 символов" }),
});
export type SignUp = z.infer<typeof SignUpSchema>;

export type SuccessSignUpResponse = { message: string; access_token: string };

export const SignInSchema = z.object({
  email: z.email({ error: "Неправильно заполнен email" }),
  password: z
    .string()
    .min(7, { error: "Пароль должен быть не менее 7 символов" })
    .max(24, { error: "Пароль должен быть не более 24 символов" })
    .trim(),
});
export type SignIn = z.infer<typeof SignInSchema>;

export type SuccessSignInResponse = { message: string; access_token: string };
