describe('Movie Focus', () => {
  beforeEach(() => {
    cy.loadStubs();
    cy.visit('/');
    cy.get('.carousel').find('.card').first().click();
  });
  it('Should display the movie title', () => {
    cy.get('h1').contains('Money Plane');
  });
  it('should be able to click the x button to go back to the main movie view', () => {
    cy.get('button').click();
    cy.get('.carousel').children('.card').should('have.length', 5);
  });
});
