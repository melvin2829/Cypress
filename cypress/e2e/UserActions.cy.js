describe('SauceDemo Action Commands', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should demonstrate type, clear and click', () => {
    // Type into username & password fields
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');

    // Clear and retype username
    cy.get('[data-test="username"]').clear().type('standard_user');

    // Click login button
    cy.get('[data-test="login-button"]').click();

    // Verify we landed on inventory page
    cy.url().should('include', '/inventory');
  });

  it('should demonstrate trigger on an element', () => {
    // Login first
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Trigger a mouseover on the menu button (top-left)
    cy.get('.bm-burger-button').trigger('mouseover');
    cy.get('.bm-burger-button').click(); // open menu

    cy.get('.product_sort_container').select('lohi')
     cy.get('.inventory_item_price').first().should('contain', '$7.99');
  });

 
});