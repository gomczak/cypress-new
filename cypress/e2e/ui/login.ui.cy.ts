/// <reference types="cypress" />

import { loginPage } from "../../pages/loginPage"

describe('Login page', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('should login successfully', () => {
        // given
        // const user = generateUser()
        // cy.register(user)

        // when
        loginPage.attemptLogin('admin', 'admin')

        // then
        cy.get('.mt-1').should('have.text', 'awesome@testing.com')
    })

    it('should fail to login', () => {
        // when
        loginPage.attemptLogin('wrong', 'wrong')

        // then
        cy.get('._description_gmcqp_50').should('have.text', 'Invalid username/password')
    })
})
