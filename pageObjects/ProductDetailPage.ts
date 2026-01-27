import {Page,Locator} from '@playwright/test';

export class ProductDetailPage
{

    page:Page;
    addToCart:Locator;

    constructor(page:any)
    {
        this.page=page;
        this.addToCart=page.locator('button[name="add-to-cart"]');
    }




    async addProductTocart()
    {
        await this.addToCart.click();

    }




}

    