it ('login user',() => {
    cy.visit('https://www.saucedemo.com/')
//test incorrect user name, correct password
    cy.get('input[id="user-name"]').type('standard_user1')
    cy.get('input[id="password"]').type('secret_sauce')
    cy.get('input[type="submit"]').click()

    cy.contains('Username and password do not match any user in this service')
    cy.reload()
    

//test incorrect password, correct username
    cy.get('input[id="user-name"]').type('standard_user')
    cy.get('input[id="password"]').type('secret_sauceq')
    cy.get('input[type="submit"]').click()

    cy.contains('Username and password do not match any user in this service')
    cy.reload() 

//test incorrect password, incorrect username
    cy.get('input[id="user-name"]').type('standard_user1')
    cy.get('input[id="password"]').type('secret_sauceq')
    cy.get('input[type="submit"]').click()

    cy.contains('Username and password do not match any user in this service')
    cy.reload()


   //correct credentials
    
    cy.get('input[id="user-name"]').type('standard_user')
    cy.get('input[id="password"]').type('secret_sauce')
    cy.get('input[type="submit"]').click()

    cy.location('pathname').should('eq', '/inventory.html')

})