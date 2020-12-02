describe('Wait 4', () => {
    it('Wait 4', () => {
        cy.visit('http://localhost:8080')
        cy.wait(6000)
    })
})