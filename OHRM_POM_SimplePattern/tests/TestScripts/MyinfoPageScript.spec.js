const { test, expect } = require('@playwright/test');
const { LoginAction } = require("../PageActions/LoginPageActions.spec");
const { MyInfoAction } = require("../PageActions/MyinfoPageaction.spec");

test.describe("My Info Page Test Scenarios", () => {
  test("Verify required validation and add name details", async ({ page }) => {
    const loginAction = new LoginAction(page);
    const myinfoAction = new MyInfoAction(page);

    try {
      await loginAction.launchBrowser('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await loginAction.login('Admin', 'admin123');
      await expect(page).toHaveURL(/.*dashboard/);

      await myinfoAction.clickMyinfo();
      await myinfoAction.clickPersonaldetail();

      await myinfoAction.enterFname("Prajkta");
      await myinfoAction.enterlname("Lohar");

      await myinfoAction.Saveinfo();
      expect(await myinfoAction.checkSaved()).toContain('Success');
    } catch (error) {
      throw error;
    }
  });
});