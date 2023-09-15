import {login} from '../support/utils';
import user from '../fixtures/user_login_data.json'

describe('Testing specific product page', () => {
  beforeEach(() => {
    login(user.username, user.password, {success:true})
    cy.contains('Sauce Labs Backpack').click()
  });

  it('Click on "Back to products" opens all products page', () => {
    cy.get('#back-to-products').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('Succesfull adding of product to cart and indicator display on cart icon', () => {
    cy.add_to_cart()
  });

  it('Succesfull removing of product to cart and indicator display removed on cart icon', () => {
    cy.add_to_cart()
    cy.remove_from_cart()
  });
});