describe('Carsouel', () => {
  beforeEach(() => {
    cy.loadStubs();
    cy.visit('/');
  });

  it('should display movie cards', () => {
    cy.get('.carousel').children('.card');
  });

  it('should have two buttons for navigation', () => {
    cy.get('.carousel')
      .children('.carousel-button-wrapper')
      .should('have.length', 2);
  });

  it('should display new movies when a carousel button is pressed', () => {
    cy.get('.carousel .card #694919');
    cy.get('.arrow-right').click();
    cy.get('.carousel .card').first().children().should('not.contain', '#694919')
  });

  it('Should be able to display a single movie\'s details when clicking on a movie', () => {
    cy.get('.carousel').find('.card').first().click();
    cy.contains('Overview');
  });
});
