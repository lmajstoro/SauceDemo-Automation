import { login} from '../support/utils';
import user from '../fixtures/user_login_data.json'

describe('Testing all products page', () => {
  beforeEach(() => {
    login(user.korisnik, user.lozinka, {uspjeh:true})
  });

  it('Filter "Name A-Z" sorts products alphabetically, ascending', () => {
    cy.get('.product_sort_container').select('Name (A to Z)');
    cy.get_all_products().then(artikli => {
      provjeri_poredak_a_z(artikli)
    });
  });

  it('Filter "Name Z-A" sorts products alphabetically, descending', () => {
    cy.get('.product_sort_container').select('Name (Z to A)');
    cy.get_all_products().then(artikli => { 
      provjeri_poredak_z_a(artikli)
    });
  });

  it('Filter "Price (low to high) sorts products by price, ascending', () => {
    cy.get('.product_sort_container').select('Price (low to high)');
    cy.get_all_products().then(artikli => {
      provjeri_poredak_manja_veca(artikli)
    });
  });

  it('Filter "Price (high to low)" sorts products by price, descending', () => {
    cy.get('.product_sort_container').select('Price (high to low)');
    cy.get_all_products().then(artikli => {
      provjeri_poredak_veca_manja(artikli)
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

function provjeri_poredak_a_z(artikli) {
  let prethodni = null;

  artikli.forEach((cijena, naziv) => {
    if (prethodni !== null && naziv < prethodni) {
      cy.fail(`Artikli nisu abecedno poredani: ${naziv} dolazi poslje ${prethodni}`);
    }
    prethodni = naziv;
  });
}

function provjeri_poredak_z_a(artikli) {
  let prethodni = null;

  artikli.forEach((cijena, naziv) => {
    if (prethodni !== null && naziv > prethodni) {
      cy.fail(`Artikli nisu abecedno poredani: ${naziv} dolazi poslje ${prethodni}`);
    }
    prethodni = naziv;
  });
}

function provjeri_poredak_manja_veca(artikli) {
  let prethodni = null;

  artikli.forEach((cijena, naziv) => {
    let cijenaBroj = parseFloat(cijena.replace('$', ''));
    if (prethodni !== null && cijenaBroj < prethodni) {
      cy.fail(`Artikli nisu cijenovno poredani: ${cijena} dolazi poslje ${prethodni}`);
    }
    prethodni = cijenaBroj;
  });
}

function provjeri_poredak_veca_manja(artikli) {
  let prethodni = null;

  artikli.forEach((cijena, naziv) => {
    let cijenaBroj = parseFloat(cijena.replace('$', ''));
    if (prethodni !== null && cijenaBroj > prethodni) {
      cy.fail(`Artikli nisu cijenovno poredani: ${cijena} dolazi poslje ${prethodni}`);
    }
    prethodni = cijenaBroj;
  });
}