const { test, expect } = require('@playwright/test');
const{LoginPageActions}= require('../PageActions/LoginPageAction.spec.js');
const { AddToCartAction } = require('../PageActions/AddToCartAction.spec.js');

require('../Screenshot.js');


test.describe('Add to Cart Tests', () => {
    test('Add to Cart test', async ({ page }) => {
        const loginAction = new LoginPageActions(page);
        const addToCartAction = new AddToCartAction(page);
        await loginAction.launchbrowser('https://www.saucedemo.com/');
        await loginAction.enterusername('standard_user');
        await loginAction.enterpassword('secret_sauce');
        await loginAction.clicktologin();
            
//Shembadi 
        await addToCartAction.clickAddToCart();
        await addToCartAction.clickCartIcon();
        await addToCartAction.clickCheckoutButton();
        await addToCartAction.enterFirstName('Prajkta');
        await addToCartAction.enterLastName('Lohar');
        await addToCartAction.enterPostalCode('12345');
        await addToCartAction.clickContinueButton();
        await addToCartAction.clickFinishButton();
        const confirmationMessage = await addToCartAction.getConfirmationMessage();
        expect(confirmationMessage).toBe('Thank you for your order!');
    })
})