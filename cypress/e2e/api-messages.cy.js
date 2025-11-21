describe('API Adopet', () => {
  // const expectedTime = Math.random() * 1000; // Simulating Flaky Tests
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NTM2ODQzOS1mYzM3LTRiMGYtOThlZS04OGZkNmYzYTZmNDciLCJhZG9wdGVyTmFtZSI6IlRoaWFnbyBBbmRyw6kiLCJpYXQiOjE3NjM3Mzg4MzYsImV4cCI6MTc2Mzk5ODAzNn0.APL49KLAzRcEPqM32Ck2_G3HgV26r5pDZ9JkxX8vqbQ`;

  it('API Messages', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/85368439-fc37-4b0f-98ee-88fd6f3a6f47',
      headers: { authorization }
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('msg');
      // expect(res.duration).to.be.lte(expectedTime); // Simulatin Flaky Tests
    })
  });
});
