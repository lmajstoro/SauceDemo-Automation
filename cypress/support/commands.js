Cypress.Commands.add("get_all_products", () => {
    cy.get('.inventory_item').then(products => {
      const product_map = new Map();
  
      products.each((index, product) => {
        const product_name = Cypress.$(product).find('.inventory_item_name').text();
        const product_price = Cypress.$(product).find('.inventory_item_price').text();
  
        product_map.set(product_name, product_price);
      });
  
      return product_map;
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