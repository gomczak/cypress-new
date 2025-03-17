import { User } from "../types/user";

declare global {
    namespace Cypress {
        interface Chainable {
            register(user: User): void
            login(username: string, password: string): void
            deleteUser(username: string, token: string): void
        }
    }
}