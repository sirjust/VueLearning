describe('Checks increment', () => {
    it('Finds increment button and clicks', () => {
        cy.visit('http://localhost:8080')
        cy.get('#increment-by-five')
            .click({'ctrlKey': true})
            .click({'ctrlKey': true})
        cy.get('#counter')
            .should('contain', '10')
    })
})