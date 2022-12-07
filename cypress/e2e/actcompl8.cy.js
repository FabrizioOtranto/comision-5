/// <reference types="cypress" />

describe('Actividad complementaria 8', () => {

    // Tipo de peticion post
    // URL https://pushing-it.onrender.com/api/register
    // body {username, password, gender, year, month, day}
    // Agregar aserciones para verificar status y body
    it('Deberia registrarse en PushingIT de forma satisfactoria', () => {
        const username = 'pushingit' + Math.floor(Math.random() * 1000)
        const password = '123456!'
        const gender = "Male"
        const day = '10'
        const month = 'October'
        const year = "1980"

        cy.request({
            method: 'POST',
            url: 'https://pushing-it.onrender.com/api/register',
            body: {
                username: username,
                password: password,
                gender: gender,
                day: day,
                month: month,
                year: year
            }
        }).then(respuesta =>{
            cy.log(respuesta.body)
            expect(respuesta.status).is.equal(200)
            expect(respuesta.body.newUser.username).is.equal(username)
        })
    });
});