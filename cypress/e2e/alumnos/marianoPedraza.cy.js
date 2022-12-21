describe('Desafio4', () => {

    it("Deberia registarse, ingresar y luego eliminar el usuario", () => {
        const username = 'mariano' + Math.floor(Math.random() * 1000)
        const password = '123456!'
        const gender = 'Male'
        const day = '30'
        const month = 'July'
        const year = '1984'

        cy.request({
            method: 'POST',
            url: 'https://pushing-it.onrender.com/api/register',
            body: {
                username: username,
                password: password,
                gender: gender,
                day:day,
                month: month,
                year: year
            }
        }).then(respuesta =>{
            cy.log(respuesta.body)
            expect(respuesta.status).is.equal(200)
            expect(respuesta.body.newUser.username).is.equal(username)
        })
        cy.request({
            method: 'POST',
            url: 'https://pushing-it.onrender.com/api/login',
            body: {
                username: username,
                password: password,
            }
        }).then(respuesta =>{
            cy.log(respuesta)
            expect(respuesta.status).is.equal(200)
        })
        
        cy.request({
            method: 'DELETE',
            url: `https://pushing-it.onrender.com/api/deleteuser/${username}`,
        
        }).then(respuesta =>{
            cy.log(respuesta)
            expect(respuesta.status).is.equal(200)

        })
            
    });
});



    