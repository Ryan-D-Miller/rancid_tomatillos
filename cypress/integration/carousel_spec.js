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

    it('Should change the number of movies displayed depending on screen width', () => {
        cy.viewport(1300, 1200);
        cy.wait(1501);
        cy.get('.carousel').children('.card').should('have.length', 5);
        cy.viewport(1100, 1200);
        cy.wait(1501);
        cy.get('.carousel').children('.card').should('have.length', 4);
        cy.viewport(900, 1200);
        cy.wait(1501);
        cy.get('.carousel').children('.card').should('have.length', 3);
        cy.viewport(700, 1200);
        cy.wait(1501);
        cy.get('.carousel').children('.card').should('have.length', 2);
        cy.viewport(600, 1200);
        cy.wait(1501);
        cy.get('.carousel').children('.card').should('have.length', 1);
    })
});