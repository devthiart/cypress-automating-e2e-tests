describe('Exercises - Class 01', () => {
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

  it("Must load the home page correctly and access the page to speak to the responsible party", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    // cy.get('.card__contact').first().click();
    cy.get('.card__contact').eq(0).click();
  });
});
