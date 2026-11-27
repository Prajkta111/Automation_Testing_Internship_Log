import { LoginPageObjects } from "../PageObjects/LoginPageObject.spec";



export class LoginPageActions extends LoginPageObjects{
    async enterusername(uname){
        await this.username.fill(uname);
    }
    async enterpassword(pass){
        await this.password.fill(pass);
    }
    async clicktologin(){
        await this.loginButton.click();
    }
    async closeBrowser() {
    await this.closebrowser();
  }
}