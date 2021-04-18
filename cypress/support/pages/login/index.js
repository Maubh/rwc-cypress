
const el = require('./elements').ELEMENTS

class Login{

    accessLogin(){
    //access login page
    cy.visit('login');
    }
    
    fillOutForm(){
    cy.get(el.inputEmail).type(Cypress.config().user.email)
    cy.get(el.inputPassword).type('12345678')
    }
    
    submitForm(){
    //submit form
    cy.get(el.buttonSubmit).click()
    }
}

export default new Login();