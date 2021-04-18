/// <reference types="cypress" />

const faker = require('faker')

import login from '../support/pages/login'

context('Login', () => {
    it('Login successfully', () => {
        login.accessLogin()
        login.fillOutForm()
        login.submitForm()

    cy.intercept('POST', '**/login/', {
        statusCode: 200,
        body: {}
    }).as('login');



    //assertions

    });
});