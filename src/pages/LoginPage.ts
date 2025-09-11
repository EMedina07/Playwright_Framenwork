import { expect, Page } from "@playwright/test";
import { Actions } from "../../centerManagement/framenwork_actions/Actions";

export class LoginPage{

    constructor(private page: Page){}

    async login(username: string, password: string, home: string){
        await this.page.getByRole('textbox', { name: 'username'}).fill(username);
        await this.page.getByRole('textbox', { name: 'password'}).fill(password);
        await this.page.getByRole('button', { name: 'Log In'}).click();
        await this.page.goto(home);
    }

    async isOnHome(){
        await Actions.isVisibleTheElementWithTheText(this.page, "Portal Corporativo APAP");
    }
}