import { Page, Locator } from '@playwright/test';


export class ProductsPage {
    page: Page;
    addToCart: Locator;
    products: Locator;
    cartIcon: Locator;
    removeBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addToCart = page.locator('button[id*="add-to-cart"]');
        this.products = page.locator('div[class="inventory_item_label"]>a>div');
        this.cartIcon = page.locator('div[id="shopping_cart_container"]>a');
        this.removeBtn = page.locator('button[id*="remove-"]');


    }


    async searchAddProducts(prodName: string) {
        await this.products.first().waitFor();

        var allTitles = await this.products.allTextContents();
        console.log(allTitles);

        const totalProduct = await this.products.count();

        for (let i = 0; i < totalProduct; i++) {
            
            console.log(await this.products.nth(i).textContent());

            if ((await this.products.nth(i).textContent()) == prodName) 
                {
                
                //add the product to cart
                console.log("Added the product::"+prodName);
                await this.addToCart.nth(i).click();
                break;

            }
            // else {
            //     return "No Products in the cart page.."
            // }
        }

    }


    async navigateToCart() {
        this.cartIcon.click();
    }


    async removeTheProduct(prodName: string) {
        await this.products.first().waitFor();

        var allTitles = await this.products.allTextContents();
        console.log(allTitles);

        const totalProduct = await this.products.count();

        for (let i = 0; i < totalProduct; i++) {

            console.log("Inside the for loop");

            if ((await this.products.nth(i).textContent()) == prodName) {


                console.log("Inside the If loop");
                //add the product to cart
                await this.removeBtn.nth(i).click();
                break;


            }
        }

    }

    async cartCountIsVisible() 
    {
        if (await this.cartIcon.locator('span[class="shopping_cart_badge"]').isVisible()) {
            return true;
        }
        else {
            return false;
        }
    }




}