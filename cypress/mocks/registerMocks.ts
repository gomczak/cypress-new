export const registerMocks = {
    mockSuccess: () => {
        cy.intercept('POST', '**/users/signup', {
            statusCode: 201
        })
    },

    mockAlreadyExists: () => {
        cy.intercept('POST', '**/users/signup', {
            statusCode: 400,
            body: {
                message: 'Username already in use'
            }
        })
    }
}