describe('Wait 3', () => {
    it('Wait 3', () => {
        cy.visit('http://localhost:8080')
        cy.wait(10000)
    })
})