import { Page,Locator } from "@playwright/test";

export class CheckoutInfoPage
{
    page:Page;
    firstName:Locator;
    lastName:Locator;
    postalCode:Locator;
    continueBtn:Locator;
    cancelBtn:Locator;

    constructor (page:Page)
    {
        this.page=page;
        this.firstName=page.locator('input[id="first-name"]');
        this.lastName=page.locator('input[id="last-name"]');
        this.postalCode=page.locator('input[id="postal-code"]');
        this.continueBtn=page.locator('input[id="continue"]');
        this.cancelBtn=page.locator('input[id="cancel"]');
    }


    async enterInfoDetails()
    {
        await this.firstName.fill("TestFName");
        await this.lastName.fill("TestLName");
        await this.postalCode.fill("RH1 0YA");
        await this.continueBtn.click();

    }
}