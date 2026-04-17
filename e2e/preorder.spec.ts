import { test, expect } from "../playwright-fixture";

const E2E_DOMAIN = "@phytotech.test";

test.describe("Précommande", () => {
  test("submits a preorder successfully", async ({ page }) => {
    const email = `e2e+preorder-${Date.now()}${E2E_DOMAIN}`;

    await page.goto("/precommande");
    await expect(page.getByRole("heading", { name: /précommander/i })).toBeVisible();

    await page.getByLabel(/nom complet/i).fill("E2E Test User");
    await page.getByLabel(/email/i).fill(email);

    // Select pack via shadcn Select
    await page.getByRole("combobox").click();
    await page.getByRole("option", { name: /Niveau 1/i }).click();

    await page.getByLabel(/message/i).fill("Test E2E automated submission.");

    await page.getByTestId("preorder-submit").click();

    // Toast de succès
    await expect(page.getByText(/votre précommande a bien été enregistrée/i)).toBeVisible({
      timeout: 10_000,
    });

    // Form a été reset
    await expect(page.getByLabel(/nom complet/i)).toHaveValue("");
  });

  test("shows error when required fields are missing", async ({ page }) => {
    await page.goto("/precommande");
    await page.getByLabel(/nom complet/i).fill("Incomplete");
    // pas d'email, pas de pack
    await page.getByTestId("preorder-submit").click();
    // Le bouton submit HTML5 bloque, ou le toast apparaît
    await expect(page.getByLabel(/email/i)).toBeFocused();
  });
});
