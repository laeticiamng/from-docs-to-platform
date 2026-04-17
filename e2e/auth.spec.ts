import { test, expect } from "../playwright-fixture";

const E2E_DOMAIN = "@phytotech.test";

test.describe("Auth — signup & login", () => {
  test("opens auth dialog and switches to signup", async ({ page }) => {
    await page.goto("/");

    // Ouvre le dialog (le bouton est dans la navbar)
    await page.getByTestId("auth-open").first().click();
    await expect(page.getByTestId("auth-dialog")).toBeVisible();

    // Bascule en mode inscription
    await page.getByRole("button", { name: /^s'inscrire$/i }).click();
    await expect(page.getByLabel(/nom d'affichage/i)).toBeVisible();
  });

  test("signup with new email succeeds (email confirmation flow)", async ({ page }) => {
    const email = `e2e+signup-${Date.now()}${E2E_DOMAIN}`;
    const password = "TestPassword123!";

    await page.goto("/");
    await page.getByTestId("auth-open").first().click();
    await page.getByRole("button", { name: /^s'inscrire$/i }).click();

    await page.getByLabel(/nom d'affichage/i).fill("E2E Signup");
    await page.getByLabel(/email/i).fill(email);
    await page.getByLabel(/mot de passe/i).fill(password);

    await page.getByTestId("auth-submit").click();

    // Soit confirmation par email requise, soit déjà connecté
    await expect(
      page.getByText(/(vérifiez votre email|connecté)/i),
    ).toBeVisible({ timeout: 10_000 });
  });

  test("signin with invalid credentials shows error", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("auth-open").first().click();

    await page.getByLabel(/email/i).fill(`e2e+invalid-${Date.now()}${E2E_DOMAIN}`);
    await page.getByLabel(/mot de passe/i).fill("WrongPassword!");
    await page.getByTestId("auth-submit").click();

    // Toast d'erreur Sonner
    await expect(page.locator("[data-sonner-toast]").first()).toBeVisible({ timeout: 10_000 });
  });
});
