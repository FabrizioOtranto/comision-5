/// <reference types="cypress" />

describe('screenshot', () => {
    let loginData;

    before('Before', () => {
        cy.fixture("fixtureSuite").then(data => {
            loginData = data
        });
    });

    beforeEach("BeforeEach", () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(loginData.test1.usuario.username);
        cy.get('#pass').type(loginData.test1.usuario.contraseña);
        cy.contains('Log in').click();
        cy.wait(2000)
    });

    it('Deberia sacar una foto del homePage', () => {
        cy.screenshot('Foto del homePage')
    })

    it('Deberia sacar una foto de todos los modulos del homePage', () => {
        cy.get('[class="css-lbapbk"]').screenshot('modulos')
    })
})
