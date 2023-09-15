export const login = (username, password, settings = {}) => {
    cy.visit('/');
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  
    if (!settings.success) {
      cy.contains(settings.error_text).should('exist');
    } else {
      cy.get('#inventory_container').should('exist');
    }
  };

export const purchase = (first_name, last_name, zip_code, settings = {}) => {
    if (first_name !== null)
    {
      cy.get('#first-name').type(first_name, { force: true });
    }
    
    if (last_name !== null)
    {
      cy.get('#last-name').type(last_name, { force: true });
    }
    
    if (zip_code !== null)
    {
      cy.get('#postal-code').type(zip_code, { force: true })
    }
    ;
    cy.get('#continue').click()
  
    if (!settings.success) {
      cy.contains(settings.error_text).should('exist');
    } else {
      cy.get('#checkout_summary_container').should('exist');
    }
  };