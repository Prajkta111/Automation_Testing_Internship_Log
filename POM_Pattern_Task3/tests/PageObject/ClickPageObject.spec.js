const { expect } = require('@playwright/test');

class ClickPageObject {

    constructor(page) {
        this.page = page;

        this.clickHereLink = page.getByText('Click Here');
        this.newWindowHeading = page.getByRole('heading', {
            name: 'New Window'
        });
    }
}

module.exports = { ClickPageObject };