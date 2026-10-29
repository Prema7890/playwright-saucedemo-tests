import { test, expect } from '@playwright/test';
test('shows error when user has been locked out', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('[data-test="error"]')).toContainText('user has been locked out');
  await expect(page).not.toHaveURL(/inventory/);
});