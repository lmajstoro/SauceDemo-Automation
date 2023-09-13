import {prijava, kupnja } from '../support/utils';
import podatci from '../fixtures/podatci_za_kupnju.json';

describe('Testiranje kupnje', () => {
  beforeEach(() => {
    prijava('standard_user', 'secret_sauce', {uspjeh:true})
    cy.dodaj_proizvod_u_kosaricu()
    cy.pritisni_kosaricu()
    cy.get('#checkout').click()
  });
  podatci.podatci_za_kupnju.forEach((podatak) => {
    it(`${podatak.test}`, () => {
      kupnja(podatak.ime, podatak.prezime, podatak.zip, {
        uspjeh: podatak.uspjeh,
        greska: podatak.greska,
      });
    });
  });

  it('Pritisak na "Cancel" vodi na popis košaricu', () => {
    cy.get('#cancel').click()
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
  });
});
