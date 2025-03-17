import { CartResponse } from "../types/cart"

export const cartMocks = {

    mockCartWithNItems: (username: string, totalItems: number) => {
        const responseBody: CartResponse = {
            username: username,
            totalItems: totalItems,
            totalPrice: 100,
            items: [{ productId: 1, quantity: totalItems }]
        }

        cy.intercept('GET', '**/api/cart', {
            statusCode: 200,
            body: responseBody
        })
    }

}