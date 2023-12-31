# General Info
Repository holding Cypress code for automating E2E testing on [SauceDemo](https://www.saucedemo.com/)

Project was done as part of Masters Degree Thesis

This repository can be cloned using:
```
git clone https://github.com/lmajstoro/SauceDemo-Automation.git
```


# Cypress GUI
To open Cypress GUI, use:
```
npx cypress open
```
# Bash
To run all specs (All test files) use:
```
npx cypress run
```
To run specific spec:
```
cypress run --spec "cypress/e2e/login.cy.js
```
To run tests headed:
```
npx cypress run --headed
```
To run tests in specific browser:
```
npx cypress run --browser chrome
```
More run options at:

[Cypress Command Line Guide](https://docs.cypress.io/guides/guides/command-line)

# User Info
SwagLabs offers 3 types of users. Depending on selected user, testing outcome will differ.

Change of user can be done under ```fixtures``` in ```login_data.json```.

Changing ```user``` value to one of following will change app behavior, hence test results:
* ```standard_user``` is user for which app will function as expected
* ```problem_user``` is user for which app will run with certain erros and issues
* ```performance_glitch_user``` is user for which app will run with certain performance (Load speed) issues

After changes are done, file should be saved and tests ran.
