describe('Header', () => {
  beforeEach(() => {
    cy.loadStubs();
    cy.visit('/');
    cy.get('header');
  });

  it('Should have a logo', () => {
    cy.get('.logo');
  });

  it('Should return to the main url when clicking the logo', () => {
    cy.get('.carousel').get('.card').first().click();
    cy.url().should('eq', 'http://localhost:3000/694919');
    cy.get('.logo').first().click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should have filter and search input fields', () => {
    cy.get('input[type="search"]');
    cy.get('select');
  });

  it('Should be able to filter Alphabetically', () => {
    cy.get('select').select('Alphabetically');
    cy.get('.card').first().children().first().should('have.id', 528085)
  })

  it('Should be able to filter by Release Date', () => {
    cy.get('select').select('Release Date');
    cy.get('.card').first().children().first().should('have.id', 726739)
  });

  it('Should be able to filter by Rating', () => {
    cy.get('select').select('Rating');
    cy.get('.card').first().children().first().should('have.id', 726739)
  });
});
