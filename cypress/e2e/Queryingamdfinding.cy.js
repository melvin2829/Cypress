describe('SauceDemo Element Locators Examples', () => {

  beforeEach(() => {
    // Login before each test
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('should use cy.get to find elements by CSS selector', () => {
    // Get all product items
    cy.get('.inventory_item').should('have.length', 6);
  });

  it('should use cy.contains to find element by text', () => {
    // Find the product with specific text
    cy.contains('Sauce Labs Backpack').should('be.visible');
  });

  it('should use .find to get child elements', () => {
    // Find the "Add to cart" button inside the first product item
    cy.get('.inventory_item').first().find('button').should('contain', 'Add to cart');
  });

  it('should use .first to get the first element', () => {
    // First product title
    cy.get('.inventory_item_name').first().should('contain', 'Sauce Labs Backpack');
  });

  it('should use .last to get the last element', () => {
    // Last product title
    cy.get('.inventory_item_name').last().should('contain', 'Test.allTheThings() T-Shirt (Red)');
  });

});
