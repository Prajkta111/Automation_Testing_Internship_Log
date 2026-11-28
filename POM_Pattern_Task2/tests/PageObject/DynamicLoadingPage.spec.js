export class DynamicLoadingPage {

    constructor(page) {

        this.page = page;

        this.startButton = page.locator('#start button');

        this.helloWorldText = page.locator('#finish h4');

    }
}