import { test, expect } from '@playwright/test';

test.describe('Logged-in user', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory/);
  });

  test('products can be sorted by price low to high', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    await expect(page.locator('[data-test="inventory-item-name"]').first()).toHaveText('Sauce Labs Onesie');
    await expect(page.locator('[data-test="inventory-item-price"]').first()).toHaveText('$7.99');
  });

  test('user can log out', async ({ page }) => {
    await page.click('#react-burger-menu-btn');
    await page.click('[data-test="logout-sidebar-link"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

});