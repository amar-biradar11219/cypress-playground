describe('get command use ',()=>{
    it('get command tests',()=>{
        cy.visit('https://example.cypress.io/')
        cy.contains('get').click()
        // cy.get('#query-btn').should('contain','Button')
        // cy.get('#query-btn').should('contain', 'Button')
        cy.get('#querying .well>button:first')
            .should('contain', 'Button')
            .click()

    })
})