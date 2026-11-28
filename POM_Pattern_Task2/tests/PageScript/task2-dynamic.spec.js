import { test, expect } from '@playwright/test';

import { BaseClass } from '../BaseLibrary/BaseClass.spec.js';

import { DynamicLoadingAction } from '../PageAction/DynamicLoadingAction.spec.js';


test('Verify Dynamic Loading using POM', async ({ page }) => {

    const base = new BaseClass(page);

    const dynamicAction = new DynamicLoadingAction(page);

    await base.navigateTo('https://the-internet.herokuapp.com/dynamic_loading/1');

    await dynamicAction.clickStartButton();

    const actualText = await dynamicAction.getHelloWorldText();

    console.log(actualText);

    expect(actualText.trim()).toBe('Hello World!');

});