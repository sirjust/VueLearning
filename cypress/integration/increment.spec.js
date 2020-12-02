describe('Checks increment', () => {
    it('Finds increment button and clicks', () => {
        cy.visit('http://localhost:8080')
        cy.get('#increment')
            .click()
            .click()
        cy.get('#increment-display')
            .should('contain', '2')
    })
})