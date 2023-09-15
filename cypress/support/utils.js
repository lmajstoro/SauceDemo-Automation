export const login = (kor_ime, lozinka, postavke = {}) => {
    cy.visit('/');
    cy.get('#user-name').type(kor_ime);
    cy.get('#password').type(lozinka);
    cy.get('#login-button').click();
  
    if (!postavke.uspjeh) {
      cy.contains(postavke.greska).should('exist');
    } else {
      cy.get('#inventory_container').should('exist');
    }
  };

export const purchase = (ime, prezime, zip, postavke = {}) => {
    if (ime !== null)
    {
      cy.get('#first-name').type(ime, { force: true });
    }
    
    if (prezime !== null)
    {
      cy.get('#last-name').type(prezime, { force: true });
    }
    
    if (zip !== null)
    {
      cy.get('#postal-code').type(zip, { force: true })
    }
    ;
    cy.get('#continue').click()
  
    if (!postavke.uspjeh) {
      cy.contains(postavke.greska).should('exist');
    } else {
      cy.get('#checkout_summary_container').should('exist');
    }
  };