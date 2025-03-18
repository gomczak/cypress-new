/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { BACKEND_URL } from "../../utils/constants"

describe('GET Products API tests', { env: { snapshotOnly: false } }, () => {
    it('should successfully get products', () => {
        // given
        const user = getRandomUser()
        cy.register(user)
        cy.login(user.username, user.password)
        
        // when + then
        cy.get('@token').then(token => {
            cy.api({
                method: 'GET',
                url: `${BACKEND_URL}/api/products`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => {
                expect(resp.status).to.eq(200)
                expect(resp.body).to.be.an('array')
                expect(resp.body.length).to.be.at.least(5)
            })
        })
    })

    it('should get 401 without token', () => {
        // when + then
        cy.api({
            method: 'GET',
            url: `${BACKEND_URL}/api/products`,
            failOnStatusCode: false
        }).then(resp => {
            expect(resp.status).to.eq(401)
        })
    })

})
