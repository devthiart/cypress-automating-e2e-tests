describe('Exercises - Class 01', () => {
  it('Checking if the API return the username', () => {
    const authorization = `Bearer [TOKEN]`;
    
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/85368439-fc37-4b0f-98ee-88fd6f3a6f47',
      headers: { authorization }
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('perfil');
      // console.log(res.body);
      expect(res.body.perfil).to.have.property('nome');
      expect(res.body.perfil.nome).is.equal('Thiago André');
    });
  });

  it('Cypress To Do List - Checking if deleting completed tasks works', () => {
    cy.visit('https://example.cypress.io/todo');
    cy.get('.toggle')
      .each(
        ($el) => {
          cy.wrap($el).click()
        }
      );
    cy.get('.footer > .todo-button').click();
    cy.get('.todo-list').find('li').should('not.exist');
  });

  it('Cypress To Do List - Checking if the task filter is working.', () => {
    cy.visit('https://example.cypress.io/todo');
    cy.get(':nth-child(1) > .view > .toggle').click();

    cy.contains('Active').click();
    cy.get('.todo-list').find('li').should('have.length', 1);
    cy.contains('Walk the dog');

    cy.contains('Completed').click();
    cy.get('.todo-list').find('li').should('have.length', 1);
    cy.contains('Pay electric bill');
  });
});
