/// <reference types="cypress" />
const constantes = require ('../support/Erika_Pinto');

describe('Desafio_4', () => {

    it('Registro, Ingreso, Eliminación de usuario por API', () => {
        cy.request({
            url: constantes.API.URL_POST_REGISTER,
            method: "POST",
            body: {
                username: constantes.REGISTRO.USER,
                password: constantes.REGISTRO.PASS,
                gender: constantes.REGISTRO.GENDER,
                day: constantes.REGISTRO.DAY,
                month: constantes.REGISTRO.MONTH,
                year: constantes.REGISTRO.YEAR
            }
        }).then(respuesta => {

            cy.log(respuesta)
            expect(respuesta.status).is.equal(200)
            expect(respuesta.body.newUser.username).is.equal(constantes.REGISTRO.USER)

            cy.request({
                url: constantes.API.URL_POST_LOGIN,
                method: "POST",
                body: {
                    username: constantes.REGISTRO.USER,
                    password: constantes.REGISTRO.PASS,
                }
            }).then(respuesta => {
                
                cy.log(respuesta)    
                expect(respuesta.status).is.equal(200)
                expect(respuesta.body.user.username).is.equal(constantes.REGISTRO.USER)

                cy.request({
                    url: `${constantes.API.URL_DELETE_USER}${constantes.REGISTRO.USER}`,
                    method: "DELETE"
                }).then(respuesta => {
                    
                    cy.log(respuesta)
                    expect(respuesta.status).is.equal(200)
                    expect(respuesta.body.user.username).is.equal(constantes.REGISTRO.USER)
                })
            })
        })
    });

});