describe('Exercises - Class 03', () => {
  it('Checking if pet images are visible', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.cards').should('be.visible');
  })
});