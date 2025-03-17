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
