import {login, purchase } from '../support/utils';
import podatci from '../fixtures/user_purchase_data.json';

describe('Testing purchase page', () => {
  beforeEach(() => {
    login('standard_user', 'secret_sauce', {uspjeh:true})
    cy.add_to_cart()
    cy.open_cart()
    cy.get('#checkout').click()
  });
  podatci.podatci_za_kupnju.forEach((podatak) => {
    it(`${podatak.test}`, () => {
      purchase(podatak.ime, podatak.prezime, podatak.zip, {
        uspjeh: podatak.uspjeh,
        greska: podatak.greska,
      });
    });
  });

  it('Click on "Cancel" takes user to cart list', () => {
    cy.get('#cancel').click()
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
  });
});
