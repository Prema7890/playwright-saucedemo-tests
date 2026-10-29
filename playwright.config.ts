import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['list'], ['html', { open: 'always' }]],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false,
    launchOptions: { slowMo: 1000 },
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});