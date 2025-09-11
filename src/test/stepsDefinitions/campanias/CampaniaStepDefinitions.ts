import { Then, When } from "@cucumber/cucumber";
import { CampaniaPage } from "../../../pages/CampaniaPage";

let campaniaPage: CampaniaPage;
let currentCampania: string;

When('the user select the {string}', async function (campania: string) {
    
    currentCampania = campania;
    campaniaPage = new CampaniaPage(this.page);
    await campaniaPage.openGestionCampaniaMenu();
    await campaniaPage.goToCampaniasContactCenter();
    await campaniaPage.workWitTheCampania(currentCampania);
});

Then('the campania details should be show it',async function () {
    await campaniaPage.wasTheCampaniaSelected(currentCampania);
});