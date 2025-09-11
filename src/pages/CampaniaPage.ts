import { expect, Page } from "@playwright/test";
import { Actions } from "../../centerManagement/framenwork_actions/Actions";

export class CampaniaPage{

    constructor(private page: Page){}

    async openGestionCampaniaMenu(){
        await Actions.selectTheOption(this.page, "Gestión Campañas");
    }

    async goToCampaniasContactCenter(){
        await Actions.selectTheOption(this.page, "Contact");
    }

    async workWitTheCampania(campania: string){
        await Actions.clickOntheIconSearchOnItemWithinAList(this.page, campania);
    }

    async wasTheCampaniaSelected(campania: string){
        await Actions.isVisibleTheElementWithTheText(this.page, campania);
    }
}