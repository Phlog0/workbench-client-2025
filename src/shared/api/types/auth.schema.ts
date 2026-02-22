import { z } from "zod/v4";

export const LoginSchema = z.object({
  email: z.email({ error: "Неправильно заполнен email" }).trim(),
  password: z
    .string()
    .min(7, { error: "Пароль должен быть не менее 7 символов" })
    .max(24, { error: "Пароль должен быть не более 24 символов" })
    .trim(),
});
export const RegistrationSchema = LoginSchema.extend({
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
  confirmPassword: z
    .string()
    .min(7, { error: "Пароль должен быть не менее 7 символов" })
    .max(24, { error: "Пароль должен быть не более 24 символов" })
    .trim(),
}).refine(data => data.password === data.confirmPassword, {
  error: "Пароли не совпадают",
  path: ["confirmPassword"],
});

export type TRegistrationForm = z.infer<typeof RegistrationSchema>;

export type RegistrationSuccessResponse = { message: string; access_token: string };

export type TLoginForm = z.infer<typeof LoginSchema>;

export type LoginSuccessResponse = { message: string; access_token: string };
