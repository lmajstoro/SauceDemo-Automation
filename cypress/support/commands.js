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