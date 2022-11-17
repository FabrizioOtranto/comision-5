/// <reference types="cypress" />

describe('Fixture', () => {
    let loginData;

    before('Before', () => {

        cy.fixture("fixtureSuite").then(data => {
            loginData = data
        });
    });

    beforeEach("BeforeEach", () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    });

    it('Deberia ingresar al sistema con datos validos prueba1', () => {
        cy.log(loginData)
        cy.get('#user').type(loginData.test1.usuario.username);
        cy.get('#pass').type(loginData.test1.usuario.contraseña);
        cy.contains('Log in').click();
        cy.get('#todolistlink').click();
        cy.get("#task").type(`${loginData.test1.tareas.tarea1} {enter}`);
        cy.contains(loginData.test1.tareas.tarea1).click();
        cy.get("#task").type(loginData.test1.tareas.tarea2).type('{enter}');
        cy.contains(loginData.test1.tareas.tarea2).click();
    });

    it('Deberia ingresar al sistema con datos validos prueba2', () => {
        cy.get('#user').type(loginData.test2.usuario.username);
        cy.get('#pass').type(loginData.test2.usuario.contraseña);
        cy.contains('Log in').click();
        cy.get('#todolistlink').click();
        cy.get("#task").type(`${loginData.test2.tareas.tarea1} {enter}`);
        cy.contains(loginData.test2.tareas.tarea1).click();
        cy.get("#task").type(loginData.test2.tareas.tarea2).type('{enter}');
        cy.contains(loginData.test2.tareas.tarea2).click();
    });
});