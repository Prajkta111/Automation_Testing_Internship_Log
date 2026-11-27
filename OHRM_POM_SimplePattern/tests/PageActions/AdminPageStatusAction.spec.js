// const { AdminPageStatus } = require("../PageObjects/AdminPageStatusObject.spec");


// class AdminStatusAction extends AdminPageStatus {
//   async clickadmin() {
//     await this.admintab.click();
//   }

//   async clickuserstatusdropdownarrow() {
//     await this.statusscrollarrow.click();
//   }

//   async clickuserstatusdropdownvalueenable() {
//     await this.usersdropdownvalueenabletatus.click();
//   }

//   async clicksearchbutton() {
//     await this.searchbutton.click();
//   }

//   async getrecordfoundtextaftersearch() {
//     return await this.recordfoundtextaftersearch.textContent();
//   }
  

//    async clickaddminaddbutton(){
//     await this.adminaddbutton.click();
//   }

//   async filladduserrole(userRole = 'Admin'){
//     await this.adduserrole.click();
//     await this.page.getByRole('option', { name: userRole, exact: true }).click();
//   }
  
//   async filladdemployeename(employee_name){
//     await this.addemployeename.fill(employee_name);
//     await this.page.getByRole('option', { name: employee_name, exact: true }).click();
//   }
 
//   async filladdstatus(status = 'Enabled'){
//     await this.addstatus.click();
//     await this.page.getByRole('option', { name: status, exact: true }).click();
//   }

//   async filladdusername(add_username){
//     await this.addusername.fill(add_username);
//   }

//   async filladdpassword(add_password){
//     await this.addpassword.fill(add_password);
//   }

//   async filladdconfirmpassword(add_confirmpassword){
//     await this.addconfirmpassword.fill(add_confirmpassword);
//   }


//   async clickaddsavebutton(){
//     await this.addsavebutton.click();
//   }


//   async fillsearchusername(search_username){
//     await this.searchusername.fill(search_username);
//   }

//   async clicksearchbuttonsystemuser(){
//     await this.searchbuttonsystemuser.click();
//     await this.page.waitForURL('**/admin/**', { timeout: 60000 });
//   }

//   async clickdeleteSystemUserlogo(){
//     await this.deleteSystemUserlogo.click();
//   }

//   async clickdeleteSystemUserlogoConfirmButton(){
//     await this.deleteSystemUserlogoConfirmButton.click();
//   }


  

// }

// module.exports = { AdminStatusAction };




const { AdminPageStatus } = require("../PageObjects/AdminPageStatusObject.spec");

class AdminStatusAction extends AdminPageStatus {
  async clickadmin() {
    await this.admintab.click();
    await this.page.waitForTimeout(1000);
  }

  async clickuserstatusdropdownarrow() {
    await this.statusscrollarrow.click();
    await this.page.waitForTimeout(1000);
  }

  async clickuserstatusdropdownvalueenable() {
    await this.usersdropdownvalueenabletatus.click();
    await this.page.waitForTimeout(1000);
  }

  async clicksearchbutton() {
    await this.searchbutton.click();
    await this.page.waitForTimeout(1000);
  }

  async getrecordfoundtextaftersearch() {
    await this.recordfoundtextaftersearch.waitFor({ state: 'visible', timeout: 15000 });
    return await this.recordfoundtextaftersearch.textContent();
  }

  async clickaddminaddbutton() {
    await this.adminaddbutton.click();
    await this.page.waitForTimeout(1000);
  }

  async filladduserrole(userRole = 'Admin') {
    await this.adduserrole.click();
    await this.page.getByRole('option', { name: userRole, exact: true }).click();
    await this.page.waitForTimeout(1000);
  }

  async filladdemployeename(employee_name) {
    await this.addemployeename.fill(employee_name);
    const normalizedName = employee_name.replace(/\s+/g, ' ').trim();
    const employeeOption = this.page.getByRole('option', { name: normalizedName, exact: true }).first();
    await employeeOption.waitFor({ state: 'visible', timeout: 15000 });
    await employeeOption.click();
    await this.page.waitForTimeout(1000);
  }

  async filladdstatus(status = 'Enabled') {
    await this.addstatus.click();
    await this.page.getByRole('option', { name: status, exact: true }).click();
    await this.page.waitForTimeout(1000);
  }

  async filladdusername(add_username) {
    await this.addusername.fill(add_username);
    await this.page.waitForTimeout(1000);
  }

  async filladdpassword(add_password) {
    await this.addpassword.fill(add_password);
    await this.page.waitForTimeout(1000);
  }

  async filladdconfirmpassword(add_confirmpassword) {
    await this.addconfirmpassword.fill(add_confirmpassword);
    await this.page.waitForTimeout(1000);
  }

  async clickaddsavebutton() {
    await this.addsavebutton.click();
    await this.page.waitForURL('**/admin/viewSystemUsers**', { timeout: 30000 });
    await this.page.waitForTimeout(1000);
  }

  async fillsearchusername(search_username) {
    await this.searchusername.waitFor({ state: 'visible', timeout: 15000 });
    await this.searchusername.fill(search_username);
    await this.page.waitForTimeout(1000);
  }

  async clicksearchbuttonsystemuser() {
    await this.searchbuttonsystemuser.click();
    const spinner = this.page.locator('.oxd-loading-spinner');
    if (await spinner.count() > 0) {
      await spinner.first().waitFor({ state: 'hidden', timeout: 15000 }).catch(() => { });
    }
    await this.page.waitForTimeout(1000);
  }

  async clickdeleteSystemUserlogo(username) {
    const btn = username ? this.getDeleteUserButton(username) : this.deleteSystemUserlogo;
    await btn.waitFor({ state: 'visible', timeout: 15000 });
    await btn.click();
    await this.page.waitForTimeout(1000);
  }

  async clickdeleteSystemUserlogoConfirmButton() {
    await this.deleteSystemUserlogoConfirmButton.waitFor({ state: 'visible', timeout: 15000 });
    await this.deleteSystemUserlogoConfirmButton.click();
    await this.page.waitForTimeout(1000);
  }

  async checkdeletestatusmethod() {
      await this.checkdeletestatus.waitFor({ state: 'visible', timeout: 15000 });
      return await this.checkdeletestatus.textContent();
}
}

module.exports = { AdminStatusAction };
