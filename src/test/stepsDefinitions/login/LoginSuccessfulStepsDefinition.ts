import { Given, setDefaultTimeout, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../../pages/LoginPage';
import { JsonDataManagement } from '../../../../centerManagement/data_management/JsonDataManagement';
import { GlobalSettings } from '../../../../centerManagement/settings/GlobalSettings';

import environment from '../../../../centerManagement/settings/EnvironmentSettings';

const env = process.env.ENV!;

setDefaultTimeout(60000);

let loginPage: LoginPage;

Given('the user access to he login page with the {string}', async function (this: GlobalSettings, username: string) {
    await this.page.goto(environment.baseURL);
    
    const user = await JsonDataManagement.getUserByName(env, "users", username);

    loginPage = new LoginPage(this.page);
    await loginPage.login(user.email, user.password, environment.homeURL);
})

Then('the user would be on the home page', async () => {
    await loginPage.isOnHome();
})