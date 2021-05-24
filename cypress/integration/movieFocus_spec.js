describe('Movie Focus', () => {
    beforeEach(() => {
        cy.loadStubs();
        cy.visit('/')
        cy.get('.carousel')
            .find('.card').first().click()
    });

    it('Should change the url path when clicking on a movie', () => {
        cy.url().should('eq', 'http://localhost:3000/694919')
    });

    it('Should display movie information', () => {
        cy.get('.focus')
            .contains('Money Plane');
        cy.get('.focus')
            .contains('Release Date');
        cy.get('.focus')
            .contains('Run Time');
        cy.get('.focus')
            .contains('Overview');
    });

    it('should be able to click the x button to go back to the main movie view', () => {
        cy.get('button').click()
        cy.get('.carousel')
            .children('.card')
            .contains('Money Plane')
    });

    it('Should change the url path when exiting Movie Focus', () => {
        cy.get('button').click()
        cy.url().should('eq', 'http://localhost:3000/')
    });

})
