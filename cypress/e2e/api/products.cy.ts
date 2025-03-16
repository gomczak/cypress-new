/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { User } from "../../types/users"

describe('Product API', { env: { snapshotOnly: false } }, () => {

    let user: User

    beforeEach(() => {
        user = getRandomUser()
        cy.register(user)
        cy.loginAndSaveToken(user.username, user.password)
    })

    afterEach(() => {
        cy.get('@jwtToken').then((token) => {
            cy.deleteUser(user.username, `${token}`)
        })
    })
  
    it('should return 200 status code', () => {
        cy.get('@jwtToken').then((token) => {
            cy.api({
                method: 'GET',
                url: 'http://localhost:4001/api/products',
                headers: {
                    authorization: `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })

        
    })
  
  })
  