describe('Wait 1', () => {
    it('Wait 1', () => {
        cy.visit('http://localhost:8080')
        cy.wait(5000)
    })
})