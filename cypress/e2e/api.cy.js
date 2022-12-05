describe('API testing', () => {

    xit("hacer una consulta HTTP tipo GET", () => {
        cy.request('http://localhost:3000/posts/').then((respuesta) => {
            cy.log(respuesta)
            expect(respuesta.status).is.equal(200)
        })
    })

    xit("hacer una consulta HTTP tipo GET con destructuring", () => {
        cy.request('http://localhost:3000/posts/').then(({ body, status }) => {
            cy.log(body);
            cy.log(status);
            expect(status).is.equal(200);
        });
    });

    xit("hacer una consulta HTTP tipo GET agregando parametros", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/",
            qs: {
                id: 5
            }
        }).then((respuesta) => {
            cy.log(respuesta)
            expect(respuesta.body[0].id).is.equal(5);
            expect(respuesta.body[0].title).is.equal("titulo 5");
        })
    })

    xit("hacer una consulta HTTP tipo GET agregando parametros", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/",
            qs: {
                id: 5
            }
        }).then((respuesta) => {
            cy.log(respuesta)
            expect(respuesta.body[0].id).is.equal(5);
            expect(respuesta.body[0].title).is.equal("titulo 5");
        })
    })

    xit("hacer una consulta HTTP tipo GET ordenando", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/",
            qs: {
                _sort: 'id',
                _order: 'desc'
            }
        }).then((respuesta) => {
            cy.log(respuesta)
        })
    })

    xit("hacer una consulta HTTP tipo GET slices", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/",
            qs: {
                _start: '5',
                _end: '10'
            }
        }).then((respuesta) => {
            cy.log(respuesta)
        })
    })

    xit("hacer una consulta HTTP tipo GET rangos", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/",
            qs: {
                id_gte: '5',
                id_lte: '10'
            }
        }).then((respuesta) => {
            cy.log(respuesta)
        })
    })

    xit("hacer una consulta HTTP tipo GET exlucyendo", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/",
            qs: {
                id_ne: ['5', '8'],
                title_ne: ['titulo 7']
            }
        }).then((respuesta) => {
            cy.log(respuesta)
        })
    })

    xit("hacer una consulta HTTP tipo POST", () => {
        const id = 18
        cy.request({
            method: "DELETE",
            url: `http://localhost:3000/posts/${id}`,
        }).then((respuesta) => {
            cy.log(respuesta)
        });

        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts/",
            body: {
                "id": id,
                "title": "titulo 18",
                "author": "Fabrizio Otranto"
            }
        }).then((respuesta) => {
            cy.log(respuesta)
        })
    })

    xit("hacer una consulta HTTP tipo PUT", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/10",
            body: {
                "id": 10,
                "title": "titulo 10",
                "author": "Fabrizio Otranto"
            }
        }).then((respuesta) => {
            cy.log(respuesta)
        })
    })

    xit('Deberia agragar, editar, eliminar y verificar que fue eliminado el documento', () => {
        const id = 159
        const author = 'Pushing IT'
        const title = "title"
        cy.request({
            url: 'http://localhost:3000/posts/',
            method: "POST",
            body: {
                id: id,
                author: author,
                title: title
            }
        }).then(respuesta => {

            expect(respuesta.status).is.equal(201)
            expect(respuesta.body.id).is.equal(id)
            expect(respuesta.body.title).is.equal(title)
            expect(respuesta.body.author).is.equal(author)

            cy.request({
                method: "PUT",
                url: `http://localhost:3000/posts/${respuesta.body.id}`,
                body: {
                    body: {
                        id: respuesta.body.id,
                        author: `${respuesta.body.author} editado`,
                        title: `${respuesta.body.title} editado`
                    }
                }
            }).then(respuesta2 => {
                cy.log(respuesta2)
                expect(respuesta2.status).is.equal(200)
                expect(respuesta2.body.id).is.equal(id)
                expect(respuesta2.body.title).is.equal(`${title} editado`)
                expect(respuesta2.body.author).is.equal(`${author} editado`)

                cy.request({
                    url: `http://localhost:3000/posts/${respuesta2.body.id}`,
                    method: "DELETE"
                }).then(respuesta3 => {
                    expect(respuesta3.status).is.equal(200)

                    cy.request({
                        method: 'GET',
                        url: `http://localhost:3000/posts/${id}`,
                        failOnStatusCode: false
                    })
                }).then(respuesta => {
                    expect(respuesta.status).is.equal(404)
                })
            })
        })
    });

    it('Deberia iniciar sesion en pushingIT utilizando request', () => {
        cy.request({
            url: "https://pushing-it.onrender.com/api/login",
            method: 'POST',
            body: {
                username: 'pushingit',
                password: '123456!'
            }
        }).then(respuesta => {
            window.localStorage.setItem('token', respuesta.body.token);
            window.localStorage.setItem('user', respuesta.body.user.username);
        })

        cy.visit('')
    })
})