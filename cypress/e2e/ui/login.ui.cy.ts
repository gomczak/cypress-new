/// <reference types="cypress" />

describe('Login page', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('should login successfully', () => {
        // when
        cy.get('#username').type('admin')
        cy.get('#password').type('admin')
        cy.get('button').contains('Sign in').click()

        // then
        cy.get('.mt-1').should('have.text', 'awesome@testing.com')
    })

    it('should fail to login', () => {
        // when
        cy.get('#username').type('wrong')
        cy.get('#password').type('wrong')
        cy.get('button').contains('Sign in').click()

        // then
        cy.get('._description_gmcqp_50').should('have.text', 'Invalid username/password')
    })
})
