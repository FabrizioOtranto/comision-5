/// <reference types="cypress" />

describe('Torre Critian Apis', () => {

    
    
    it('Registro ingreso y elimino usuario', () => {
        const username ='usuariioejjjjj'
        const password= '123456!'
        const gender='Male'
        const day='5'
        const month='October'
        const year= '1988'

        cy.request({
            method: "POST",
            url: "https://pushing-it.onrender.com/api/register",
            body:{
                username: username,
                password: password,
                gender:gender,
                day: day,
                month: month,
                year: year
            }
        }).then( respuesta => {
            expect(respuesta.status).is.equal(200)
            expect(respuesta.body.newUser.username).is.equal(username)
        
        });
            
            cy.request({
                method: "POST",
                url:  "https://pushing-it.onrender.com/api/login",
                body:{
                    username: username,
                    password: password,
    
                }
     
            }).then( respuesta => {
                window.localStorage.setItem('token',respuesta.body.token)
                window.localStorage.setItem('user',respuesta.body.user.username)

            })
            cy.request({
                method:"DELETE",
                url: `https://pushing-it.onrender.com/api/deleteuser/${username}`,
            }).then((respuesta)=>{
                    cy.log(respuesta)
               
                
            
            })
          //  
        
    })
})

