/// <reference types="Cypress"/>

import { Inventory } from "../../../PageObjects/PageActions/InventoryActions"

const Inventory_Elements = new Inventory

describe("Page Object Model", function(){

    it("Inventory Page", function(){
        cy.visit("https://www.saucedemo.com/v1/inventory.html")
        Inventory_Elements.Backpack()
        Inventory_Elements.AddToCart()
        Inventory_Elements.ShoppingCart()
        Inventory_Elements.ContinueShopping()
        Inventory_Elements.TShirt()
        Inventory_Elements.AddToCart()
        Inventory_Elements.ShoppingCart()
        Inventory_Elements.Checkout()
    })

})

