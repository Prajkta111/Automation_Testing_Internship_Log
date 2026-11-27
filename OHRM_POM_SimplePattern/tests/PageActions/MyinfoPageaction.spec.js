const { expect } = require('@playwright/test');
const { MyinfopageObject } = require("../PageObjects/MyinfopageObject.spec");

class MyInfoAction extends MyinfopageObject {
  async clickMyinfo() {
    try {
      await this.Myinfo.click();
    } catch (error) {
      throw error;
    }
  }

  async clickPersonaldetail() {
    try {
      const className = await this.personalDetail.getAttribute('class');
      if (!className || !className.includes('--active')) {
        await this.personalDetail.click();
      }
      await this.firstname.waitFor({ state: 'visible' });
    } catch (error) {
      throw error;
    }
  }

  async validateAndEnterField(fieldLocator, requiredMsgLocator, value) {
    try {
      await fieldLocator.waitFor({ state: 'visible' });
      await fieldLocator.click();
      await fieldLocator.press('ControlOrMeta+a');
      await fieldLocator.press('Backspace');
      await fieldLocator.press('Tab');

      await expect(requiredMsgLocator).toHaveText('Required');
      await fieldLocator.fill(value);
    } catch (error) {
      throw error;
    }
  }

  async enterFname(fname) {
    await this.validateAndEnterField(this.firstname, this.fnameRequiredMsg, fname);
  }

  async entermname(mname) {
    try {
      await this.mname.fill(mname);
    } catch (error) {
      throw error;
    }
  }

  async enterlname(lname) {
    await this.validateAndEnterField(this.lname, this.lnameRequiredMsg, lname);
  }

  async Saveinfo() {
    try {
      await this.savebutton.click();
      await expect(this.saveSuccessToast).toBeVisible({ timeout: 10000 });
      this.savedToastText = await this.saveSuccessToast.textContent();
    } catch (error) {
      throw error;
    }
  }

  async checkSaved() {
    if (this.savedToastText === undefined) {
      throw new Error('Save success toast was not captured after saving.');
    }
    return this.savedToastText;
  }
}

module.exports = { MyInfoAction };