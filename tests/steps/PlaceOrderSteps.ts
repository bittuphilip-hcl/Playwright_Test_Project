
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000 * 2);


Given('a user login to sauce demo application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {

    await this.poManager.getLoginPage().goTo();
    await this.poManager.getLoginPage().validLogin(username, password);

});


When('Add {string} to cart', { timeout: 100 * 1000 }, async function (productName) {

    await this.poManager.getProductsPage().searchAddProducts(productName);
    

});


Then('Verify {string} is displayed in the cart', { timeout: 100 * 1000 }, async function (productName) {

    await this.poManager.getProductsPage().navigateToCart();
    await this.poManager.getCartPage().productIsVisible(productName);
    await this.poManager.getCartPage().cartCheckout();
});



Then('Enter Valid user details as {string} ,{string} ,{string}', { timeout: 100 * 1000 }, async function (fname, lname, postCode) {

    await this.poManager.getCheckOutInfoPage().enterInfoDetails();
});



Then('Verify the {string} order details and place the Order', { timeout: 100 * 1000 }, async function (prodName) {

    await this.poManager.getCheckOutOverviewPage().addedProductIsVisible(prodName);
    // await this.poManager.getCheckOutOverviewPage().completeTheOrder();

});


Then('Verify checkout is completed with success message {string} and navigate back to home', { timeout: 100 * 1000 }, async function (completeText) {

    await this.poManager.getCheckoutCompletePage().verifyCheckoutCompleteMessage(completeText);
    await this.poManager.getCheckoutCompletePage().navigateBackToHome();

});


When('user remove the product {string} from the products page', { timeout: 100 * 1000 }, async function (productName) {

    await this.poManager.getProductsPage().removeTheProduct(productName);


});

Then('cart count is {string}', { timeout: 100 * 1000 }, async function (count) {

    const bool = await this.poManager.getProductsPage().cartCountIsVisible();

    if (count == 'displayed') {
        console.log("Is displayed...");
        expect(bool).toBeTruthy();
        console.log("Cart number is displayed..");
    }
    else {
        console.log("is not displayed...");
        expect(bool).toBeFalsy();
        console.log("Cart number is not displayed..");
    }



});

Then('no product {string} is displayed in the cart page', { timeout: 100 * 1000 }, async function (prodName) {

    await this.poManager.getProductsPage().navigateToCart();
    await this.poManager.getProductsPage().cartCountIsVisible(prodName);

});