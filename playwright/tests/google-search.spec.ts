import { test, expect } from '@playwright/test';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Basic test to open Google and search for something

test('Google Search', async ({ page }) => {
  await delay(1000);
  await page.goto('https://www.google.com');
  await delay(1000);
  // Click 'Reject all' cookie button if present
  const rejectButton = page.locator("//button/div[contains(text(), 'Reject all')]");
  if (await rejectButton.isVisible()) {
    await delay(1000);
    await rejectButton.click();
    await delay(1000);
  }
  await page.locator('textarea[name="q"]').fill('Playwright');
  await delay(1000);
  await page.locator('textarea[name="q"]').press('Enter');
//   await delay(1000);
//   await page.waitForSelector('//a/h3');
//   await delay(1000);
//   await page.locator('//a/h3').first().click();
//   await delay(1000);
});
