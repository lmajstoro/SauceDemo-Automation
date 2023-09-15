import {login} from '../support/utils';
import user from '../fixtures/user_login_data.json'

describe('Testing cart', () => {
  beforeEach(() => {
    login(user.username, user.password, {success:true})
    cy.add_to_cart()
    cy.open_cart()
  });

  it('Click on "Continue Shopping" opens all products page', () => {
    cy.get('#continue-shopping').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('Click on "Checkout" opens checkout page', () => {
    cy.get('#checkout').click()
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
  });

  it('Succesfull removing of product from the cart', () => {
    cy.remove_from_cart()
  });

  it('Click on product name opens specific product page', () => {
    cy.contains('Sauce Labs Backpack').click()
    cy.url().should('include', 'inventory-item');
  });
});
