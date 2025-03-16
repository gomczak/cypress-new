/// <reference types="cypress" />

import { User } from "../types/users"
import { getRandomUser } from "../generators/userGenerator"
describe('example to-do app', () => {
  let user: User

  beforeEach(() => {
    user = getRandomUser()
    cy.register(user)
    cy.login(user.username, user.password)
  })

    afterEach(() => {
      cy.get('@jwtToken').then((token) => {
        cy.deleteUser(user.username, `${token}`)
      })
    })
  
    it('displays two todo items by default', () => {
        cy.get('.mt-1').should('have.text', user.email)
    })
  
  })
  