/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { Roles } from "../../types/roles"
import { BACKEND_URL } from "../../utils/constants"

describe('Register API tests', { env: { snapshotOnly: false } }, () => {
    it('should successfully register user', () => {
        // given
        const user = getRandomUser()

        // when
        cy.register(user)

        // then
        // asserted above
    })

    it('should get 400 on invalid username', () => {
        // given
        const user = {
            username: 'abc',
            password: 'password',
            firstName: 'Test',
            lastName: 'test',
            roles: [Roles.ROLE_ADMIN],
            email: 'fake@email.com'
        }

        // when + then
        cy.api({
            method: 'POST',
            url: `${BACKEND_URL}/users/signup`,
            body: user,
            failOnStatusCode: false
        }).then(resp => {
            expect(resp.status).to.eq(400)
            expect(resp.body.username).to.eq('Minimum username length: 4 characters')
        })
    })

    it('should get 400 if username already exists', () => {
        // given
        const user = getRandomUser()
        cy.register(user)

        // when + then
        cy.api({
            method: 'POST',
            url: `${BACKEND_URL}/users/signup`,
            body: user,
            failOnStatusCode: false
        }).then(resp => {
            expect(resp.status).to.eq(400)
            expect(resp.body.message).to.eq('Username is already in use')
        })
    })

})
