it ('shopping cart',() => {
    
    cy.login('standard_user', 'secret_sauce')
    cy.reload()

   // check item loads */
    cy.get('button[class="btn_primary btn_inventory"]').first().click()
    cy.get('div[class="inventory_item"]').first().should('contain','REMOVE')
    cy.get('span[class="fa-layers-counter shopping_cart_badge"]').contains('1')
    //cy.location('pathname').should('contain', '/inventory-item.html')
    //cy.get('button[class="btn_primary btn_inventory"]').should('contain', 'REMOVE')
    cy.get('div[id="shopping_cart_container"]').click()
    cy.location('pathname').should('eq', '/cart.html')
    cy.wait(100)

    //remove item
    //cy.get('div[id="cart_contents_container"]')
    //cy.get('div[class="item_pricebar"]')
    cy.get('button[class="btn_secondary cart_button"]').click()
    cy.get('a[class="btn_secondary"]').click()
    cy.location('pathname').should('eq', '/inventory.html')

  
    cy.get('button[class="btn_primary btn_inventory"]').first().click()

    cy.get('button[class="btn_primary btn_inventory"]').last().click()
    cy.get('span[class="fa-layers-counter shopping_cart_badge"]').contains('2')
    cy.get('div[id="shopping_cart_container"]').click()
    cy.location('pathname').should('eq', '/cart.html')

    //cy.get('div[class="class_list"]').contains('Bolt' & 'Bike')

    //var x = document.getElementById("cart_contents_container").childElementCount;
    

    //cy.get
    //cy.get('div[id=["shopping_cart_container"]').should('eq', '2')

    //cy.get('div[id="shopping_cart_container"]')
    //cy.get('span[class="fa-layers-counter shopping_cart_badge"]').contains('2')
    //cy.location('pathname').should('eq', '/cart.html')
    //cy.get('div[class="cart_list"]').contains()

    cy.get('a[class="btn_action checkout_button"]').click()
    cy.location('pathname').should('eq', '/checkout-step-one.html')
    cy.get('input[id="first-name"]').type('Leeane')
    cy.get('input[id="last-name"]').type('Gadani')
    cy.get('input[id="postal-code"]').type('11101')
    cy.get('input[class="btn_primary cart_button"]').click()
    cy.location('pathname').should('eq', '/checkout-step-two.html')
    cy.get('a[class="btn_action cart_button"]').click()
    cy.location('pathname').should('eq', '/checkout-complete.html')
    
    it('logout', () => {
        cy.get('nav[class="bm-item-list"]').scrollIntoView()
        cy.contains('Logout').click({ force : true } )
    })

})