/// <reference types="cypress" />
const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles{

    accessFormNewPost(){
        cy.get(el.linkNewPost).click();
    }

    fillOutForm(){
    // fill the form
    cy.get(el.inputTitle).type('Agilizei Title')
    cy.get(el.inputDescription).type('Cypress')
    cy.get(el.textAreaContent).type(faker.lorem.paragraph())
    cy.get(el.inputTags).type('cypress')
    }
    
    submitForm(){
    //submit the form
    cy.get(el.buttonSubmit).click()
    }

    checkIfThePostWasCreatedSuccessfully(){
            
        cy.wait(`@${Routes.as.postArticles}`).then((resArticles) => {
            expect(resArticles.response.statusCode).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((resArticlesTitle) => {
            expect(resArticlesTitle.response.statusCode).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((resArticlesTitleComments) => {
            expect(resArticlesTitleComments.response.statusCode).to.eq(200)
        })
    
    
    }



}

export default new Articles();