/// <reference types="Cypress"/>

import { loginPageElements } from "../../../PageObjects/PageActions/LoginPageActions"

const Login_Elements = new loginPageElements

describe("Page Object Model", function(){

    it("Login Page", function(){
        cy.visit("https://www.saucedemo.com/v1")
        Login_Elements.username("standard_user")
        Login_Elements.password("secret_sauce")
        Login_Elements.LoginButton()
    })

})
