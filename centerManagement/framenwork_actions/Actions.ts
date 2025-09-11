import { expect, Page } from "@playwright/test";

export class Actions{

    static async selectTheOption(page: Page, option: string){
        await page.locator('//*[text() ="'+ option +'"]/parent::*').click();
    }

    static async clickOntheIconSearchOnItemWithinAList(page: Page, campaniaName: string){
        await page.locator('//td[text() = "'+ campaniaName +'"]/following-sibling::td[last()]/*[1]').click();
    }

    static async isVisibleTheElementWithTheText(page: Page, text: string){
        await expect(page.locator('//*[text() = "'+ text +'"]')).toBeVisible();
    }
}