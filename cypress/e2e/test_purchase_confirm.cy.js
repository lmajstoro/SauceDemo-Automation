import {prijava, kupnja } from '../support/utils';
import korisnik from '../fixtures/user_login_data.json'

describe('Testing purchase confirmation page', () => {
  beforeEach(() => {
    prijava(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
    cy.dodaj_proizvod_u_kosaricu()
    cy.pritisni_kosaricu()
    cy.get('#checkout').click()
    kupnja('Luka', 'Majstorovic', '1234', {
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
