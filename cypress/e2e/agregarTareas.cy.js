/// <reference types="cypress" />

import { LoginPage } from '../support/pages/loginPage'
import { NavbarPage } from '../support/pages/navbarPage'
import { HomePage } from '../support/pages/homePage'
import { TodoListPage } from '../support/pages/todoListPage'

describe('Page Object Model', () => {
    let loginData;
    const loginPage = new LoginPage();
    const navbarPage = new NavbarPage();
    const homePage = new HomePage();
    const todoListPage = new TodoListPage();

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
        homePage.clickTodoListLink();
    });

    it("Permite agregar 2 tareas y completar la ultima tarea ingresada", () => {
        todoListPage.escribirTarea(loginData.test1.tareas.tarea1);
        todoListPage.clickSendTaskButton();
        todoListPage.escribirTarea(loginData.test1.tareas.tarea2);
        todoListPage.clickSendTaskButton();
        todoListPage.completarTarea(loginData.test1.tareas.tarea2);
        todoListPage.clickCompletedButton();
        todoListPage.retornartarea(loginData.test1.tareas.tarea2).should('exist')
        .and('css','text-decoration', 'line-through solid rgb(26, 32, 44)')

    });
});