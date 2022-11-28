/// <reference types="cypress" />

const contantes = require('../support/constantes')

describe('Esperas', () => {
    let loginData;

    before('Before', () => {
        cy.fixture("fixtureSuite").then(data => {
            loginData = data
        });
    });

    beforeEach("precondiciones", () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(loginData.test1.usuario.username);
        cy.get('#pass').type(loginData.test1.usuario.contraseña);
        cy.get('#submitForm').click();
        cy.get('#waitslink', {timeout: contantes.TIMEOUT}).click();
        cy.get('#wait').dblclick();
    });

    xit('Esperas con wait', () =>{
        cy.wait(14000)
        cy.get('#message').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS');
    })
   
    xit('Esperas con timeouts', () =>{
        cy.get('#message', {timeout: contantes.TIMEOUT}).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS'); 
    })

    it('Esperas con timeouts segundo mensaje', () =>{
        cy.get('#message', {timeout: contantes.TIMEOUT * 2}).should('have.text', 'You are a man of patience and have waited fifteen seconds'); 
    })
});