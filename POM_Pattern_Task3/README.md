# POM Pattern Task 3 (Multiple Windows / New Tab Handling)

End-to-end UI test automation project using **Playwright** and the **Page Object Model (POM)** pattern to handle new browser tabs/windows via `Promise.all` on [The Internet - Multiple Windows](https://the-internet.herokuapp.com/windows).

## Tech Stack

- **Test Framework:** `@playwright/test` (`^1.65.1`)
- **Language:** JavaScript (CommonJS)
- **Browsers Configured:** Chromium (`Desktop Chrome`), Firefox (`Desktop Firefox`), WebKit (`Desktop Safari`)
- **Reporter:** Playwright HTML Reporter

## Project Structure

```text
POM_Pattern_Task3/
├── .github/
│   └── workflows/
│       └── playwright.yml                   # CI workflow for Playwright tests
├── tests/
│   ├── BaseLibrary/
│   │   └── BaseClass.spec.js                # Launches Chromium (headed), manages context/page & teardown
│   ├── PageObject/
│   │   └── ClickPageObject.spec.js          # Locators for 'Click Here' link and 'New Window' heading
│   ├── PageAction/
│   │   └── ClickPageAction.spec.js          # New-tab capture using Promise.all and heading retrieval
│   ├── PageScript/
│   │   └── ClickPageScript.Spec.js          # New-tab handling test script
│   └── example.spec.js                      # Default Playwright starter spec
├── package.json
└── playwright.config.js
```

## Test Coverage

### `ClickPageScript.Spec.js`
- **Task 3 - Handle New Tab using Promise.all**
  1. Launches a Chromium browser instance via `BaseClass.openBrowser()` and navigates to `https://the-internet.herokuapp.com/windows`.
  2. Uses `Promise.all` with `context.waitForEvent('page')` and clicking the **Click Here** link to capture the newly opened tab.
  3. Waits for the new tab to load and logs its URL.
  4. Reads the `New Window` heading text on the new tab and asserts it equals `New Window`.
  5. Closes the browser via `BaseClass.closeBrowser()`.

## Configuration Highlights (`playwright.config.js`)

- **Test Directory:** `./tests`
- **Parallel Execution:** `fullyParallel: true`
- **Retries on CI:** `2` (`0` locally)
- **Workers on CI:** `1`
- **Reporter:** `html`
- **Trace & Video:** `trace: 'on-first-retry'`, `video: 'on'`
- **Browser Projects:** `chromium`, `firefox`, `webkit`

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

# Run only the Task 3 new-tab test
npx playwright test tests/PageScript/ClickPageScript.Spec.js

# Open the HTML report
npx playwright show-report
```
