describe('Register page', () => {
  it('Must fill in the form fields correctly to register a new user', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Thiago André');
    cy.get('[data-test="input-email"]').type('thiagoandre@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  });
});
