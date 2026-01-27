
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60*1000*2);


Given('a user login to sauce demo application with {string} and {string}', {timeout:100*1000},async function (username, password) {

    await this.poManager.getLoginPage().goTo();
    await this.poManager.getLoginPage().validLogin(username,password);

});


When('Adding {string} to cart', {timeout:100*1000},async function (productName) {

    await this.poManager.getProductsPage().searchAddProducts(productName);
    await this.poManager.getProductsPage().navigateToCart();

});


Then('Verify {string} is displayed in the cart',{timeout:100*1000}, async function (productName) {
    
        await this.poManager.getCartPage().productIsVisible(productName);
        await this.poManager.getCartPage().cartCheckout();
});



Then('Enter Valid user details as {string} ,{string} ,{string}',{timeout:100*1000}, async function (fname,lname,postCode) {

    await this.poManager.getCheckOutInfoPage().enterInfoDetails();
});



Then('Verify the {string} order details and place the Order',{timeout:100*1000}, async function (prodName) {

    await this.poManager.getCheckOutOverviewPage().addedProductIsVisible(prodName);
    // await this.poManager.getCheckOutOverviewPage().completeTheOrder();
    
});


Then('Verify checkout is completed with success message {string} and navigate back to home',{timeout:100*1000}, async function (completeText) {

    await this.poManager.getCheckoutCompletePage().verifyCheckoutCompleteMessage(completeText);
    await this.poManager.getCheckoutCompletePage().navigateBackToHome();
    
});