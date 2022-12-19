describe('Desafio 4', () => { 
    
    it('Logearse y despues eliminar el usuario', () => {
        const username = 'Pushingit' + Math.floor(Math.random() * 1000)
        const password = '123456!'
        const gender = 'female'
        const day = '27'
        const month = '1'
        const year = '1996'

        cy.request({
            method: 'POST',
            url: "https://pushing-it.onrender.com/api/register",
            body: {
                username : username,
                password: password,
                gender: gender,
                day: day ,
                month: month ,
                year: year ,
  
            }

        }).then((respuesta) => {
            cy.log(respuesta.body.username)
            expect(respuesta.status).is.equal(200)
            expect(respuesta.body.newUser.username).is.equal(respuesta.body.newUser.username)
        });
        
            cy.request({
                method: 'POST',
                url: 'https://pushing-it.onrender.com/api/login',
                body: {
                    username: username,
                    password: password
                }
            }).then((respuesta) =>{
                cy.log(respuesta.body)
                expect(respuesta.status).is.equal(200)
                expect(respuesta.body.user.createdAt.username).is.equal(respuesta.body.user.createdAt.username)
            });

                cy.request({
                    method: 'DELETE',
                    url: `https://pushing-it.onrender.com/api/deleteuser/${username}`,
                }).then((respuesta) => {
                    cy.log(respuesta)
                    expect(respuesta.status).is.equal(200)
                })
    });
  });