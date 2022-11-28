/// <reference types="cypress" />

describe('Hooks', () => {
    let usuario1, contraseña
    before('Before', () => {
        usuario1 = "pushingit" 
        contraseña = "123456!"
    });

    beforeEach("BeforeEach", () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    });

    it('Deberia ingresar al sistema con datos validos prueba1', () => {
        cy.get('#user').type(usuario1);
        cy.get('#pass').type(contraseña);
        cy.contains('Log in').click();
    });

    it('Deberia ingresar al sistema con datos validos prueba2', () => {
        cy.get('#user').type(usuario1);
        cy.get('#pass').type(contraseña);
        cy.contains('Log in').click();
    });

    afterEach("AfterEach", () => {
        cy.get('#logout').click();
    })

    after('After', () => {
        cy.log('Enviar reporte por mail a los destinatarios');
    });
});