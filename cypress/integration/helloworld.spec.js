describe('Find hello world test', () => {
    it('Finds hello world', () => {
        cy.visit('http://localhost:8080')
        cy.get('#hello-world')
            .should('contain', 'hello world')
    })
})