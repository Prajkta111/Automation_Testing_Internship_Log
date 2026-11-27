# SauceDemo POM Pattern

End-to-end UI test automation project using **Playwright** and the **Page Object Model (POM)** pattern for [SauceDemo](https://www.saucedemo.com/).

## Tech Stack

- **Test Framework:** `@playwright/test` (`^1.65.1`)
- **Language:** JavaScript (CommonJS)
- **Browser:** Chromium (`Desktop Chrome`)
- **Reporter:** Playwright HTML Reporter

## Project Structure

```text
SauceDemo_POM_Pattern/
├── .github/
│   └── workflows/
│       └── playwright.yml                 # CI workflow for Playwright tests
├── screenshots/                           # Full-page screenshots captured after tests
├── tests/
│   ├── BaseLibrary/
│   │   └── BaseLibrary.spec.js            # Browser launch and close helpers
│   ├── PageObjects/
│   │   ├── LoginPageObject.spec.js        # Login page locators
│   │   └── AddToCartObject.spec.js        # Product, cart, and checkout locators
│   ├── PageActions/
│   │   ├── LoginPageAction.spec.js        # LoginPageActions class
│   │   └── AddToCartAction.spec.js        # AddToCartAction class
│   ├── TestScript/
│   │   ├── LoginPageScript.spec.js        # Login test suite
│   │   └── AddToCartScript.spec.js        # Add-to-cart & checkout test suite
│   ├── Screenshot.js                      # afterEach hook saving full-page PNG screenshots
│   └── example.spec.js                    # Default Playwright starter spec
├── package.json
└── playwright.config.js
```

## Test Coverage

- **`LoginPageScript.spec.js` (`Login Tests`)**
  - **Valid login test:** Launches `https://www.saucedemo.com/`, enters `standard_user` credentials, and clicks Login.
- **`AddToCartScript.spec.js` (`Add to Cart Tests`)**
  - **Add to Cart test:**
    1. Logs in as `standard_user`.
    2. Adds **Sauce Labs Fleece Jacket** to the cart.
    3. Opens the shopping cart and clicks Checkout.
    4. Fills in first name, last name, and postal code, then continues and finishes the order.
    5. Asserts the order confirmation message (`Thank you for your order!`).
    6. Captures a full-page screenshot via `tests/Screenshot.js` into `screenshots/<test-title>.png`.

## Configuration Highlights (`playwright.config.js`)

- **Test Directory:** `./tests`
- **Parallel Execution:** `fullyParallel: true`
- **Retries on CI:** `2` (`0` locally)
- **Trace:** `on-first-retry`
- **Browser Project:** `chromium` (`Desktop Chrome`)

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- npm

## Setup & Execution

```bash
# Install project dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run a specific test script
npx playwright test tests/TestScript/AddToCartScript.spec.js

# Run in headed mode
npx playwright test --headed

# Open the HTML report
npx playwright show-report
```
