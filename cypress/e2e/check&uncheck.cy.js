describe('Practice Automation Form Fields - Checkbox Test', () => {
  it('should check and then uncheck a checkbox', () => {
    // Visit the form page
    cy.visit('https://practice-automation.com/form-fields/');

    cy.get('#drink1').check();
    cy.wait(3000);
    cy.get('#drink1').uncheck();
  });
});