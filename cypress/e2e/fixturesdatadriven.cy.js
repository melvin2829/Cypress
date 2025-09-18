describe('OrangeHRM Login - Data Driven Test', () => {
  it('runs all login test cases', () => {
    cy.fixture('loginTestCases').then((testCases) => {
      testCases.forEach((testCase) => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('input[name="username"]').clear().type(testCase.username);
        cy.get('input[name="password"]').clear().type(testCase.password);
        cy.get('button[type="submit"]').click();

        if (testCase.expectedResult === 'success') {
          cy.url().should('include', '/dashboard');
          cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
        } else {
          cy.get('.oxd-alert-content-text', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Invalid credentials');
        }
      });
    });
  });
});
