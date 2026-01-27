import {Page,Locator} from '@playwright/test';


export class ProductsPage
{
    page:Page;
    addToCart:Locator;
    products:Locator;
    cartIcon:Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.addToCart=page.locator('button[id*="add-to-cart"]');
        this.products = page.locator('div[class="inventory_item_label"]>a>div');
        this.cartIcon = page.locator('div[id="shopping_cart_container"]>a');

        
    }


    async searchAddProducts(prodName:string)
    {
        await this.products.first().waitFor();
        
            var allTitles = await this.products.allTextContents();
            console.log(allTitles);
        
            const totalProduct = await this.products.count();
        
            for (let i = 0; i < totalProduct; i++) 
            {

                if ((await this.products.nth(i).textContent()) == prodName) 
                {
                 
                    //add the product to cart
                    await this.addToCart.nth(i).click();
                    break;
                    

                }
            }

    }


    async navigateToCart()
    {
        this.cartIcon.click();
    }




}