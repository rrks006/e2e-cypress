///<reference types="Cypress" />


describe('Text box with max characters', () =>{
    beforeEach(() => {
        cy.visit("/example-2");
    });
    it('displays the appropriate remaining characters count', () => {
        cy.get('span').invoke('text').should('equal', '15')
        cy.get('input').type('hello')
        cy.get('span').invoke('text').should('equal', '10')
        cy.get('input').type(' my friend')
        cy.get('span').invoke('text').should('equal', '0')
    });

    it('prevents user from typing more characters once max is reached', () => {
        cy.get('span').invoke('text').should('equal', '15')
        cy.get('input').type('hello my friend Rituraj')
        cy.get('span').invoke('text').should('equal', '0')
        cy.get('input').should('have.attr', 'value', 'hello my friend')
    });
});

