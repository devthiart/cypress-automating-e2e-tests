describe('Login page - Sad path', ()=> {
  beforeEach(()=> {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="login-button"]').click();
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',{
      statusCode:400
    }).as('stubPost')
  });
                   
  it('Checking error messages if the fields are empty', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Insira sua senha').should('be.visible');
  });

  it('Login verification fails if the credentials are wrong', () => {
    cy.login('thiagoandre@email.com', 'Senha123');
    cy.wait('@stubPost');
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  });
});