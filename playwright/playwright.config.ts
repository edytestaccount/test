import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    // Other options can be added here
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
