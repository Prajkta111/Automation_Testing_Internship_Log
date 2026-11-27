// const { test, expect } = require('@playwright/test');
// const { LoginAction } = require('../PageActions/LoginPageActions.spec.js');
// const { AdminStatusAction } = require('../PageActions/AdminPageStatusAction.spec.js');


// test.describe('Admin Tests', () => {
//   test('Valid login test with admin role search', async ({ page }) => {
//     const loginAction = new LoginAction(page);
//     const adminActionstatus = new AdminStatusAction(page);

//     await loginAction.launchBrowser('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await loginAction.login('admin', 'admin123');

//     await adminActionstatus.clickadmin();
//     await adminActionstatus.clickuserstatusdropdownarrow();
//     await adminActionstatus.clickuserstatusdropdownvalueenable();
//     await adminActionstatus.clicksearchbutton();
//     await adminActionstatus.getrecordfoundtextaftersearch();

//     const recordFoundText = await adminActionstatus.getrecordfoundtextaftersearch();
//     expect(recordFoundText).toMatch(/Records? Found/);

//     await adminActionstatus.clickaddminaddbutton();

//     const testUsername = 'Prajkta' + Math.floor(1000 + Math.random() * 9000);

//     await adminActionstatus.filladduserrole('Admin');
//     await adminActionstatus.filladdemployeename('Charles  Carter');
//     await adminActionstatus.filladdstatus('Enabled');
//     await adminActionstatus.filladdusername('PrajktaLohar1');
//     await adminActionstatus.filladdpassword('Prajkta@123');
//     await adminActionstatus.filladdconfirmpassword('Prajkta@123');
//     await adminActionstatus.clickaddsavebutton();

//     await adminActionstatus.fillsearchusername(testUsername);
//     await adminActionstatus.clicksearchbuttonsystemuser();

//     await adminActionstatus.deleteSystemUserlogo.click(testUsername);
//     await adminActionstatus.deleteSystemUserlogoConfirmButton.click();
    
    
    
    

    

//     // const recordFoundText = await adminActionstatus.getrecordfoundtextaftersearch();
//     // expect(recordFoundText).toMatch(/Records? Found/);
//   });
// });


const { test, expect } = require('@playwright/test');
const { LoginAction } = require('../PageActions/LoginPageActions.spec.js');
const { AdminStatusAction } = require('../PageActions/AdminPageStatusAction.spec.js');

test.describe('Admin Tests', () => {
  test('Valid login test with admin role search', async ({ page }) => {
    const loginAction = new LoginAction(page);
    const adminActionstatus = new AdminStatusAction(page);

    await loginAction.launchBrowser('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginAction.login('admin', 'admin123');

    await adminActionstatus.clickadmin();
    await adminActionstatus.clickuserstatusdropdownarrow();
    await adminActionstatus.clickuserstatusdropdownvalueenable();
    await adminActionstatus.clicksearchbutton();

    const recordFoundText = await adminActionstatus.getrecordfoundtextaftersearch();
    expect(recordFoundText).toMatch(/Records? Found/);

    await adminActionstatus.clickaddminaddbutton();

    const testUsername = 'Prajkta' + Math.floor(1000 + Math.random() * 9000);

    await adminActionstatus.filladduserrole('Admin');
    await adminActionstatus.filladdemployeename('Peter Mac Anderson');
    await adminActionstatus.filladdstatus('Enabled');
    await adminActionstatus.filladdusername(testUsername);
    await adminActionstatus.filladdpassword('Prajkta@123');
    await adminActionstatus.filladdconfirmpassword('Prajkta@123');
    await adminActionstatus.clickaddsavebutton();

    await adminActionstatus.fillsearchusername(testUsername);
    await adminActionstatus.clicksearchbuttonsystemuser();

    await adminActionstatus.clickdeleteSystemUserlogo(testUsername);
    await adminActionstatus.clickdeleteSystemUserlogoConfirmButton();

    expect(await adminActionstatus.checkdeletestatusmethod()).toContain('Success');
  });
});
