/// <reference types="cypress" />

import { BACKEND_URL } from "../utils/constants"

Cypress.Commands.add('register', (user) => {
    cy.api({
        method: 'POST',
        url: `${BACKEND_URL}/users/signup`,
        body: user
    }).then(resp => {
        expect(resp.status).to.eq(201)
    })
})

Cypress.Commands.add('login', (username, password) => {
    cy.api({
        method: 'POST',
        url: `${BACKEND_URL}/users/signin`,
        body: {
            username: username,
            password: password
        }
    }).then(resp => {
        expect(resp.status).to.eq(200)
        cy.wrap(resp.body.token).as('token')
    })
})

Cypress.Commands.add('deleteUser', (username, token) => {
    cy.api({
        method: 'DELETE',
        url: `${BACKEND_URL}/users/${username}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(resp => {
        expect(resp.status).to.eq(204)
    })
})