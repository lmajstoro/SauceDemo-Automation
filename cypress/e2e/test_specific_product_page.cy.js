import { prijava} from '../support/utils';
import korisnik from '../fixtures/user_login_data.json'

describe('Testing specific product page', () => {
  beforeEach(() => {
    prijava(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
    cy.contains('Sauce Labs Backpack').click()
  });

  it('Click on "Back to products" opens all products page', () => {
    cy.get('#back-to-products').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('Succesfull adding of product to cart and indicator display on cart icon', () => {
    cy.dodaj_proizvod_u_kosaricu()
  });

  it('Succesfull removing of product to cart and indicator display removed on cart icon', () => {
    cy.dodaj_proizvod_u_kosaricu()
    cy.ukloni_proizvod_iz_kosarice()
  });
});