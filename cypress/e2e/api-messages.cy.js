describe('API Adopet', () => {
  // const expectedTime = Math.random() * 1000; // Simulating Flaky Tests

  it('API Messages', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/85368439-fc37-4b0f-98ee-88fd6f3a6f47',
      headers: Cypress.env()
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('msg');
      // expect(res.duration).to.be.lte(expectedTime); // Simulatin Flaky Tests
    });
  });
});