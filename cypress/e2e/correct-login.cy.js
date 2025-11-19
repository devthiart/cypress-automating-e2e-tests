describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  });
  
  it('Must fill in the login fields correctly and authenticate the user on the page.', () => {
    cy.login('thiagoandre@email.com', 'Senha123');
  });
});
