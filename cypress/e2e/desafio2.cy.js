/// <reference types="cypress" />

describe('loginData', () => {
    let datos;

    before('Before', () => {

        cy.fixture("desafio2").then(data => {
            datos = data
        });
    });

    beforeEach("precondiciones", () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(datos.test1.usuario.username);
        cy.get('#pass').type(datos.test1.usuario.contraseña);
        cy.contains('Log in').click();
        cy.get('#todolistlink').click();
    });

    it('Deberia ingresar 5 tareas', () => {
        cy.get("#task").type(`${datos.test1.tareas.tarea1} {enter}`);
        cy.get("#task").type(datos.test1.tareas.tarea2).type('{enter}');
        cy.get("#task").type(datos.test1.tareas.tarea3).type('{enter}');
        cy.get("#task").type(datos.test1.tareas.tarea4).type('{enter}');
        cy.get("#task").type(datos.test1.tareas.tarea5).type('{enter}');
    });

    it('Deberia validar botones', () => {
        cy.get('#all').should('exist');
        cy.get('#completed').should('exist');
        cy.get('#active').should('exist');
        cy.get('#removeAll').should('exist');
    });

    it('Deberia Agregar 2 tareas, completarlas y eliminar la segunda tarea completada', () => {
        cy.get("#task").type(datos.test1.tareas.tarea1).type('{enter}');
        cy.get("#task").type(datos.test1.tareas.tarea2).type('{enter}');
        cy.get('#completed').click()
        cy.get('#all').click()
        cy.xpath(`//p[text()='${datos.test1.tareas.tarea2}']`).click().siblings('button').contains("Delete").click();
    });

    it('Deberia agregar 2 tareas y eliminar la primera tarea', () => {
        cy.get("#task").type(datos.test1.tareas.tarea1).type('{enter}');
        cy.get("#task").type(datos.test1.tareas.tarea2).type('{enter}');
        cy.get('#completed').click()
        cy.get('#all').click()
        cy.xpath(`//p[text()='${datos.test1.tareas.tarea1}']`).click().siblings('button').contains("Delete").click();
    });
});

