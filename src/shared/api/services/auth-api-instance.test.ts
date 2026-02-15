import { describe, it, expect, vi, beforeEach } from "vitest";
import { authApiService } from "./auth-api-instance";
import { apiInstance } from "../api-instacne";
import { AxiosError, AxiosResponse } from "axios";
import { BadAuthResponse, SuccessAuthResponse } from "../types";
beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
});
describe("authApiService", () => {
  describe("Регистрация", () => {
    const registrationData = {
      email: "test@example.com",
      password: "123456",
      firstName: "sergio",
      secondName: "sergio",
    };
    it("отправляет данные регистрации и возвращает результат", async () => {
      const mockResponse: Partial<AxiosResponse<SuccessAuthResponse>> = {
        data: {
          accessToken: "meow",
          refreshToken: "woof",
          user: {
            id: 1,
            email: "test@example.com",
          },
        },
      };

      vi.spyOn(apiInstance, "post").mockResolvedValueOnce(mockResponse);

      const result = await authApiService.register(registrationData);

      expect(apiInstance.post).toHaveBeenCalledWith("/auth/registration", registrationData);
      expect(result).toEqual(mockResponse.data);
    });
    it("Ошибка: пользователь существует", async () => {
      const mockError: Partial<AxiosError<BadAuthResponse>> = {
        request: {
          data: {
            statusCode: 400,
            error: "Bad Request",
            message: "Данный email уже используется",
          },
        },
      };

      vi.spyOn(apiInstance, "post").mockRejectedValueOnce(mockError);

      await expect(authApiService.register(registrationData)).rejects.toEqual(mockError);
      expect(apiInstance.post).toHaveBeenCalledWith("/auth/registration", registrationData);
    });
  });

  describe("логин", () => {
    const loginData = {
      email: "test@example.com",
      password: "123456",
    };
    it("Успешный логин", async () => {
      const mockResponse: Partial<AxiosResponse<SuccessAuthResponse>> = {
        data: {
          accessToken: "meow",
          refreshToken: "woof",
          user: {
            id: 1,
            email: "test@example.com",
          },
        },
      };

      vi.spyOn(apiInstance, "post").mockResolvedValueOnce(mockResponse);

      const result = await authApiService.login(loginData);
      expect(apiInstance.post).toBeCalledWith("/auth/login", loginData);
      expect(result).toEqual(mockResponse.data);
    });

    it("ошибка: пользователь с таким email не найден", async () => {
      const mockError: Partial<AxiosError<BadAuthResponse>> = {
        request: {
          data: {
            message: "Пользователь с таким email не найден",
            error: "Bad Request",
            statusCode: 400,
          },
        },
      };
      vi.spyOn(apiInstance, "post").mockRejectedValueOnce(mockError);

      await expect(authApiService.login(loginData)).rejects.toEqual(mockError);
      expect(apiInstance.post).toBeCalledWith("/auth/login", loginData);
    });
    it("Введите корректный email адресс", async () => {
      const mockErrorResponse: Pick<AxiosResponse<BadAuthResponse>, "data" | "status"> = {
        status: 400,
        data: {
          message: ["Введите корректный email адресс"],
          error: "Bad Request",
          statusCode: 400,
        },
      };
      const mockError = {
        response: mockErrorResponse,
      };

      vi.spyOn(apiInstance, "post").mockRejectedValueOnce(mockError);
      await expect(authApiService.login(loginData)).rejects.toEqual(mockError);
      expect(apiInstance.post).toBeCalledWith("/auth/login", loginData);
    });
    it("Неверный пароль", async () => {
      const mockErrorResponse: Pick<AxiosResponse<BadAuthResponse>, "data" | "status"> = {
        status: 400,
        data: {
          message: ["Введите корректный email адресс"],
          error: "Bad Request",
          statusCode: 400,
        },
      };
      const mockError = {
        response: mockErrorResponse,
      };
      vi.spyOn(apiInstance, "post").mockRejectedValueOnce(mockError);
      await expect(authApiService.login(loginData)).rejects.toEqual(mockError);
      expect(apiInstance.post).toBeCalledWith("/auth/login", loginData);
    });
  });
});
