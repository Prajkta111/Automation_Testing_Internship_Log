import { AddToCart } from "../PageObjects/AddToCartObject.spec";

export class AddToCartAction extends AddToCart{
    async clickAddToCart(){
        await this.addToCartButton.click();
        await this.page.waitForTimeout(2000);

    }
    async clickCartIcon(){
        await this.cartIcon.click();
        await this.page.waitForTimeout(2000);
    }   
    async clickCheckoutButton(){
        await this.checkoutButton.click();
        await this.page.waitForTimeout(2000);
    }
    async enterFirstName(fname){
        await this.FisrtName.fill(fname);
    }
    async enterLastName(lname){
        await this.LastName.fill(lname);
    } 
    async enterPostalCode(pcode){
        await this.PostalCode.fill(pcode);
    }
    async clickContinueButton(){
        await this.ContinueButton.click();
        await this.page.waitForTimeout(2000);
    }
    async clickFinishButton(){
        await this.FinishButton.click();
        await this.page.waitForTimeout(2000);
    } 
    async getConfirmationMessage(){
        return await this.ConfirmationMessage.textContent();
        await this.page.waitForTimeout(2000);
    }   
    // async closeBrowser() {
    //     await this.closebrowser();
    // }  




}