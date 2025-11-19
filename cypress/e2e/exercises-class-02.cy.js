describe('Exercises - Class 02', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it("The AdoPet title must be correctly", () => {
    cy.title().should('eq', 'AdoPet');
  });

  it("Checking if the text 'Quem ama adota!' is present in the document", () => {
    cy.contains('p','Quem ama adota!').should('be.visible');
  });

  it("Checking if the text 'Adotar pode mudar...' is present in the document", () => {
    cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
  });

  it("testing login via a different flow", () => {
    cy.get('.header__message').click();
    cy.get('[data-test="input-loginEmail"]').type('thiagoandre@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  });
});