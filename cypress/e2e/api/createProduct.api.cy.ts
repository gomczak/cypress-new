/// <reference types="cypress" />

import { getRandomProduct } from "../../generators/productGenerator"
import { getRandomUser } from "../../generators/userGenerator"
import { Roles } from "../../types/roles"
import { BACKEND_URL } from "../../utils/constants"

describe('POST Product API tests', { env: { snapshotOnly: false } }, () => {

    it('should successfully create product as admin (200)', () => {
        // given
        const user = getRandomUser([Roles.ROLE_ADMIN])
        cy.register(user)
        cy.login(user.username, user.password)
        const product = getRandomProduct()

        // when + then
        cy.get('@token').then(token => {
            cy.api({
                method: 'POST',
                url: `${BACKEND_URL}/api/products`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: product
            }).then(resp => {
                expect(resp.status).to.eq(201)
            })
        })
    })

    it('should receive 400 if invalid stockQuantity', () => {
        // given
        const user = getRandomUser([Roles.ROLE_ADMIN])
        cy.register(user)
        cy.login(user.username, user.password)
        const originalProduct = getRandomProduct()
        const product = {
            ...originalProduct,
            stockQuantity: -1
        }

        // when + then
        cy.get('@token').then(token => {
            cy.api({
                method: 'POST',
                url: `${BACKEND_URL}/api/products`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: product,
                failOnStatusCode: false
            }).then(resp => {
                expect(resp.status).to.eq(400)
                expect(resp.body.stockQuantity).to.eq('Stock quantity cannot be negative')
            })
        })
    })

    it('should receive 401 without proper token', () => {
        // given
        const product = getRandomProduct()

        // when + then
        cy.api({
            method: 'POST',
            url: `${BACKEND_URL}/api/products`,
            body: product,
            headers: {
                authorization: 'Bearer fakeToken'
            },
            failOnStatusCode: false
        }).then(resp => {
            expect(resp.status).to.eq(401)
        })
    })

    it('should receive 403 as client', () => {
        // given
        const user = getRandomUser([Roles.ROLE_CLIENT])
        cy.register(user)
        cy.login(user.username, user.password)
        const product = getRandomProduct()

        // when + then
        cy.get('@token').then(token => {
            cy.api({
                method: 'POST',
                url: `${BACKEND_URL}/api/products`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: product,
                failOnStatusCode: false
            }).then(resp => {
                expect(resp.status).to.eq(403)
            })
        })
    })

})
