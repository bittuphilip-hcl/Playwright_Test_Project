import { Page } from '@playwright/test';
import { LoginPage } from "./LoginPage";
import { CartPage } from './CartPage';
import { ProductDetailPage } from './ProductDetailPage';
import { ProductsPage } from './ProductsPage';
import { CheckoutInfoPage } from './CheckoutInfoPage';
import { CheckoutOverviewPage } from './CheckoutOverviewPage';
import { CheckoutCompletePage } from './CheckoutCompletePage';



export class POManager {
    page: Page;
    loginPage: LoginPage;
    productDetailsPage: ProductDetailPage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    checkInfo: CheckoutInfoPage;
    checkOverview: CheckoutOverviewPage;
    checkoutComplete: CheckoutCompletePage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productDetailsPage = new ProductDetailPage(page);
        this.productsPage = new ProductsPage(page);
        this.cartPage = new CartPage(page);
        this.checkInfo = new CheckoutInfoPage(page);
        this.checkOverview = new CheckoutOverviewPage(page);
        this.checkoutComplete = new CheckoutCompletePage(page);


    }


    getLoginPage() {
        return this.loginPage;
    }

    getProductDetailPage() {
        return this.productDetailsPage;
    }

    getProductsPage() {
        return this.productsPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getCheckOutInfoPage() {
        return this.checkInfo;
    }

    getCheckOutOverviewPage() {
        return this.checkOverview;
    }


    getCheckoutCompletePage() {
        return this.checkoutComplete;
    }


}