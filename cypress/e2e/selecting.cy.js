///<reference types="Cypress" />


describe('Text box with max characters', () =>{
    it('displays the appropriate remaining characters count', () => {
        cy.visit("http://localhost:3000/example-3");
        cy.get('[data-cy="last-name-chars-left-count"]').invoke('text').should('equal', '15')
        cy.get('[data-cy="input-last-name"]').type('hello')
        cy.get('[data-cy="last-name-chars-left-count"]').invoke('text').should('equal', '10')
        cy.get('[data-cy="input-last-name"]').type(' my friend')
        cy.get('[data-cy="last-name-chars-left-count"]').invoke('text').should('equal', '0')
    });
});

