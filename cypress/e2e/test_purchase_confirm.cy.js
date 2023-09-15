import {login, purchase } from '../support/utils';
import korisnik from '../fixtures/user_login_data.json'

describe('Testing purchase confirmation page', () => {
  beforeEach(() => {
    login(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
    cy.add_to_cart()
    cy.open_cart()
    cy.get('#checkout').click()
    purchase('Luka', 'Majstorovic', '1234', {
      uspjeh: true
    })
  });

  it('Click on "Cancel" opens all products page', () => {
    cy.get('#cancel').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('Click on "Finish" confirms purchase', () => {
    cy.get('#finish').click()
    cy.contains('Thank you for your order!')
  });

  it('Click on "Finish" empties the cart', () => {
    cy.get('#finish').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  });

  it('Click on "Back home" opens all products page', () => {
    cy.get('#finish').click()
    cy.get('#back-to-products').click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });
});
