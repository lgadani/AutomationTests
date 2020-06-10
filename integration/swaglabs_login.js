describe('Login Tests',() => {

    before(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    
    it ('login incorrect username',() => {    
   
        cy.get('input[id="user-name"]').type('standard_user1')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[type="submit"]').click()
        cy.contains('Username and password do not match any user in this service')
        cy.reload()
    })

    it ('login incorrect password',() => {
        cy.get('input[id="user-name"]').type('standard_user')
        cy.get('input[id="password"]').type('secret_sauceq')
        cy.get('input[type="submit"]').click()
        cy.contains('Username and password do not match any user in this service')
        cy.reload() 
    })

    it ('login incorrect password and username',() => {
        cy.get('input[id="user-name"]').type('standard_user1')
        cy.get('input[id="password"]').type('secret_sauceq')
        cy.get('input[type="submit"]').click()
        cy.contains('Username and password do not match any user in this service')
        cy.reload()
    })

    it ('login correct password and username',() => {
        cy.get('input[id="user-name"]').type('standard_user')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[type="submit"]').click()
        cy.location('pathname').should('eq', '/inventory.html')
    })
})