describe('SauceDemo - Assertions Demo', () => {
  beforeEach(() => {
    // Visit SauceDemo login page before each test
  });
    it('Navigation and Control', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.reload();
    

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.go('back');
    cy.url().should('include', '/');
    cy.go('forward');
    cy.url().should('include', '/inventory.html');
    
    });
});