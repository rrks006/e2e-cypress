///<reference types="Cypress" />


describe('Text box with max characters', () =>{
    it('displays the appropriate remaining characters count', () => {
        cy.visit("http://localhost:3000/example-3");
        cy.get('[data-cy="last-name-chars-left-count"]').as("charsLeftSpan")
        cy.get('[data-cy="input-last-name"]').as("chartInput")
        // Chaining results
        cy.get('@charsLeftSpan').then($charsLeftSpan => {
            expect ($charsLeftSpan.text()).to.equal('15');
        });
        cy.get("@charsLeftSpan").invoke('text').should('equal', '15')
        cy.get("@chartInput").type('hello')
        cy.get("@charsLeftSpan").invoke('text').should('equal', '10')
        cy.get("@chartInput").type(' my friend')
        cy.get("@charsLeftSpan").invoke('text').should('equal', '0')
    });
});

