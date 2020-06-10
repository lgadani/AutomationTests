describe('Inventory Sort',() => {
    
    before(() => {
        cy.login('standard_user', 'secret_sauce')
    })

    before(() => {
        resetShoppingCart()
    })

    it ('sort',() => {

        //sort items az
        cy.get('select').select('az')
        cy.wait(1000)
        cy.get('div[class="inventory_item"]').first().should('contain','Backpack')

        //sort items lohi
        cy.get('select').select('lohi')
        cy.wait(1000)
        cy.get('div[class="inventory_item"]').first().should('contain','7.99')   

        //sort items hilo
        cy.get('select').select('hilo')
        cy.wait(1000)
        cy.get('div[class="inventory_item"]').first().should('contain','49.99')

        //check item loads
        cy.get('div[class="inventory_item_img"]').first().click()
        cy.wait(1000)
        cy.location('pathname').should('contain', '/inventory-item.html')

    })
})

const resetShoppingCart = () => {
    cy.get('nav[class="bm-item-list"]').scrollIntoView()
    cy.contains('Reset App State').click({ force : true } )
    cy.reload()
}
