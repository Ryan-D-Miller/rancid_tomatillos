describe('Movie Focus', () => {
    beforeEach(() => {
        cy.loadStubs();
        cy.visit('/')
        cy.get('.carousel')
            .find('.card').first().click()
    });
    it('Should display the movie title', () => {
        cy.get('h1').contains('Money Plane');
    });
})