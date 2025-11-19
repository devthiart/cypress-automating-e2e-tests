describe('Register page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  });
  
  it('Must fill in the form fields correctly to register a new user', () => {
    cy.register('Thiago André', 'thiagoandre@email.com', 'Password123');
  });
});
