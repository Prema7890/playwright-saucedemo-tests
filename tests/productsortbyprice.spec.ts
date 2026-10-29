import { test, expect } from '@playwright/test';
test('products can be sorted by price low to high', async ({ page }) => {
  // 1. Open the site and log in (you've written this 3 times already)
  await page.goto('https://www.saucedemo.com');
  await page.fill ('#user-name','standard_user');
  await page.fill ('#password', 'secret_sauce');
  await page.click ('#login-button');

  // 2. Sort the products (the new part)
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

  // 3. Check the first product (two expects)
  await expect(page.locator('[data-test="inventory-item-name"]').first()).toHaveText( 'Sauce Labs Onesie');
 await expect (page.locator('[data-test="inventory-item-price"]').first()).toHaveText( '$7.99');
});

