const { test, expect } = require('@playwright/test');

test.describe('BBC Website Headline Test', () => {
  test('should open BBC, click first headline, take screenshot and close browser', async ({ page }) => {
    try {
      console.log('Starting BBC headline test...');
      
      // Step 1: Open www.bbc.co.uk
      console.log('Step 1: Opening www.bbc.co.uk');
      await page.goto('https://www.bbc.co.uk');
      
      // Wait for the page to load completely
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveTitle(/BBC/i);
      console.log('BBC website loaded successfully');
      
      // Step 2: Click on the first headline
      console.log('Step 2: Looking for the first headline to click');
      
      // Multiple selectors to find the first headline
      const headlineSelectors = [
        '[data-testid="card-headline"] a',
        '.media__link',
        '.gs-c-promo-heading a',
        'article h2 a',
        'article h3 a',
        '.gel-layout__item h2 a',
        '.gel-layout__item h3 a'
      ];
      
      let firstHeadline = null;
      for (const selector of headlineSelectors) {
        firstHeadline = page.locator(selector).first();
        if (await firstHeadline.isVisible()) {
          break;
        }
      }
      
      // Ensure we found a headline
      await expect(firstHeadline).toBeVisible({ timeout: 10000 });
      
      // Get the headline text for logging
      const headlineText = await firstHeadline.textContent();
      console.log(`Found headline: "${headlineText?.trim()}"`);
      
      // Click the headline
      await firstHeadline.click();
      console.log('Clicked on the first headline');
      
      // Wait for navigation to the article page
      await page.waitForLoadState('networkidle');
      
      // Step 3: Take a screenshot
      console.log('Step 3: Taking screenshot');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const screenshotPath = `playwright/screenshots/bbc-article-${timestamp}.png`;
      
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: true 
      });
      console.log(`Screenshot saved to: ${screenshotPath}`);
      
      // Step 4: Close the browser (handled automatically by Playwright)
      console.log('Step 4: Browser will be closed automatically by Playwright');
      
    } catch (error) {
      console.error('Test failed with error:', error.message);
      
      // Take a screenshot on failure for debugging
      await page.screenshot({ 
        path: `playwright/screenshots/bbc-test-failure-${Date.now()}.png`,
        fullPage: true 
      });
      
      throw error;
    }
    
    // Step 5: Close test case (test ends here)
    console.log('Step 5: Test case completed successfully');
  });
});

// Test configuration
test.beforeEach(async ({ page }) => {
  // Set viewport size for consistency
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Set longer timeout for slow networks
  page.setDefaultTimeout(30000);
});

test.afterEach(async ({ page }) => {
  // Step 4 & 5: Close browser and test case
  console.log('Cleaning up: Closing browser');
  await page.close();
});