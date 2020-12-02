describe('Checks navigation', () => {
    it('Navigates to todos page', () => {
        cy.visit('http://localhost:8080')
        cy.get('#todos-link')
            .click()
        cy.url().should('contain', 'todos')
    })
})