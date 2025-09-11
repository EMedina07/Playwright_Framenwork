import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Page, Browser, BrowserContext, chromium } from 'playwright';

export class GlobalSettings extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async init() {
    this.browser = await chromium.launch({
      headless: false,
      args: ["--start-maximized"],
    });
    const context = await this.browser.newContext({viewport: null,})
    this.page = await context.newPage();
    
  }

  async close() {
    await this.browser?.close();
  }

}

setWorldConstructor(GlobalSettings);
