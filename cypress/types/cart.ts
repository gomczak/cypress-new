interface CartItem {
    productId: number,
    quantity: number
}

export interface CartResponse {
    username: string,
    totalPrice: number,
    totalItems: number,
    items: CartItem[]
}