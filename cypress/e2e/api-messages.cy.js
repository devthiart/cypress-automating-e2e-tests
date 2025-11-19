describe('API Adopet', () => {
  const authorization = `Bearer [TOKEN]`;

  it('API Messages', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/85368439-fc37-4b0f-98ee-88fd6f3a6f47',
      headers: { authorization }
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('msg');
    })
  });
});