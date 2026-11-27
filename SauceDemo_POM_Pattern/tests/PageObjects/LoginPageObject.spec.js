import { Baseclass } from "../BaseLibrary/BaseLibrary.spec";

class LoginPageObjects extends Baseclass{
    constructor(page){
        super(page);
        this.username=this.page.locator("//input[@id='user-name']");
        this.password=this.page.locator("//input[@id='password']");
        this.loginButton=this.page.locator("//input[@id='login-button']");


    }

}

module.exports={LoginPageObjects};