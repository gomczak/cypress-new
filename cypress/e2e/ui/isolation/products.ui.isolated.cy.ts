/// <reference types="cypress" />

import products from '../../../fixtures/products.json'
import { getRandomUser } from '../../../generators/userGenerator'
import { meMocks } from '../../../mocks/meMocks'
import { cartMocks } from '../../../mocks/cartMocks'
import { productMocks } from '../../../mocks/productMocks'

describe('Products page tests in isolation', () => {
    beforeEach(() => {
        const user = getRandomUser()
        localStorage.setItem('token', 'fake token')
        meMocks.mockSuccess(user)
        cartMocks.mockCartWithNItems(user.username, 2)
        productMocks.mockSuccess()
        cy.visit('/products')
    })

    it('should display all products', () => {
        // then
        cy.get('[data-testid="product-item"]').should('have.length', products.length)
        cy.get('[data-testid="product-item"] h3').each(($el) => {
            const names = products.map(it => it.name)
            expect(names).to.contain($el.text())
        })
        cy.percySnapshot('ProductsPage')
    })
})
