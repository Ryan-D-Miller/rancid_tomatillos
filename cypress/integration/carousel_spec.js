describe('Carsouel', () => {
    beforeEach(() => {
        cy.loadStubs();
        cy.visit('/')
    });
    it('should return true', () => {
        expect(true).to.equal(true);
    })
});