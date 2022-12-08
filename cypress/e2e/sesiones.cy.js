describe('Sesiones', () => { 

    before('Generar la sesion', () =>{
        cy.loginConSesion();
    })

    beforeEach('Cargar la sesion y visitar la pagina', () =>{
        cy.loginConSesion();
        cy.visit('')
    })

    it('Verificar que estamos en homePage', () =>{
        cy.log('test 1')
    })

    it('Verificar que estamos en homePage 2', () =>{
        cy.log('test 2')
    })
 })