describe('Carsouel', () => {
    beforeEach(() => {
        cy.loadMovies();
    });
    it('should return true', () => {
        expect(true).to.equal(true);
    })
});