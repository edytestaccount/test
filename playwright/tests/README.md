# BBC Headline Test - Playwright Test Case

## Overview
This test case demonstrates automated web testing using Playwright by interacting with the BBC website.

## Test Steps
The `bbc-headline-test.spec.js` performs the following steps:

1. **Open www.bbc.co.uk** - Navigate to the BBC homepage
2. **Click on the first headline** - Locate and click the first available news headline
3. **Take a screenshot** - Capture a full-page screenshot of the article page
4. **Close the browser** - Automatically handled by Playwright
5. **Close test case** - Test completion

## Features
- ✅ Multiple selector strategies to find headlines
- ✅ Error handling and failure screenshots
- ✅ Comprehensive logging
- ✅ Configurable viewport and timeouts
- ✅ Timestamped screenshots
- ✅ Network idle waiting for complete page loads

## Prerequisites
Before running this test, ensure you have:
- Node.js installed
- Playwright installed (`npm install @playwright/test`)
- Playwright browsers installed (`npx playwright install`)

## Running the Test

### Run specific test:
```bash
npx playwright test bbc-headline-test.spec.js
```

### Run with UI mode (for debugging):
```bash
npx playwright test bbc-headline-test.spec.js --ui
```

### Run with headed mode (see browser):
```bash
npx playwright test bbc-headline-test.spec.js --headed
```

## Output
- Screenshots are saved to `playwright/screenshots/` directory
- Test results and logs are displayed in the console
- Failure screenshots are automatically captured for debugging

## Configuration
The test includes:
- Viewport: 1920x1080
- Default timeout: 30 seconds
- Full page screenshots
- Network idle waiting

## Troubleshooting
If the test fails:
1. Check the failure screenshot in the screenshots directory
2. Review console logs for specific error messages
3. Ensure BBC website is accessible
4. Verify Playwright browsers are properly installed