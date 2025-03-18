export const navbar = {

    clickMenuItem: (menuItem: string) => {
        cy.get('nav a').contains(menuItem).click()
    },

    clickName: (name: string) => {
        navbar.clickMenuItem(name)
    },

    clickLogout: () => {
        cy.get('button').contains('Logout').click()
    },

    clickMobileHamburgerMenu: () => {
        cy.get('.lucide-menu').click()
    },

    clickLogoutMenu: () => {
        cy.get('[data-testid="mobile-menu"]').contains('Logout').click()
    }

}