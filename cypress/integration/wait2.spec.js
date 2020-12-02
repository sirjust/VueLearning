describe('Wait 2', () => {
    it('Wait 2', () => {
        cy.visit('http://localhost:8080')
        cy.wait(6000)
    })
})