import {prijava} from '../support/utils';
import korisnik from '../fixtures/user_login_data.json'

describe('Testing cart', () => {
  beforeEach(() => {
    prijava(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
    cy.dodaj_proizvod_u_kosaricu()
    cy.pritisni_kosaricu()
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
    cy.ukloni_proizvod_iz_kosarice()
  });

  it('Click on product name opens specific product page', () => {
    cy.contains('Sauce Labs Backpack').click()
    cy.url().should('include', 'inventory-item');
  });
});
