// import { test, expect } from '@playwright/test';
// import { GooglePage } from '../pages/GooglePage';

// test('Google Search with Page Object', async ({ page }) => {
//   const google = new GooglePage(page);
//   await google.goto();
//   // Click 'Reject all' cookie button if present
//   const rejectButton = page.locator("//div[contains(text(), 'Reject all')]");
//   if (await rejectButton.isVisible()) {
//     await rejectButton.click();
//   }
//   await google.search('Playwright');
//   await page.waitForSelector('//a/h3');
//   await page.locator('//a/h3').first().click();
// });
