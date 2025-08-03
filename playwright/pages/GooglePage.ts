import { Page } from '@playwright/test';

export class GooglePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.google.com');
  }

  async search(query: string) {
    await this.page.locator('textarea[name="q"]').fill(query);
    await this.page.locator('textarea[name="q"]').press('Enter');
  }

  async isSearchResultsVisible() {
    return this.page.locator('#search').isVisible();
  }
}
