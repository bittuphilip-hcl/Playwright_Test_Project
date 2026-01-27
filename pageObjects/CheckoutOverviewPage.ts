import { Page,Locator } from "@playwright/test";

export class CheckoutOverviewPage
{

    page:Page;
    productName:Locator;
    finishBtn:Locator;

    constructor (page:Page)
    {
        this.page=page;
        this.productName=page.locator('div[class="inventory_item_name"]');
        this.finishBtn=page.locator('button[id="finish"]');
        
    }

    async addedProductIsVisible(prodName: string) 
    {

        var allProds = await this.productName.allTextContents();
        const totalProduct = await this.productName.count();
        for (let i = 0; i < totalProduct; i++) {

            console.log(this.productName.nth(i).textContent());
            console.log(prodName);
            if ((await this.productName.nth(i).textContent()) == prodName) {
                await this.finishBtn.click();
                return true;
            }
            else {
                return false;

            }
        }

    }


    async completeTheOrder()
    {
        await this.finishBtn.click();
    }
}