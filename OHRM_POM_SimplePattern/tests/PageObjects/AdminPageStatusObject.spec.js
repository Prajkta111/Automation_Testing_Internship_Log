// const BaseClass = require('../BaseLibrary/BaseClass.spec.js');

// class AdminPageStatus extends BaseClass {
//   constructor(page) {
//     super(page);
//     this.admintab = this.page.locator("//span[text()='Admin']//parent::a");
//     this.statusscrollarrow=this.page.locator("//label[text()='Status']//parent::div//following-sibling::div//i[contains(@class,'arrow')]");
//     this.usersdropdownvalueenabletatus=this.page.locator("//span[text()='Enabled']");
//     this.searchbutton = this.page.locator("//button[contains(normalize-space(),'Search') and @type='submit']");
//     this.recordfoundtextaftersearch = this.page.locator("//div[contains(@class,'orangehrm-horizontal-padding')]//span[contains(@class,'oxd-text')]");
    
//     //addbutton
//     this.adminaddbutton=this.page.locator("//button[contains(normalize-space(),'Add') and @type='button']");
//     //fill add user details

//     this.adduserrole=this.page.locator("//label[contains(normalize-space(),'User Role')]//parent::div//following-sibling::div//div[contains(concat(' ', normalize-space(@class), ' '), ' oxd-select-text ')]");
//     this.adduserroleoption=this.page.getByRole('option', { name: 'Admin', exact: true });
//     this.addemployeename=this.page.locator("//input[@placeholder='Type for hints...']");
//     this.addstatus=this.page.locator("//label[contains(normalize-space(),'Status')]//parent::div//following-sibling::div//div[contains(concat(' ', normalize-space(@class), ' '), ' oxd-select-text ')]");
//     this.addstatusoption=this.page.getByRole('option', { name: 'Enabled', exact: true });
//     this.addusername=this.page.locator("//label[text()='Username']//parent::div//following-sibling::div/input");
//     this.addpassword=this.page.locator("//label[text()='Password']//parent::div//following-sibling::div/input");
//     this.addconfirmpassword=this.page.locator("//label[text()='Confirm Password']//parent::div//following-sibling::div/input");

//     this.addsavebutton=this.page.locator("//button[@type='submit']");



//     //for serrch username

//     this.searchusername=this.page.locator("//label[text()='Username']//parent::div//following-sibling::div/input");
//     this.searchbuttonsystemuser=this.page.getByRole('button', { name: 'Search', exact: true });


//     //delete using logo delete

//     this.deleteSystemUserlogo=this.page.locator("//div[@role='row'][.//div[@role='cell' and normalize-space()='PrajktaLohar1']]//i[contains(@class,'bi-trash')]");
//     this.deleteSystemUserlogoConfirmButton=this.page.locator("//button[@type='button' and normalize-space()='Yes, Delete']");


//   }
// }

// module.exports = { AdminPageStatus };



const BaseClass = require('../BaseLibrary/BaseClass.spec.js');

class AdminPageStatus extends BaseClass {
  constructor(page) {
    super(page);
    this.admintab = this.page.locator("//span[text()='Admin']//parent::a");
    this.statusscrollarrow = this.page.locator("//label[text()='Status']//parent::div//following-sibling::div//i[contains(@class,'arrow')]");
    this.usersdropdownvalueenabletatus = this.page.locator("//span[text()='Enabled']");
    this.searchbutton = this.page.locator("//button[contains(normalize-space(),'Search') and @type='submit']");
    this.recordfoundtextaftersearch = this.page.locator("//div[contains(@class,'orangehrm-horizontal-padding')]//span[contains(@class,'oxd-text')]");

    this.adminaddbutton = this.page.locator("//button[contains(normalize-space(),'Add') and @type='button']");

    this.adduserrole = this.page.locator("//label[contains(normalize-space(),'User Role')]//parent::div//following-sibling::div//div[contains(concat(' ', normalize-space(@class), ' '), ' oxd-select-text ')]");
    this.adduserroleoption = this.page.getByRole('option', { name: 'Admin', exact: true });
    this.addemployeename = this.page.locator("//input[@placeholder='Type for hints...']");
    this.addstatus = this.page.locator("//label[contains(normalize-space(),'Status')]//parent::div//following-sibling::div//div[contains(concat(' ', normalize-space(@class), ' '), ' oxd-select-text ')]");
    this.addstatusoption = this.page.getByRole('option', { name: 'Enabled', exact: true });
    this.addusername = this.page.locator("//label[text()='Username']//parent::div//following-sibling::div/input");
    this.addpassword = this.page.locator("//label[text()='Password']//parent::div//following-sibling::div/input");
    this.addconfirmpassword = this.page.locator("//label[text()='Confirm Password']//parent::div//following-sibling::div/input");

    this.addsavebutton = this.page.locator("//button[@type='submit']");

    this.searchusername = this.page.locator("//label[text()='Username']//parent::div//following-sibling::div/input");
    this.searchbuttonsystemuser = this.page.getByRole('button', { name: 'Search', exact: true });

    this.deleteSystemUserlogo = this.page.locator("//div[contains(@class,'oxd-table-body')]//div[@role='row']//i[contains(@class,'bi-trash')]").first();
    this.deleteSystemUserlogoConfirmButton = this.page.locator("//button[contains(normalize-space(),'Yes, Delete')]");
    this.checkdeletestatus = this.page.locator("//div[contains(@class,'oxd-toast--success')]");
  }

  getDeleteUserButton(username) {
    return this.page.locator(`//div[@role='row'][.//div[@role='cell' and normalize-space()='${username}']]//button[.//i[contains(@class,'bi-trash')]] | //div[@role='row'][.//div[@role='cell' and normalize-space()='${username}']]//i[contains(@class,'bi-trash')]`).first();
  }
}

module.exports = { AdminPageStatus };
