class ClickPageActions {

    constructor(page) {
        this.page = page;
    }

    async openNewTab(clickPageObject) {

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            clickPageObject.clickHereLink.click()
        ]);

        await newPage.waitForLoadState();

        return newPage;
    }

    async getNewWindowHeading(newPage) {
        return await newPage
            .getByRole('heading', { name: 'New Window' })
            .textContent();
    }
}

module.exports = { ClickPageActions };