import { User } from "../types/users"

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): void
            register(user: User): Chainable<Response<any>>
            deleteUser(username: string, token: string): void

            // isolation
            openHomePage(user: User): void
        }
    }
}