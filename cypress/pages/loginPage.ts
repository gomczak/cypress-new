export const loginPage = {

    attemptLogin: (username: string, password: string) => {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('button').contains('Sign in').click()
    }

}