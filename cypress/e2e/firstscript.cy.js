describe('Basic Website Navigation and Assertion', () => {
  it('should successfully load the homepage and verify its title', () => {
    cy.visit('https://example.cypress.io');
    cy.title().should('include', 'Cypress.io: Kitchen Sink'); 
  });

  it('should navigate to the commands page and check a heading', () => {
    cy.visit('https://example.cypress.io');
    cy.get('ul.home-list').contains('Commands').click();
    cy.url().should('include', '/cypress-api');
    cy.get('h1').should('contain', 'Cypress API');
  });
});
