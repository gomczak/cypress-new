import { faker } from '@faker-js/faker';
import { Roles } from "../types/roles";
import { User } from "../types/user";

const generateString = (generator: () => string): string => {
    const minLength = 4;
    const maxAttempts = 20;
    for (let i = 0; i < maxAttempts; i++) {
        const value = generator();
        if (value.length >= minLength) {
            return value;
        }
    }
    return 'default';
};

export const getRandomUser = (roles = [Roles.ROLE_ADMIN, Roles.ROLE_CLIENT]): User => {
    const username = generateString(() => faker.internet.username());
    const password = faker.internet.password({ length: 8 });
    const firstName = generateString(() => faker.person.firstName());
    const lastName = generateString(() => faker.person.lastName());
    const email = faker.internet.email();

    return {
        username,
        password,
        firstName,
        lastName,
        email,
        roles
    };
};
