describe('Carsouel', () => {
  beforeEach(() => {
    cy.loadStubs();
    cy.visit('/');
  });

  it('should display five movie cards', () => {
    cy.get('.carousel').children('.card').should('have.length', 5);
  });

  it('should have two buttons for navigation', () => {
    cy.get('.carousel')
      .children('.carousel-button-wrapper')
      .should('have.length', 2);
  });

  it('should display 5 new movies when a carousel button is pressed', () => {
    cy.get('.carousel').find('.card').first().should('have.id', '694919');
    cy.get('.arrow-right').click();
    cy.get('.carousel').find('.card').first().should('have.id', '726739');
  });

  it('should be able to display a single movie when clicking on a movie', () => {
    cy.get('.carousel').find('.card').first().click();
    cy.get('h1').contains('Money Plane');
  });
});
