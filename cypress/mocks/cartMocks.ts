const url = '**/api/cart'

export const cartMocks = {

    success: (username: string) => {
        cy.intercept('GET', url, {
            statusCode: 200,
            body: {
                username: username,
                items: [],
                totalPrice: 0,
                totalItems: 0
            }
        })
    }

}