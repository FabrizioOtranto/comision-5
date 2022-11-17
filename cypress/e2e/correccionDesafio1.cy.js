/// <reference types="cypress" />

describe("Desafio 1", () => {
    const numero = Math.floor(Math.random() * 1000)
    const tarea1 = 'Tarea 1'

    it('Deberia ingresar al sistema, agregar una tarea y luego completarla', () => {
        cy.visit("");
        cy.get('#user').type("Kery" + numero);
        cy.get('#user').clear();
        cy.get('#user').type("Kery" + numero);
        cy.get('#pass').type("123456!");
        cy.get("[value='Female']").check({ force: true });
        cy.get('#day').select("21");
        cy.xpath('//select[@name="month"]').select("August");
        cy.get('#year').select("1990");
        cy.get('button#submitForm').click();
        cy.wait(3000);
        cy.get('#todolistlink').click();
        cy.get('#task').type(tarea1);
        cy.get('#sendTask').click();
        cy.get('p').contains(tarea1).click();
    });
});