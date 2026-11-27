import { Baseclass } from "../BaseLibrary/BaseLibrary.spec";

export class AddToCart extends Baseclass{
    constructor(page) {
        super(page);
        this.addToCartButton = this.page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']");
        this.cartIcon = this.page.locator("//a[@ class='shopping_cart_link']");
        this.checkoutButton=this.page.locator("//button[@id='checkout']");

        this.FisrtName=this.page.locator("//input[@id='first-name']");
        this.LastName=this.page.locator("//input[@id='last-name']");
        this.PostalCode=this.page.locator("//input[@id='postal-code']");
        this.ContinueButton=this.page.locator("//input[@id='continue']");
        this.FinishButton=this.page.locator("//button[@id='finish']");
        this.ConfirmationMessage=this.page.locator("//h2[text()='Thank you for your order!']");
        this.closebrowser=this.page.locator("//button[@id='finish']");

    }
}