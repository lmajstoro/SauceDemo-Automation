import {login} from '../support/utils';
import user from '../fixtures/user_login_data.json'

describe('Testing all products page', () => {
  beforeEach(() => {
    login(user.username, user.password, {success:true})
  });

  it('Filter "Name A-Z" sorts products alphabetically, ascending', () => {
    cy.get('.product_sort_container').select('Name (A to Z)');
    cy.get_all_products().then(all_products => {
      check_sorting_a_z(all_products)
    });
  });

  it('Filter "Name Z-A" sorts products alphabetically, descending', () => {
    cy.get('.product_sort_container').select('Name (Z to A)');
    cy.get_all_products().then(all_products => { 
      check_sorting_z_a(all_products)
    });
  });

  it('Filter "Price (low to high) sorts products by price, ascending', () => {
    cy.get('.product_sort_container').select('Price (low to high)');
    cy.get_all_products().then(all_products => {
      check_sorting_price_low_high(all_products)
    });
  });

  it('Filter "Price (high to low)" sorts products by price, descending', () => {
    cy.get('.product_sort_container').select('Price (high to low)');
    cy.get_all_products().then(all_products => {
      check_sorting_price_high_low(all_products)
    });
  });

  it('Click on product opens specific product page', () => {
    cy.contains('Sauce Labs Backpack').click()
    cy.url().should('include', 'inventory-item');
  });

  it('Click on "Add to cart" adds product to cart', () => {
    cy.add_to_cart()
  });

  it('Click on "Remove" removes product from the cart', () => {
    cy.add_to_cart()
    cy.remove_from_cart()
  });
});

function check_sorting_a_z(all_products) {
  let previous = null;

  all_products.forEach((price, product_title) => {
    if (previous !== null && product_title < previous) {
      cy.fail(`Articles are not in alphabetical order: ${product_title} comes before ${previous}`);
    }
    previous = product_title;
  });
}

function check_sorting_z_a(all_products) {
  let previous = null;

  all_products.forEach((price, product_title) => {
    if (previous !== null && product_title > previous) {
      cy.fail(`Articles are not in alphabetical order: ${product_title} comes after ${previous}`);
    }
    previous = product_title;
  });
}

function check_sorting_price_low_high(all_products) {
  let previous = null;

  all_products.forEach((price, product_title) => {
    let parsed_price = parseFloat(price.replace('$', ''));
    if (previous !== null && parsed_price < previous) {
      cy.fail(`Articles are not ordered by price: ${price} comes arter ${previous}`);
    }
    previous = parsed_price;
  });
}

function check_sorting_price_high_low(all_products) {
  let previous = null;

  all_products.forEach((price, product_title) => {
    let parsed_price = parseFloat(price.replace('$', ''));
    if (previous !== null && parsed_price > previous) {
      cy.fail(`Articles are not ordered by price: ${price} comes before ${previous}`);
    }
    previous = parsed_price;
  });
}