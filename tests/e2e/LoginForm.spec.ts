import { test, expect } from "@playwright/test";
import { SuccessAuthResponse } from "../../src/shared/api/types";
test.describe("Логин форма", () => {
  test("Отображает форму логина", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByRole("heading", { name: "Авторизация" })).toBeVisible();

    await expect(page.getByLabel("E-mail")).toBeVisible();
    await expect(page.getByLabel("Пароль")).toBeVisible();

    await expect(page.getByRole("button", { name: "Войти" })).toBeVisible();

    const registerLink = page.getByRole("link", { name: "Зарегистрируйтесь в системе" });

    await expect(registerLink).toBeVisible();
    await expect(registerLink).toHaveAttribute("href", "/register");
  });
  test("Показывает ошибку для пустого email", async ({ page }) => {
    await page.goto("/login");

    await page.getByLabel("E-mail").clear();
    await page.getByLabel("Пароль").clear();
    await page.getByLabel("E-mail").blur();

    await expect(page.getByText("Неправильно заполнен email")).toBeVisible();
  });
});
test.describe("use-login", async () => {
  test("Отправляем запрос", async ({ page }) => {
    await page.route("**/api/auth/login", async (route) => {
      const requestData = route.request().postDataJSON();
      console.log("🔵 Запрос на логин:", requestData);

      expect(requestData).toEqual({
        email: "test@test.com",
        password: "1234567",
      });
      const successResponse: SuccessAuthResponse = {
        accessToken: "fake-access-token",
        refreshToken: "fake-refresh-token",
        user: {
          id: 1,
          email: "test@test.com",
        },
      };
      await route.fulfill({
        status: 200,
        body: JSON.stringify(successResponse),
      });
    });
    await page.goto("/login");
    await page.getByLabel("E-mail").fill("test@test.com");
    await page.getByLabel("Пароль").fill("1234567");
    await page.getByRole("button", { name: "Войти" }).click();

    await page.waitForURL("/projects-list");
    const token = await page.evaluate(() => localStorage.getItem("token"));
    console.log("🪙 Токен:", token);

    expect(token).toBe("fake-access-token");
    expect(token).not.toBe("fake-access-token-123-123-123");
  });
});
