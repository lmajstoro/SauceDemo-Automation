import { prijava} from '../support/utils';
import korisnik from '../fixtures/podatci_za_prijavu.json'

describe('Testiranje stranice specificnog proizvoda', () => {
  beforeEach(() => {
    prijava(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
    cy.contains('Sauce Labs Backpack').click()
  });

  it('Pritisak na "Back to products" otvara stranicu svih proizvoda', () => {
    cy.get('#back-to-products').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('Uspješno dodavanje proizvoda u košaricu i prikaz ikone na košarici', () => {
    cy.dodaj_proizvod_u_kosaricu()
  });

  it('Uspješno brisanje proizvoda iz košaricu i nestajanje ikone na košarici', () => {
    cy.dodaj_proizvod_u_kosaricu()
    cy.ukloni_proizvod_iz_kosarice()
  });
});