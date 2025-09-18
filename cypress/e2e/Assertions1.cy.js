describe('SauceDemo - Assertions Demo', () => {
  beforeEach(() => {
    // Visit SauceDemo login page before each test
  });
    it('should perform text, attribute, class, input, and length assertions', () => {
    cy.visit('https://www.saucedemo.com/');

//1.Existence and Visibility 3.Attribute Values 5.nput Values. 6.length.


   cy.get('#user-name').should('exist');
   cy.get('#inventory_container').should('not.exist');
   cy.get('#login-button').should('be.visible'); 
   cy.get('#user-name').should('have.attr', 'placeholder', 'Username');
   cy.get('#login-button').should('not.have.attr', 'readonly');
   cy.get('#login-button')
    .should('be.visible')
    .and('have.text', '')
    .and('not.have.class', 'disabled');
   cy.get('#user-name').type('standard_user');
   cy.get('[data-test="username"]').should('have.value', 'standard_user');
   cy.get('#password').type('secret_sauce');
   cy.get('#login-button').click();
   cy.get('.bm-menu-wrap').should('not.be.visible');
   cy.get('.bm-burger-button').should('have.class', 'bm-burger-button');
   cy.get('.inventory_item').should('have.length', 6); 
   cy.get('.inventory_item').should('have.length.greaterThan', 3);
   
      
   



// 2.Text Content.
   cy.get('.app_logo').should('have.text', 'Swag Labs');
   cy.get('.app_logo').should('include.text', 'Swag');
   cy.get('.app_logo').should('not.have.text', 'Bags'); 

   


    });

});
