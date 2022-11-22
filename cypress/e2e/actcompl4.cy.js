/// <reference types="cypress" />

const constantes =  require('../support/constantes')

describe('Actividad complementaria 4', () => {
    let act4Fixture;

    before('inicializar el fixture', () =>{
        cy.fixture('act4fixtre').then(datos =>{
            act4Fixture = datos
        })
    })

    beforeEach("precondiciones", () =>{
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(act4Fixture.usuario);
        cy.get('#pass').type(act4Fixture.contraseña);
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text', constantes.mensajesError.CREDENTIALS_WERE_NOT_FOUND)
    });
});