import {login, purchase} from '../support/utils';
import purchase_data from '../fixtures/user_purchase_data.json';

describe('Testing purchase page', () => {
  beforeEach(() => {
    login('standard_user', 'secret_sauce', {success:true})
    cy.add_to_cart()
    cy.open_cart()
    cy.get('#checkout').click()
  });
  purchase_data.purchase_data.forEach((purchase_item) => {
    it(`${purchase_item.test_name}`, () => {
      purchase(purchase_item.first_name, purchase_item.last_name, purchase_item.zip_code, {
        success: purchase_item.success,
        error_text: purchase_item.error_text,
      });
    });
  });

  it('Click on "Cancel" takes user to cart list', () => {
    cy.get('#cancel').click()
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
  });
});
