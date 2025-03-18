import { faker } from '@faker-js/faker';
import { CreateProductRequest } from "../types/product";

const generateString = (generator: () => string, minLength = 3, maxLength = 100): string => {
    const maxAttempts = 20;
    for (let i = 0; i < maxAttempts; i++) {
        const value = generator();
        if (value.length >= minLength && value.length <= maxLength) {
            return value;
        }
    }
    return 'Default';
};

export const getRandomProduct = (): CreateProductRequest => {
    const name = generateString(() => faker.commerce.productName(), 3, 100);
    const description = generateString(() => faker.commerce.productDescription(), 0, 1000);
    const price = parseFloat(faker.commerce.price({ min: 0.01, max: 10000 }));
    const stockQuantity = faker.number.int({ min: 0, max: 100 });
    const category = generateString(() => faker.commerce.department(), 3, 100);
    const imageUrl = faker.image.url({ width: 640, height: 480 });

    return {
        name,
        description,
        price,
        stockQuantity,
        category,
        imageUrl
    };
};
