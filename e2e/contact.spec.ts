import { test, expect } from "../playwright-fixture";

const E2E_DOMAIN = "@phytotech.test";

test.describe("Contact", () => {
  test("submits a contact message successfully", async ({ page }) => {
    const email = `e2e+contact-${Date.now()}${E2E_DOMAIN}`;

    await page.goto("/contact");
    await expect(page.getByRole("heading", { name: /parlons-en/i })).toBeVisible();

    await page.getByLabel(/nom complet/i).fill("E2E Contact User");
    await page.getByLabel(/^email/i).fill(email);
    await page.getByLabel(/sujet/i).selectOption("Question générale");
    await page.getByLabel(/message/i).fill("Automated E2E contact test message.");

    await page.getByTestId("contact-submit").click();

    await expect(page.getByText(/message envoyé/i)).toBeVisible({ timeout: 10_000 });
    await expect(page.getByLabel(/nom complet/i)).toHaveValue("");
  });

  test("blocks submission when message is empty", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel(/nom complet/i).fill("Test");
    await page.getByLabel(/^email/i).fill(`e2e+empty-${Date.now()}${E2E_DOMAIN}`);
    await page.getByTestId("contact-submit").click();
    // Le textarea required HTML5 doit recevoir le focus invalide
    await expect(page.getByLabel(/message/i)).toBeFocused();
  });
});
