Repository holding Cypress code for automating E2E testing on SauceDemo

# Repository Cloning
This repository can be cloned using:
git clone https://github.com/lmajstoro/SauceDemo-Automation.git

# Cypress Starting
Tests can be run two ways, via Cypress GUI or via Bash
## Cypress GUI
To open Cypress GUI, use:
npx cypress open
## Bash
To run all specs (All test files) use:
npx cypress run
To run specific spec:
cypress run --spec "cypress/e2e/prijava.cy.js
To run tests headed:
npx cypress run --headed
More run options at:
https://docs.cypress.io/guides/guides/command-line
