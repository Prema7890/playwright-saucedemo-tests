import { test, expect } from '@playwright/test';

test('shows error when username is empty', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
});