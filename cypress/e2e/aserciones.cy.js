/// <reference types="cypress" />

describe('Aserciones', () => {
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
        cy.get('#waitslink').click();
    })

    it('Validar el titulo utilizando should BDD', () => {
        cy.get('#title').should('have.text', 'Waits')
    });

    it('Validar el titulo utilizando expect BDD', () => {
        cy.get('#title').invoke('text').then(texto => {
            expect(texto).is.equal("Waits");
        });
    });

    it('Validar el titulo utilizando assert TDD', () => {
        cy.get('#title').invoke('text').then(texto => {
           assert.equal(texto, 'Waits');
        });
    });

    it('Validar la cantidad de elementos cuyo ID es title', () => {
        cy.get('#title').should('have.length', 1)
    });

    it('Validar la cantidad de caracteres del titulo', () => {
        cy.get('#title').invoke('text').should('have.length', 5)
    });

    it('Validar el color del titulo de la pagina', () => {
        cy.get('#title').should('have.css', 'color', 'rgb(51, 255, 255)')
    });

    it('Validar el atributo id del titulo de la pagina', () => {
        cy.get('#title').should('have.attr', 'id', 'title')
    });

    it('Validar el atributo id del titulo de la pagina y su color', () => {
        cy.get('#title').should('have.attr', 'id', 'title').and('have.css', 'color', 'rgb(51, 255, 255)').and('have.text', 'Waits')
    });

    it('Validar el color del titulo de la pagina usando expect', () => {
        cy.get('#title').invoke('css', 'color').then(color =>{
            expect(color).is.equal('rgb(51, 255, 255)')
        })
    });

    it('Validar el id title del titulo de la pagina usando expect', () => {
        cy.get('#title').invoke('attr', 'id').then(id =>{
            expect(id).is.equal('title')
        })
    });
});