import { DynamicLoadingPage } from '../PageObject/DynamicLoadingPage.spec.js';

export class DynamicLoadingAction {

    constructor(page) {

        this.dynamicPage = new DynamicLoadingPage(page);

    }

    async clickStartButton() {

        await this.dynamicPage.startButton.click();

    }

    async getHelloWorldText() {

        await this.dynamicPage.helloWorldText.waitFor({
            state: 'visible'
        });

        return await this.dynamicPage.helloWorldText.textContent();

    }
}