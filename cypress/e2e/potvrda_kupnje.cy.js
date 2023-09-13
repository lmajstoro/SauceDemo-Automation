import {prijava, kupnja } from '../support/utils';
import korisnik from '../fixtures/podatci_za_prijavu.json'

describe('Testiranje kupnje', () => {
  beforeEach(() => {
    prijava(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
    cy.dodaj_proizvod_u_kosaricu()
    cy.pritisni_kosaricu()
    cy.get('#checkout').click()
    kupnja('Luka', 'Majstorovic', '1234', {
      uspjeh: true
    })
  });

  it('Klik na "Cancel" gumb otvara popis proizvoda', () => {
    cy.get('#cancel').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('Klik na "Finish" gumb potvrđuje kupnju', () => {
    cy.get('#finish').click()
    cy.contains('Thank you for your order!')
  });

  it('Klik na "Finish" gumb prazni košaricu', () => {
    cy.get('#finish').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  });

  it('Klik na "Back Home" gumb vodi na ispravnu stranicu', () => {
    cy.get('#finish').click()
    cy.get('#back-to-products').click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });
});
