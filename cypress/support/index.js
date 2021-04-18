// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration



// ***********************************************************
Cypress.Commands.add('backgroundLogin', () => {
    // PROCESSO DE LOGIN EM BACKGROUND
    // 1. realizar uma requisição do tipo POST com email e senha
    // 2. capturar o token que é recebido da nossa requisição
    // 3. usar o token recebido para salvar no localstorage

    cy.request({//realizando uma request do tipo POST com email e senha
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body:{
            user:{
                email: 'agilizei-rwc_mauricio@mail.com',
                password: "12345678"
            }
        }
    }).then((LoginResponse) => {
        console.log(LoginResponse.body)
        cy.log(LoginResponse.body.user.token)

        cy.visit('/', {
            onBeforeLoad: (win) => {//antes de ir para o link /editor, é necessário realizar a autenticação com o token
                win.localStorage.setItem('jwtToken', LoginResponse.body.user.token)//cria o token jwtToken no localStorage
            }

        })
    })
})

    import Routes from './routes'

    before(() => {//execute it before all tests one time
        Routes.init()

    });