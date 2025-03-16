import { meMocks } from "../mocks/getMeMocks"
import { cartMocks } from "../mocks/cartMocks"
import { User } from "../types/users"

Cypress.Commands.add('openHomePage', (user: User) => {
    localStorage.setItem('token', 'fakeJWT')
    meMocks.success(user)
    cartMocks.success(user.username)
    cy.visit('')
})