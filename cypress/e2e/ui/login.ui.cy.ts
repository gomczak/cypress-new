/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { loginPage } from "../../pages/loginPage"

describe('Login page', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('should login successfully', () => {
        // given
        const user = getRandomUser()
        cy.register(user)

        // when
        loginPage.attemptLogin(user.username, user.password)

        // then
        cy.get('.mt-1').should('have.text', user.email)
    })

    it('should fail to login', () => {
        // when
        loginPage.attemptLogin('wrong', 'wrong')

        // then
        cy.get('._description_gmcqp_50').should('have.text', 'Invalid username/password')
    })
})
