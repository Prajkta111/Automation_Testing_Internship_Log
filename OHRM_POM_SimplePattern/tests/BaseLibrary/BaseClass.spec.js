class BaseClass {
  constructor(page) {
    this.page = page;
  }

  async launchbrowserandgotourl(url) {
    try {
      await this.page.goto(url, { waitUntil: 'commit', timeout: 60000 });
    } catch (error) {
      throw error;
    }
  }

  async isFieldFilled(locator) {
    try {
      await locator.waitFor({ state: 'visible' });
      const spinner = this.page.locator('.oxd-loading-spinner');
      if (await spinner.count() > 0) {
        await spinner.first().waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
      }
      return (await locator.inputValue()).trim().length > 0;
    } catch (error) {
      throw error;
    }
  }

  async waitForSeconds(seconds) {
    try {
      await this.page.waitForTimeout(seconds * 1000);
    } catch (error) {
      throw error;
    }
  }

  async closebrowser() {
    try {
      await this.page.close();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BaseClass;