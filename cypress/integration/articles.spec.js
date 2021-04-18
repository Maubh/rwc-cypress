/// <reference types="cypress" />

import articles from '../support/pages/articles/'
import Routes from '../support/routes'

context('Post', () => {

beforeEach(()=>{
    //Arrange
    cy.backgroundLogin()
    articles.accessFormNewPost()
    });
    it('Create a new post', () => {
        articles.fillOutForm()
        articles.submitForm()

        //assertions
        articles.checkIfThePostWasCreatedSuccessfully()        

    });

});