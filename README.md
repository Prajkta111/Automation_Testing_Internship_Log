# Automation Testing Internship Log

A collection of end-to-end web UI automation testing projects built with **Playwright** and **JavaScript**, structured around a layered **Page Object Model (POM)** architecture.

## Projects

| Project | Target Application | Key Scenarios Covered | Documentation |
| :--- | :--- | :--- | :--- |
| **ECommerce_POM_Pattern** | [Automation Exercise](https://www.automationexercise.com/login) | User registration, form submission, account creation verification, and account deletion | [View README](./ECommerce_POM_Pattern/README.md) |
| **OHRM_POM_SimplePattern** | [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) | Login, Admin user role & status search, system user creation/deletion, and My Info updates | [View README](./OHRM_POM_SimplePattern/README.md) |
| **SauceDemo_POM_Pattern** | [SauceDemo](https://www.saucedemo.com/) | User login, product add-to-cart, checkout workflow, and post-test screenshot capture | [View README](./SauceDemo_POM_Pattern/README.md) |

## Repository Architecture

Each project is organized into modular layers to separate browser setup, element locators, reusable page actions, and test specifications:

```text
<Project_Folder>/
├── .github/workflows/playwright.yml   # GitHub Actions CI workflow
├── playwright.config.js               # Playwright test runner configuration
├── package.json                       # Project dependencies and metadata
└── tests/
    ├── BaseLibrary/                   # Browser launch, navigation, wait helpers, teardown
    ├── CommonMethods/                 # Shared utilities (present in ECommerce_POM_Pattern)
    ├── PageObjects/                   # Element locators per page/feature
    ├── PageActions/                   # Business-level actions and assertions
    └── TestScripts/ (or TestScript/)  # Executable Playwright test suites
```

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)

## Getting Started

Each subproject manages its own `package.json` and `playwright.config.js`. To run tests for any project:

```bash
# 1. Navigate into a project folder
cd ECommerce_POM_Pattern   # or OHRM_POM_SimplePattern / SauceDemo_POM_Pattern

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. Run the test suite
npx playwright test

# 5. View the HTML test report
npx playwright show-report
```

## Continuous Integration

Each project includes a GitHub Actions workflow at `.github/workflows/playwright.yml` configured to install dependencies, install Playwright browsers, run `npx playwright test`, and upload the `playwright-report/` artifact on pushes and pull requests to `main` or `master`.
