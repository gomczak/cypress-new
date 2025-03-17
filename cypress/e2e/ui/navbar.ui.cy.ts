/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { navbar } from "../../pages/components/navbar"
import { loginPage } from "../../pages/loginPage"
import { User } from "../../types/user"

describe('Navbar tests', () => {
    let user: User

    beforeEach(() => {
        user = getRandomUser()
        cy.register(user)
        cy.login(user.username, user.password)
        cy.get('@token').then(token => {
            localStorage.setItem('token', `${token}`)
        })
        cy.visit('')
    })

    afterEach(() => {
        // usuwanie uzytkownika przez API
    })

    it('should open products page', () => {
        // when
        navbar.clickMenuItem('Products')

        // then
        cy.url().should('contain', '/products')
        cy.get('[data-testid="product-search"]').should('be.visible')
    })

    it('should open profile page', () => {
        // when
        navbar.clickName(`${user.firstName} ${user.lastName}`)

        // then
        cy.url().should('contain', '/profile')
        cy.get('#email').should('have.value', user.email)
        cy.get('#firstName').should('have.value', user.firstName)
        cy.get('#lastName').should('have.value', user.lastName)
    })

    it('should logout', () => {
        // when
        navbar.clickLogout()

        // then
        cy.url().should('contain', '/login')
        cy.get('button').contains('Sign in').should('be.visible')
    })

    it.only('should display correct number of cart items', () => {
        // given
        
        // then
        
    })

})
