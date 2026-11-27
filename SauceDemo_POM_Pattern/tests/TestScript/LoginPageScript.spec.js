const{test, expect} = require('@playwright/test');
const { LoginPageActions } = require('../PageActions/LoginPageAction.spec');

test.describe('Login Tests', () => {
  test('Valid login test', async ({ page }) => {
    const loginAction = new LoginPageActions(page);

    await loginAction.launchbrowser('https://www.saucedemo.com/');
    await loginAction.enterusername('standard_user');
    await loginAction.enterpassword('secret_sauce');
    await loginAction.clicktologin();

    // Verify successful login
    //await expect(page).toHaveURL(/\/dashboard\//, { timeout: 10000 });
  });
});