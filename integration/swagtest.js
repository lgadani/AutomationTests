
describe('Shopping cart',() => {
    
    before(() => {
        cy.login('standard_user', 'secret_sauce')
    })
    before(() => {
        resetShoppingCart()
    })
    
    it('add item to cart', () => {
        cy.get('div[class="inventory_item"]').first().should('contain','Sauce Labs Backpack')
        cy.get('button[class="btn_primary btn_inventory"]').first().click()
        cy.get('span[class="fa-layers-counter shopping_cart_badge"]').contains('1')
    })

    cy.wait(1000)

    it('remove item from cart', () => {
        cy.get('div[class="inventory_item"]').first().should('contain','REMOVE')
        cy.get('button[class="btn_secondary btn_inventory"]').click()
        cy.get('span[class="fa-layers-counter shopping_cart_badge"]').should('not.be.visible')
    })

    y.wait(1000)
    it('check shopping cart', () => {
        cy.get('div[class="inventory_item"]').first().should('contain','Sauce Labs Backpack')
        cy.get('button[class="btn_primary btn_inventory"]').first().click()
        cy.get('span[class="fa-layers-counter shopping_cart_badge"]').contains('1')

 
        cy.get('div[class="inventory_item"]').last().should('contain','Test.allTheThings')
        cy.get('button[class="btn_primary btn_inventory"]').last().click()
        cy.get('span[class="fa-layers-counter shopping_cart_badge"]').contains('2')

        cy.get('div[id="shopping_cart_container"]').click()
        cy.location('pathname').should('eq', '/cart.html')
        cy.get('div[class="cart_list"]')
            .should('contain','Sauce Labs Backpack')
            .and('contain', '29.99')
            .and('contain', 'Test.allTheThings')
            .and('contain', '15.99')        
    })

    it('continue shoppinng', () => {
        cy.get('a[class="btn_secondary"]').click()
        cy.location('pathname').should('eq', '/inventory.html')
        cy.get('div[class="inventory_item"]').first().should('contain','Sauce Labs Backpack')
        cy.get('button[class="btn_secondary btn_inventory"]').first().click()
        cy.get('span[class="fa-layers-counter shopping_cart_badge"]').contains('1')
        cy.get('div[class="inventory_item_name"]').first().should('contain','Sauce Labs Backpack').click()
        cy.location('pathname').should('eq', '/inventory-item.html')
        cy.get('button[class="btn_primary btn_inventory"]').click()
        cy.get('span[class="fa-layers-counter shopping_cart_badge"]').contains('2')
        cy.get('button[class="inventory_details_back_button"]').click()
        cy.location('pathname').should('eq', '/inventory.html')
    })

    it('checkout', () => {
        cy.get('div[id="shopping_cart_container"]').click()
        cy.location('pathname').should('eq', '/cart.html')
        cy.get('div[class="cart_list"]')
            .should('contain','Sauce Labs Backpack')
            .and('contain', '29.99')
            .and('contain', 'Test.allTheThings')
            .and('contain', '15.99')    

        cy.get('a[class="btn_action checkout_button"]').click()
        cy.location('pathname').should('eq', '/checkout-step-one.html')
        cy.get('input[id="first-name"]').type('Leeane')
        cy.get('input[id="last-name"]').type('Gadani')
        cy.get('input[id="postal-code"]').type('11101')
        cy.get('input[class="btn_primary cart_button"]').click()
        cy.location('pathname').should('eq', '/checkout-step-two.html')

        cy.get('div[class="summary_info"]').should('contain', 'Item total: $45.98')
            .and('contain', 'Tax: $3.68')
            .and('contain', 'Total: $49.66')

        cy.get('a[class="btn_action cart_button"]').click()
        cy.location('pathname').should('eq', '/checkout-complete.html')
    })

    it('logout', () => {
        cy.get('nav[class="bm-item-list"]').scrollIntoView()
        cy.contains('Logout').click({ force : true } )
    })
})

const resetShoppingCart = () => {
    cy.get('nav[class="bm-item-list"]').scrollIntoView()
    cy.contains('Reset App State').click({ force : true } )
    cy.reload()
}
