import { test, expect } from "@playwright/test";

test("Login page should display Login button", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await expect(
        page.getByRole("button", { name: "Login" })
    ).toBeVisible();
});