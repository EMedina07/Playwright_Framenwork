import { Before, After, Status } from '@cucumber/cucumber';
import { GlobalSettings } from './GlobalSettings';

Before(async function (this: GlobalSettings) {
  await this.init();
  this.page.setDefaultTimeout(60000);
  this.page.setDefaultNavigationTimeout(60000);
});

After(async function (this: GlobalSettings, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }
  await this.close();
});
