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
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        loginPage.escribirUsuario(loginData.test1.usuario.username);
        loginPage.escribirContraseña(loginData.test1.usuario.contraseña);
        loginPage.clickLoginButton();
        navbarPage.retornarUsuario(loginData.test1.usuario.username).should('exist');
        navbarPage.retornarUsuario(loginData.test1.usuario.username).should('contain', loginData.test1.usuario.username);
    });

    it("prueba", () => {
        cy.log(navbarPage.retornarUsuario(loginData.test1.usuario.username));
    });
});