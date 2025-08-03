// Utility functions for Playwright tests can be added here
export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
