describe('SauceDemo - Assertions Demo', () => {
  beforeEach(() => {
    // Visit SauceDemo login page before each test
    cy.visit('https://www.saucedemo.com/');
  });

  it('should perform text, attribute, class, input, and length assertions', () => {
    // ===== Text Assertions =====
    cy.get('.login_logo').should('have.text', 'Swag Labs');           // Exact text
    cy.get('.login_logo').should('include.text', 'Swag');             // Partial text
    cy.get('.login_logo').should('not.have.text', 'Wrong Text');      // Not equal

    // ===== Attribute Assertions =====
    cy.get('[data-test="username"]').should('have.attr', 'placeholder', 'Username'); // Placeholder check
    cy.get('[data-test="login-button"]').should('have.attr', 'data-test', 'login-button'); // Attribute exists
    cy.get('[data-test="username"]').should('not.have.attr', 'readonly');             // Attribute not present

    // ===== CSS Class Assertions =====
    cy.get('.login-box').should('have.class', 'login-box');           // Has class
    cy.get('.login-box').should('not.have.class', 'wrong-class');     // Does not have class

    // ===== Input Value Assertions =====
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="username"]').should('have.value', 'standard_user'); // Input value

    cy.get('[data-test="login-button"]').should('be.visible');        // Button visible
    cy.get('[data-test="login-button"]').should('not.have.attr', 'disabled'); // Not disabled


    // ===== Length Assertions =====
    cy.get('.input_error.form_input').should('have.length', 2);           // Username + Password fields
    cy.get('.input_error.form_input').should('have.length.greaterThan', 1); // More than 1 input
  });
});
