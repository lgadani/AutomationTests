it ('sort',() => {

    cy.login('standard_user', 'secret_sauce')
    //sort items za
    cy.get('select').select('za')
    cy.wait(2000)
    //cy.get('div[id="inventory_container"]').first().should('contain','Test.all')
    cy.get('div[class="inventory_item"]').first().should('contain','Test.all')

    //sort items az
    cy.get('select').select('az')
    cy.get('div[class="inventory_item"]').first().should('contain','Backpack')

    //sort items lohi
    cy.get('select').select('lohi')
    cy.get('div[class="inventory_item"]').first().should('contain','7.99')   
    //sort items hilo
    cy.get('select').select('hilo')
    cy.get('div[class="inventory_item"]').first().should('contain','49.99')

    //check item loads
    cy.get('div[class="inventory_item_img"]').first().click()
    cy.location('pathname').should('contain', '/inventory-item.html')

})