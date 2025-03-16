/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { User } from "../../types/users"

describe('example to-do app', () => {

    let user: User

    beforeEach(() => {
        user = getRandomUser()
        cy.openHomePage(user)
    })
  
    it('displays two todo items by default', () => {
        cy.get('.mt-1').should('have.text', user.email)
    })
  
  })
  