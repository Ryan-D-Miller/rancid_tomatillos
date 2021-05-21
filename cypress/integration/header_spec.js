describe('Header', () => {
  beforeEach(() => {
    cy.loadStubs();
    cy.visit('/');
  });
  it('Should visit the page and render the header', () => {
    cy.get('.logo')
      .should('have.attr', 'src')
      .should('include', 'rancid_tomatillos_logo');
  });
  it('should have a filter and search input fields', () => {
    cy.get('.header').within(() => {
      cy.get('input[type="search"]');
    });
    cy.get('.header').within(() => {
      cy.get('select');
    });
  });
});
