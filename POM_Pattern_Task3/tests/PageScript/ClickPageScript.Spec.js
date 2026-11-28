const { test, expect } = require('@playwright/test');

const { BaseClass } = require('../BaseLibrary/BaseClass.spec');
const { ClickPageObject } = require('../PageObject/ClickPageObject.spec');
const { ClickPageActions } = require('../PageAction/ClickPageAction.spec.js');

test('Task 3 - Handle New Tab using Promise.all', async () => {

    const baseClass = new BaseClass();

    await baseClass.openBrowser();

    await baseClass.navigateTo(
        'https://the-internet.herokuapp.com/windows'
    );

    const pageObject = new ClickPageObject(baseClass.page);

    const pageActions = new ClickPageActions(baseClass.page);

    const newPage = await pageActions.openNewTab(pageObject);

    console.log('New Tab URL:', newPage.url());

    const heading = await pageActions.getNewWindowHeading(newPage);

    console.log('New Window Heading:', heading);

    expect(heading).toBe('New Window');

    await baseClass.closeBrowser();
});