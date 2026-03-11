# 🧪 PHPTravels E2E Test Suite

An end-to-end (E2E) test suite built with **Cypress** and **JavaScript**, developed as a college exercise to practice automated web testing. The tests target the registration page of [PHPTravels](https://phptravels.org/register.php), a demo travel booking platform commonly used for QA practice.

---

## 📁 Project Structure

```
cypress/
├── e2e/
│   └── spec.cy.js        # Main test file with all E2E test cases
├── fixtures/
│   └── example.json      # Sample fixture data
└── support/
    ├── commands.js        # Custom Cypress commands
    ├── config.js          # Support configuration
    └── e2e.js             # Global support file
cypress.config.js          # Cypress configuration
```

---

## 🧾 Test Cases (`spec.cy.js`)

All tests are grouped under the suite **"Verify Browser Stack Home Page"** and run against the PHPTravels registration page.

### 1. Verify Browserstack logo is visible
Navigates to the registration page and checks that the site logo is rendered and visible on the page.

### 2. Verify registration fails without filling all fields
Attempts to submit the registration form without filling in any data and asserts that the user is **not** logged in as a result.

### 3. Verify registration blocked by CAPTCHA
Fills in all registration fields with test data (first name, last name, email, phone, company, address, city, state, postcode, password) and submits the form. Since the reCAPTCHA is not solved, the test asserts that the expected error message is displayed:
> *"Please complete the captcha and try again."*

> **Note:** The reCAPTCHA interaction code is present in the file but commented out, as automating CAPTCHA solving is intentionally left out of scope.

---

## ⚙️ Configuration (`cypress.config.js`)

| Option | Value | Description |
|--------|-------|-------------|
| `testIsolation` | `false` | Allows state (like visited pages) to persist between tests in the same suite |
| `chromeWebSecurity` | `false` | Disables Chrome's same-origin restrictions for cross-origin testing |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm

### Installation

```bash
git clone https://github.com/C0ffiz/CypressJavascript.git
cd CypressJavascript
npm install
```

### Running the tests

Open the Cypress Test Runner (interactive mode):
```bash
npx cypress open
```

Run tests in headless mode:
```bash
npx cypress run
```

---

## 🛠️ Tech Stack

- [Cypress](https://www.cypress.io/) — E2E testing framework
- JavaScript — test scripting language
- [PHPTravels Demo](https://phptravels.org/) — target web application for testing

---

## 🎓 Academic Context

This project was developed as a **college exercise** to practice automated end-to-end testing concepts, including element selection, form interaction, assertions, and test suite organization using Cypress.
