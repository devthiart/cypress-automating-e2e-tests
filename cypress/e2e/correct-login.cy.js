describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  });
  
  it('Must fill in the login fields correctly and authenticate the user on the page.', () => {
    cy.get('[data-test="input-loginEmail"]').type('thiagoandre@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  });
});
