// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("dohvati_sve_artikle", () => {
    cy.get('.inventory_item').then(artikli => {
      const mapaArtikala = new Map();
  
      artikli.each((index, artikl) => {
        const naziv = Cypress.$(artikl).find('.inventory_item_name').text();
        const cijena = Cypress.$(artikl).find('.inventory_item_price').text();
  
        mapaArtikala.set(naziv, cijena);
      });
  
      return mapaArtikala;
    });
  });

Cypress.Commands.add("pritisni_kosaricu", () =>{
  cy.get('#shopping_cart_container').click()
})

Cypress.Commands.add("dodaj_proizvod_u_kosaricu", () =>{
  cy.contains('Add to cart').click()
  cy.get('.shopping_cart_badge').should('exist')
})

Cypress.Commands.add("ukloni_proizvod_iz_kosarice", () =>{
  cy.contains('Remove').click()
  cy.get('.shopping_cart_badge').should('not.exist')
})