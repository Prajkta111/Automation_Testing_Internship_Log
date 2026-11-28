export class BaseClass {

    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async closeBrowser() {
        await this.page.close();
    }
}