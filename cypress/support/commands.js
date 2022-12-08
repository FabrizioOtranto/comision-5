// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('esperaCirculoCarga', () => {
    cy.get('[role="progressbar"]', { timeout: 30000 }).should('not.exist')
});


Cypress.Commands.add('loginConSesion', () => {
    cy.session([], () => {
        cy.request({
            url: "https://pushing-it.onrender.com/api/login",
            method: 'POST',
            body: {
                username: 'pushingit',
                password: '123456!'
            }
        }).then(respuesta => {
            window.localStorage.setItem('token', respuesta.body.token);
            window.localStorage.setItem('user', respuesta.body.user.username);
        })
    })
})