import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { authApiService, LogoutSucessResponse } from "./auth-api-instance";
import { apiInstance } from "../api-instacne";
import { AxiosError } from "axios";
import axios from "axios";
import { TLoginForm, TRegistrationForm } from "../types";

vi.mock("../api-instacne", () => ({
  apiInstance: {
    post: vi.fn(),
    get: vi.fn(),
    interceptors: {
      request: { use: vi.fn() },
      response: { use: vi.fn() },
    },
  },
}));

vi.mock("axios", async importOriginal => {
  const actual = await importOriginal<typeof import("axios")>();
  return {
    default: {
      ...actual.default,
      get: vi.fn(),
    },
  };
});

describe("Auth API service", () => {
  beforeEach(() => vi.clearAllMocks());
  afterEach(() => vi.restoreAllMocks());
  const mockRegisterData: Omit<TRegistrationForm, "confirmPassword"> = {
    email: "test@test.com",
    firstName: "John",
    secondName: "Doe",
    password: "password123",
  };
  const mockSuccessResponseData = {
    accessToken: "fake-token-123",
    user: {
      id: 1,
      email: "test@test.com",
      firstName: "John",
      secondName: "Doe",
    },
  };
  const mockErrorData = {
    message: "Данный email уже используется",
    error: "Bad Request",
    statusCode: 400,
  };
  const axiosError = Object.assign(new Error("Request failed with status code 400"), {
    isAxiosError: true,

    response: {
      status: 400,
      statusText: "Bad Request",
      data: mockErrorData,
      headers: {},
      config: {},
    },
    code: "ERR_BAD_REQUEST",
    config: {},
  } as AxiosError<typeof mockErrorData>);
  describe("Регистрация", () => {
    it("Должен успешно зарегистрировать пользователя", async () => {
      vi.mocked(apiInstance.post).mockResolvedValueOnce({ data: mockSuccessResponseData });
      const result = await authApiService.register(mockRegisterData);
      expect(result).toEqual(mockSuccessResponseData);

      expect(apiInstance.post).toHaveBeenCalledWith("/auth/register", mockRegisterData);

      expect(apiInstance.post).toHaveBeenCalledOnce();
    });

    it("Бросит ошибку 'Данный email уже используется'", async () => {
      vi.mocked(apiInstance.post).mockRejectedValue(axiosError);
      await expect(authApiService.register(mockRegisterData)).rejects.toMatchObject({
        response: {
          status: 400,
          data: mockErrorData,
        },
      });
      expect(apiInstance.post).toHaveBeenCalledWith("/auth/register", mockRegisterData);

      expect(apiInstance.post).toHaveBeenCalledOnce();
    });

    it("Должен вызывать 2 раза с успехом и ошибкой", async () => {
      vi.mocked(apiInstance.post)
        .mockResolvedValueOnce({ data: mockSuccessResponseData })
        .mockRejectedValue(axiosError);
      await expect(authApiService.register(mockRegisterData)).resolves.toEqual(
        mockSuccessResponseData
      );
      await expect(authApiService.register(mockRegisterData)).rejects.toHaveProperty(
        "response.data",
        mockErrorData
      );
    });
  });

  describe("Login", () => {
    const mockLoginData: TLoginForm = {
      email: "test@test.com",
      password: "password123",
    };

    it("Должен успешно выполнить авторизацию", async () => {
      vi.mocked(apiInstance.post).mockResolvedValue({ data: mockSuccessResponseData });
      const result = await authApiService.login(mockLoginData);
      expect(result).toEqual(mockSuccessResponseData);
      expect(apiInstance.post).toHaveBeenCalledWith("/auth/login", mockLoginData);
      expect(apiInstance.post).toHaveBeenCalledOnce();
    });
    it("Должна прийти ошибка 'Неверный пароль'", async () => {
      const mockErrorDataWrongPassword = {
        message: "Неверный пароль",
        error: "Bad Request",
        statusCode: 400,
      };
      const axiosErrorWrongPassword = Object.assign(
        new Error("Request failed with status code 400"),
        {
          isAxiosError: true,
          response: {
            status: 400,
            statusText: "Bad Request",
            data: mockErrorDataWrongPassword,
            headers: {},
            config: {},
          },
          code: "ERR_BAD_REQUEST",
          config: {},
        } as AxiosError<typeof mockErrorDataWrongPassword>
      );

      vi.mocked(apiInstance.post).mockRejectedValue(axiosErrorWrongPassword);

      await expect(authApiService.login(mockLoginData)).rejects.toMatchObject({
        response: {
          status: 400,
          data: mockErrorDataWrongPassword,
        },
      });
    });
    it("Должна прийти ошибка 'Пользователь с таким email не найден'", async () => {
      const mockErrorDataWrongEmail = {
        message: "Пользователь с таким email не найден",
        error: "Bad Request",
        statusCode: 400,
      };
      const axiosErrorWrongEmail = Object.assign(new Error("Request failed with status code 400"), {
        isAxiosError: true,
        response: {
          status: 400,
          statusText: "Bad Request",
          data: mockErrorDataWrongEmail,
          headers: {},
          config: {},
        },
        code: "ERR_BAD_REQUEST",
        config: {},
      } as AxiosError<typeof mockErrorDataWrongEmail>);
      vi.mocked(apiInstance.post).mockRejectedValue(axiosErrorWrongEmail);

      await expect(authApiService.login(mockLoginData)).rejects.toMatchObject({
        response: { status: 400, statusText: "Bad Request", data: mockErrorDataWrongEmail },
      });
    });
  });
  describe("Logout", () => {
    it("Успешно выход из системы", async () => {
      const mockLogoutSuccessResponse: LogoutSucessResponse = {
        id: 1,
        token: "fake-token-123",
        userId: 1,
      };

      vi.mocked(apiInstance.post).mockResolvedValue(mockLogoutSuccessResponse);

      const result = await authApiService.logout();
      expect(result).toStrictEqual(mockLogoutSuccessResponse);
      expect(apiInstance.post).toBeCalledWith("/auth/logout");
      expect(apiInstance.post).toHaveBeenCalledOnce();
    });
  });
  describe("Refresh", () => {
    it("Успешно сделает refresh", async () => {
      vi.mocked(axios.get).mockResolvedValue({ data: mockSuccessResponseData });
      import.meta.env.VITE_SERVER_API_URL = "http://localhost:3001/api";
      const result = await authApiService.refresh();
      expect(result).toEqual(mockSuccessResponseData);
      expect(axios.get).toBeCalledWith(`${import.meta.env.VITE_SERVER_API_URL}/auth/refresh`, {
        withCredentials: true,
      });
      expect(axios.get).toHaveBeenCalledOnce();
      expect(apiInstance.get).not.toHaveBeenCalledOnce();
    });

    it("Ошибка 401: Unauthorized", async () => {
      const unAuthErrorData = {
        message: "Unauthorized",
        statusCode: 401,
      };
      const axiosErrorUnAuth = Object.assign(new Error("Request failed with status code 401"), {
        isAxiosError: true,
        response: {
          status: 401,
          statusText: "Unauthorized",
          data: unAuthErrorData,
          headers: {},
          config: {},
        },
        code: "ERR_BAD_REQUEST",
        config: {},
      } as AxiosError<typeof unAuthErrorData>);

      vi.mocked(axios.get).mockRejectedValue(axiosErrorUnAuth);

      await expect(axios.get).rejects.toMatchObject({
        response: {
          status: 401,
          data: unAuthErrorData,
        },
      });
    });
  });
});
