describe('Hamburger', () => {
  beforeEach(() => {
    cy.loadStubs();
    cy.visit('/');
  });

  it('Should only appear on small screen widths', () => {
    cy.viewport(1200, 1200);
    cy.get('header').children().should('not.have.class', 'bm-overlay');
    cy.viewport(600, 1200)
    cy.get('header div').children().should('have.class', 'bm-overlay');
  });
  
  it('Should contain a search & filter bar', () => {
    cy.viewport(600, 1200)
    cy.get('header div').children().get('input');
    cy.get('header div').children().get('select').contains('Filter');
  });
});
