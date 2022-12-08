/// <reference types="cypress" />

import { LoginPage } from '../support/pages/loginPage'
import { NavbarPage } from '../support/pages/navbarPage'

describe('Page Object Model', () => {
    let loginData;
    const loginPage = new LoginPage();
    const navbarPage = new NavbarPage();

    before("before", () => {
        cy.fixture('fixtureSuite').then(data => {
            loginData = data;
        });
    });

    beforeEach("beforeEach", () => {
        cy.eyesOpen({
            appName: 'PushingIT',
            testName: Cypress.currentTest.title,
        })

        cy.visit('');
        cy.get("#registertoggle").dblclick();
    });

    it("Verificar que estamos en homePage con applitools", () => {
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: true
        });
        loginPage.escribirUsuario(loginData.test1.usuario.username);
        loginPage.escribirContraseña(loginData.test1.usuario.contraseña);
        loginPage.clickLoginButton();
        navbarPage.retornarUsuario(loginData.test1.usuario.username).should('exist');
        navbarPage.retornarUsuario(loginData.test1.usuario.username).should('contain', loginData.test1.usuario.username);
        cy.eyesCheckWindow({
            tag: "Home page",
            target: 'window',
            fully: true
        });

    });

    afterEach('Cerrar applitools', () => {
        cy.eyesClose()
    })
});