/// <reference types="cypress" />


import register from '../support/pages/register'

context('Sign up', () => {
    it('Register a new user', () => {
        register.accessRegister()
        register.fillOutForm()
        
        //submit Form
        register.submitForm()

        //assertions
        register.checkIfTheUserWasCreatedSuccessfully()  

    });



});