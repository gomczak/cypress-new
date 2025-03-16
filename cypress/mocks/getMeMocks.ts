import { User } from "../types/users"

const url = '**/users/me'

export const meMocks = {

    success: (user: User) => {
        cy.intercept('GET', url, {
            statusCode: 200,
            body: {
                id: 1,
                username: user.username,
                email: user.email,
                roles: user.roles,
                firstName: user.firstName,
                lastName: user.lastName
            }
        })
    }

}