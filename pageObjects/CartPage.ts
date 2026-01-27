import { Page, Locator } from '@playwright/test';

export class CartPage {
    page: Page;
    productName: Locator;
    checkoutBtn: Locator;
    removeBtn: Locator;
    continueShoppigBtn: Locator


    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('div[class="inventory_item_name"]');
        this.checkoutBtn = page.locator('button[id="checkout"]');
        this.removeBtn = page.locator('button[id*="remove-"]');
        this.continueShoppigBtn = page.locator('button[id="continue-shopping"]');

    }

    async productIsVisible(prodName: string) {

        var allProds = await this.productName.allTextContents();
        const totalProduct = await this.productName.count();
        for (let i = 0; i < totalProduct; i++) {

            // console.log(this.productName.nth(i).textContent());
            // console.log(prodName);
            if ((await this.productName.nth(i).textContent()) == prodName) {
                return true;
            }
            else {
                return false;

            }
        }

    }



    async cartCheckout() {
        this.checkoutBtn.click();
    }

    async continueShopping() {
        this.continueShoppigBtn.click();
    }
}