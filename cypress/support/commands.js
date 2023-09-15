Cypress.Commands.add("get_all_products", () => {
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

Cypress.Commands.add("open_cart", () =>{
  cy.get('#shopping_cart_container').click()
})

Cypress.Commands.add("add_to_cart", () =>{
  cy.contains('Add to cart').click()
  cy.get('.shopping_cart_badge').should('exist')
})

Cypress.Commands.add("remove_from_cart", () =>{
  cy.contains('Remove').click()
  cy.get('.shopping_cart_badge').should('not.exist')
})