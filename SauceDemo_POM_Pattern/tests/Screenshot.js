const { test } = require('@playwright/test');


test.afterEach(async ({ page }, testInfo) => {

    const screenshotPath =
        `screenshots/${testInfo.title}.png`;


    await page.screenshot({

        path: screenshotPath,

        fullPage: true,

        contentType: 'image/png'

    });

});