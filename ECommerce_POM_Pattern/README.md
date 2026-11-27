# ECommerce POM Pattern (Automation Exercise)

End-to-end UI test automation project using **Playwright** and the **Page Object Model (POM)** pattern to test user registration and account cleanup on [Automation Exercise](https://www.automationexercise.com/login).

## Tech Stack

- **Test Framework:** `@playwright/test` (`^1.65.1`)
- **Language:** JavaScript (ES Modules)
- **Browser:** Chromium (`Desktop Chrome`)
- **Reporter:** Playwright HTML Reporter

## Project Structure

```text
ECommerce_POM_Pattern/
├── .github/
│   └── workflows/
│       └── playwright.yml                    # CI workflow for Playwright tests
├── tests/
│   ├── BaseLibrary/
│   │   └── BaseClass.spec.js                 # Browser navigation and close helpers
│   ├── CommonMethods/
│   │   └── CommonMethods.spec.js             # Shared wait utility (waitforseconds)
│   ├── PageObjects/
│   │   └── RegistrationObjects.spec.js       # XPath locators for signup and account forms
│   ├── PageActions/
│   │   └── RegistrationActions.spec.js       # Form interactions and text assertions
│   ├── TestScripts/
│   │   └── RegistrationTestScript.spec.js    # End-to-end user registration & deletion test
│   └── example.spec.js                       # Default Playwright starter spec
├── package.json
└── playwright.config.js
```

## Test Coverage

### `RegistrationTestScript.spec.js` (`Registration Test`)
- **should register a new user with valid details**
  1. Navigates to `https://www.automationexercise.com/login`.
  2. Enters a name and a dynamically generated email address, then clicks Signup.
  3. Fills out password, first/last name, address, state, city, zipcode, and mobile number.
  4. Submits the registration form and verifies the `Account Created!` confirmation text.
  5. Clicks Continue, triggers account deletion, verifies `Account Deleted!`, and closes the browser.

## Configuration Highlights (`playwright.config.js`)

- **Test Directory:** `./tests`
- **Timeout & Navigation Timeout:** `90000` ms
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

# Run only the registration test script
npx playwright test tests/TestScripts/RegistrationTestScript.spec.js

# Run in headed mode
npx playwright test --headed

# Open the HTML report
npx playwright show-report
```
