# AZAL Booking & Check-in Automation Suite

This repository contains the end-to-end (E2E) automated test suite for the **AZAL (Azerbaijan Airlines)** booking and online check-in systems. This project was developed as part of the Middle QA Engineer assessment task.

## 🚀 Overview
The framework is designed using **Playwright** with **JavaScript** to validate critical business flows, including flight search, passenger data entry, and check-in procedures. It follows the **Page Object Model (POM)** pattern for better maintainability and scalability.

## 📁 Project Structure
The project follows a modular directory structure:
```text
booking-automation/
├── tests/               # Test scenarios (Smoke and Regression)
├── pages/               # Page Object Model (Locators & Actions)
├── api/                 # API interaction wrappers
├── fixtures/            # Static test data (JSON)
├── utils/               # Helper functions and loggers
└── playwright.config.js # Framework configuration
Prerequisites
Before running the tests, ensure you have the following installed:

Node.js (v14 or higher)

Git

🔧 Installation & Setup
Clone the repository:

Bash
git clone [https://github.com/YOUR_USERNAME/azal-automation.git](https://github.com/YOUR_USERNAME/azal-automation.git)
cd azal-automation
Install dependencies:

Bash
npm install
Install Playwright Browsers:

Bash
npx playwright install
🧪 Running Tests
You can execute the tests using the following commands:

Run all tests:

Bash
npx playwright test
Run tests in headed mode (UI visible):

Bash
npx playwright test --headed
Show HTML test report:

Bash
npx playwright show-report
🛡️ Mocking Strategy
Since real payment transactions are restricted in the test environment, this framework utilizes Playwright's Network Interception (page.route()).

The payment gateway's confirmation API is mocked to return a successful transaction status and a dummy PNR (e.g., AZL777).

This allows the E2E flow to proceed to the "Confirmation" stage without a real credit card.
CI/CD Integration
This suite is ready for integration with GitHub Actions. It can be configured to run automatically on every push or pull_request to ensure zero regressions in the booking funnel.