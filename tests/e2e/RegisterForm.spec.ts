import { test, expect } from "@playwright/test";

test.describe("Форма регистрации", () => {
  test("Отображает форму регистрации", async ({ page }) => {
    await page.goto("/register");
    await expect(page.getByRole("heading", { name: "Регистрация" })).toBeVisible();

    await expect(page.getByLabel("Ваше имя")).toBeVisible();
    await expect(page.getByLabel("Фамилия")).toBeVisible();
    await expect(page.getByLabel("E-mail")).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('input[name="confirmPassword"]')).toBeVisible();

    await expect(page.getByRole("button", { name: "Зарегистрироваться" })).toBeVisible();

    const loginLink = page.getByRole("link", { name: "Войдите в систему." });
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveAttribute("href", "/login");
  });

  test("Иммитируем регистрацию", async ({ page }) => {
    const expectedPassword = "1234567";
    const expectedFirstName = "Sergey";
    const expectedSecondName = "Test";
    const expectedEmail = "test@test.com";
    await page.route("**/api/auth/register", async (route) => {
      const requestData = route.request().postDataJSON();
      console.log("🔵 Запрос на регистрацию:", requestData);

      expect(requestData).toEqual({
        email: expectedEmail,
        password: expectedPassword,
        firstName: expectedFirstName,
        secondName: expectedSecondName,
      });
      await route.fulfill({
        status: 200,
        body: JSON.stringify({
          accessToken: "fake-access-token",
          refreshToken: "fake-refresh-token",
          user: {
            id: 1,
            email: expectedEmail,
          },
        }),
      });
    });
    await page.goto("/register");
    await page.getByLabel("Ваше имя").fill(expectedFirstName);
    await page.getByLabel("Фамилия").fill(expectedSecondName);
    await page.getByLabel("E-mail").fill(expectedEmail);
    await page.locator('input[name="password"]').fill(expectedPassword);
    await page.locator('input[name="confirmPassword"]').fill(expectedPassword);

    const passwordInput = await page.locator('input[name="password"]').inputValue();
    const confirmPasswordInput = await page.locator('input[name="confirmPassword"]').inputValue();
    console.log({ passwordInput, confirmPasswordInput });
    expect(passwordInput).toBe(confirmPasswordInput);

    await page.getByRole("button", { name: "Зарегистрироваться" }).click();

    await page.waitForURL("/projects-list");
    const token = await page.evaluate(() => localStorage.getItem("token"));
    console.log("token: ", token);
    expect(token).not.toBeNull();
    expect(token).toBe("fake-access-token");
    expect(token).not.toBe("fake-access-token-123-123-123-123-123");
  });
});
