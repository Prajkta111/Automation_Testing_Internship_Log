const { chromium } = require('@playwright/test');

class BaseClass {

    async openBrowser() {
        this.browser = await chromium.launch({
            headless: false
        });

        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async navigateTo(url) {
        await this.page.goto(url, {
            waitUntil: 'domcontentloaded'
        });
    }

    async closeBrowser() {
        await this.browser.close();
    }
}

module.exports = { BaseClass };