# Cypress Advanced E2E & API tests with CI pipeline

**Created for educational use as part of 'Cypress test automation - advanced level' (CanTest IT) training.**


## Features

- **Cypress with TypeScript** for E2E & API testing
- **Mocks** to test in isolation
- **Page Object Model (POM)** for maintainable test structure
- **CI/CD** integrated with GitHub Actions
- App and API docs **Swagger** thanks to [Awesome localstack](https://github.com/slawekradzyminski/awesome-localstack)

## Getting Started

### Prerequisites

- Node.js (preferably latest LTS)
- npm or yarn

### Installation

```bash
git clone https://github.com/gomczak/cypress-new.git
cd cypress-new
npm install
```

## Running Tests

**Interactive mode (GUI):**
```bash
npx cypress open
```

**Headless/terminal mode:**
```bash
npx cypress run
```

## Continuous Integration

> *Note: there is **simple CI/CD integration** (GitHub Actions) configured on master branch*

To check out CI support:
switch branch to `develop` or [click here](https://github.com/gomczak/cypress-new/blob/develop/.github/workflows/ci.yml)

All workflow runs and their details **[here](https://github.com/gomczak/cypress-new/actions)**.

The last published test report with history and [percy](https://percy.io/) integration is available on **[GitHub Pages](https://gomczak.github.io/cypress-new/17/)**.
