import { Page,Locator } from "@playwright/test";

export class CheckoutCompletePage
{
    page:Page;
    completeText:Locator;
    backHomeBtn:Locator;


    constructor (page:Page)
    {
        this.page=page;
        this.completeText=page.locator('h2[class="complete-header"]');
        this.backHomeBtn=page.locator('button[id="back-to-products"]');
    
    }


    async verifyCheckoutCompleteMessage(completeText:string)
    {
       if(await this.completeText.textContent()==completeText)
       {
        return true;
       }
       else{
        return false;
       }
        
    }

    async navigateBackToHome()
    {
         await this.backHomeBtn.click();
    } 
}