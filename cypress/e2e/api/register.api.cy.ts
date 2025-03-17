/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"

describe('Register API tests', () => {
    it('should successfully register user', () => {
        // given
        const user = getRandomUser()

        // when + then
        cy.request({
            method: 'POST',
            url: 'http://localhost:4001/users/signup', 
            body: user
        }).then(resp => {
            expect(resp.status).to.eq(201)
        })
    })
  })
  