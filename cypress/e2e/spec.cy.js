describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Thiago André');
    cy.get('input[name="email"]').type('thiagoandre@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();
  });

  it("Must load the page correctly and click on the button 'Ver pets disponíveis para adoção'", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click();
  });

  it("Must load the page correctly and the message button on header menu need to access message page", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__message').click();
  });

  it("Must load the page correctly and the home button on header menu need to access the home page", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/message');
    cy.get('.header__home').click();
  });

  it("Must load the login page correctly", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  });

  it("Must load the home page correctly", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  });
});
