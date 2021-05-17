describe('Header', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Should visit the page and render the header', () => {
        cy.get('img[alt="Rancid Tomatillos Logo"]')
    });
});