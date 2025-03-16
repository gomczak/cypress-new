Cypress.Commands.add('login', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signin',
        body: {
            username: username,
            password: password
        }
    }).then((response) => {
        const token = response.body.token
        localStorage.setItem('token', token)
        cy.wrap(token).as('jwtToken')
    })

    cy.visit('')
})

Cypress.Commands.add('register', (user) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signup',
        body: user
    })
})

Cypress.Commands.add('deleteUser', (username, token) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:4001/users/${username}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
})