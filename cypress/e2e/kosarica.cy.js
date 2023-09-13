import {prijava} from '../support/utils';
import korisnik from '../fixtures/podatci_za_prijavu.json'

describe('Testiranje košarice', () => {
  beforeEach(() => {
    prijava(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
    cy.dodaj_proizvod_u_kosaricu()
    cy.pritisni_kosaricu()
  });

  it('Otvaranje stranice svih proizvoda klikom na "Continue Shopping', () => {
    cy.get('#continue-shopping').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('Otvaranje stranice kupnje klikom na "Checkout', () => {
    cy.get('#checkout').click()
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
  });

  it('Uspješno brisanje proizvoda iz košaricu i nestajanje ikone na košarici', () => {
    cy.ukloni_proizvod_iz_kosarice()
  });

  it('Pritisak na ime proizvoda otvara detaljnu stranicu proizvoda', () => {
    cy.contains('Sauce Labs Backpack').click()
    cy.url().should('include', 'inventory-item');
  });
});
