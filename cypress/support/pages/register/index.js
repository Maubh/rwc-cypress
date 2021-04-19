/// <reference types="cypress" />

const faker = require('faker')

const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Register {
    
    accessRegister(){
        cy.visit('register');
    }
        
    fillOutForm(){
    cy.get(el.inputUsername).type(faker.name.firstName() + faker.name.lastName()) 
    cy.get(el.inputEmail).type(faker.internet.email())
    cy.get(el.inputPassword).type('12345678')
    }
    
    submitForm(){
    //submit form
    cy.get(el.buttonSubmit).click()
    }

    checkIfTheUserWasCreatedSuccessfully(){
            
    cy.wait(`@${Routes.as.postUsers}`).then((resUsers) => {
        expect(resUsers.response.statusCode).to.eq(200)
    })
    
    cy.wait(`@${Routes.as.getArticlesTags}`).then((resArticlesTags) => {
        expect(resArticlesTags.response.statusCode).to.eq(200)
    })
    
    cy.wait(`@${Routes.as.getArticlesFeed}`).then((resArticlesFeed) => {
        expect(resArticlesFeed.response.statusCode).to.eq(200)
    })

    }

    

}

export default new Register();