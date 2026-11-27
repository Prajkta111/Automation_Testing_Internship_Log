# OrangeHRM POM Simple Pattern

End-to-end UI test automation project using **Playwright** and a layered **Page Object Model (POM)** pattern for the [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) application.

## Tech Stack

- **Test Framework:** `@playwright/test` (`^1.64.1`)
- **Language:** JavaScript (CommonJS)
- **Browser:** Chromium (`Desktop Chrome`)
- **Reporter:** Playwright HTML Reporter

## Project Structure

```text
OHRM_POM_SimplePattern/
├── .github/
│   └── workflows/
│       └── playwright.yml                      # CI workflow for Playwright tests
├── tests/
│   ├── BaseLibrary/
│   │   └── BaseClass.spec.js                   # URL navigation, spinner/field checks, wait & close helpers
│   ├── PageObjects/
│   │   ├── LoginPageObjects.spec.js            # Login page locators
│   │   ├── AdminPageObjects.spec.js            # Admin user role search locators
│   │   ├── AdminPageStatusObject.spec.js       # Admin status search, add/delete user locators
│   │   └── MyinfopageObject.spec.js            # My Info personal details locators
│   ├── PageActions/
│   │   ├── LoginPageActions.spec.js            # LoginAction class
│   │   ├── AdminPageActions.spec.js            # AdminAction class
│   │   ├── AdminPageStatusAction.spec.js       # AdminStatusAction class
│   │   └── MyinfoPageaction.spec.js            # MyInfoAction class
│   └── TestScripts/
│       ├── LoginTestScript.spec.js             # Login verification test
│       ├── AdminTestScript.spec.js             # Admin role search test
│       ├── AdminPageStatusScript.spec.js       # Status search, create & delete system user test
│       └── MyinfoPageScript.spec.js            # My Info personal details update test
├── package.json
└── playwright.config.js
```

## Test Coverage

- **`LoginTestScript.spec.js` (`Login Tests`)**
  - Logs in with demo credentials and verifies navigation to `/dashboard/`.
- **`AdminTestScript.spec.js` (`Admin Tests`)**
  - Logs in, navigates to the **Admin** module, filters by User Role (`Admin`), clicks Search, and validates the `(\d+) Records Found` result text.
- **`AdminPageStatusScript.spec.js` (`Admin Tests`)**
  - Filters Admin system users by Status (`Enabled`) and checks the records found text.
  - Creates a new Admin user with a randomized username (`PrajktaXXXX`), searches for the newly created user, deletes it, and verifies the `Success` notification.
- **`MyinfoPageScript.spec.js` (`My Info Page Test Scenarios`)**
  - Navigates to **My Info** -> **Personal Details**, updates first and last name fields, saves the changes, and verifies the `Success` confirmation.

## Configuration Highlights (`playwright.config.js`)

- **Test Directory:** `./tests`
- **Timeout:** `90000` ms (accommodates slower public demo host responses)
- **Workers:** `1` (avoids concurrent session resets on the public demo host)
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
npx playwright test tests/TestScripts/LoginTestScript.spec.js

# Run in headed mode
npx playwright test --headed

# Open the HTML report
npx playwright show-report
```
