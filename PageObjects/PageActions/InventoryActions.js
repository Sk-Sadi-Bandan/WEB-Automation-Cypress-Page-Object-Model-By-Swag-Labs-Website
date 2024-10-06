const InventoryElementLocators = require('../PageElements/Inventory.json')

export class Inventory{

    Backpack(){
        cy.get(InventoryElementLocators.InventoryLocators.Backpack).click()
        cy.wait(1000)
        return
    }

    AddToCart(){
        cy.get(InventoryElementLocators.InventoryLocators.AddToCart).click()
        cy.wait(1000)
        return
    }

    ShoppingCart(){
        cy.get(InventoryElementLocators.InventoryLocators.ShoppingCart).click()
        cy.wait(1000)
        return
    }

    ContinueShopping(){
        cy.get(InventoryElementLocators.InventoryLocators.ContinueShopping).click()
        cy.wait(1000)
        return
    }

    TShirt(){
        cy.get(InventoryElementLocators.InventoryLocators.TShirt).click()
        cy.wait(1000)
        return
    }

    Checkout(){
        cy.get(InventoryElementLocators.InventoryLocators.Checkout).click()
        cy.wait(1000)
        return
    }

}
