# POM Pattern Task 2 (Dynamic Loading)

End-to-end UI test automation project using **Playwright** and the **Page Object Model (POM)** pattern to test dynamically loaded elements on [The Internet - Dynamic Loading](https://the-internet.herokuapp.com/dynamic_loading/1).

## Tech Stack

- **Test Framework:** `@playwright/test` (`^1.65.1`)
- **Language:** JavaScript
- **Browser:** Chromium (`Desktop Chrome`)
- **Reporter:** Playwright HTML Reporter

## Project Structure

```text
POM_Pattern_Task2/
├── .github/
│   └── workflows/
│       └── playwright.yml                   # CI workflow for Playwright tests
├── tests/
│   ├── BaseLibrary/
│   │   └── BaseClass.spec.js                # Browser navigation and close helpers
│   ├── PageObject/
│   │   └── DynamicLoadingPage.spec.js       # Locators for Start button and Hello World text
│   ├── PageAction/
│   │   └── DynamicLoadingAction.spec.js     # Click Start and wait for visible text actions
│   ├── PageScript/
│   │   └── task2-dynamic.spec.js            # Dynamic loading verification test
│   └── example.spec.js                      # Default Playwright starter spec
├── package.json
└── playwright.config.js
```

## Test Coverage

### `task2-dynamic.spec.js`
- **Verify Dynamic Loading using POM**
  1. Navigates to `https://the-internet.herokuapp.com/dynamic_loading/1`.
  2. Clicks the **Start** button (`#start button`).
  3. Waits for the dynamically revealed `#finish h4` element to reach `visible` state.
  4. Retrieves the text content and asserts that it equals `Hello World!`.

## Configuration Highlights (`playwright.config.js`)

- **Test Directory:** `./tests`
- **Parallel Execution:** `fullyParallel: true`
- **Retries on CI:** `2` (`0` locally)
- **Workers on CI:** `1`
- **Reporter:** `html`
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

# Run only the Task 2 dynamic loading test
npx playwright test tests/PageScript/task2-dynamic.spec.js

# Run in headed mode
npx playwright test --headed

# Open the HTML report
npx playwright show-report
```
