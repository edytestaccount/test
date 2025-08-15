const { test, expect } = require('@playwright/test');

test.describe('BBC Headline Test', () => {
  test('should open BBC website, click first headline, take screenshot and close', async ({ page }) => {
    // Step 1: Open www.bbc.co.uk
    await page.goto('https://www.bbc.co.uk');
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    
    // Step 2: Click on the first headline
    // Look for the first main headline article link
    const firstHeadline = page.locator('[data-testid="card-headline"], .media__link, .gs-c-promo-heading a, article a').first();
    await expect(firstHeadline).toBeVisible();
    
    // Get the headline text for logging
    const headlineText = await firstHeadline.textContent();
    console.log(`Clicking on headline: ${headlineText?.trim()}`);
    
    await firstHeadline.click();
    
    // Wait for navigation to complete
    await page.waitForLoadState('networkidle');
    
    // Step 3: Take a screenshot
    await page.screenshot({ 
      path: 'playwright/screenshots/bbc-article-screenshot.png',
      fullPage: true 
    });
    
    console.log('Screenshot taken successfully');
    
    // Step 4: Close the browser (handled automatically by Playwright after test)
    // Step 5: Close test case (test ends here)
  });
  
  // Clean up after test
  test.afterEach(async ({ page }) => {
    await page.close();
  });
});