describe("Selectores", () => {

    it.skip("Deberia encontrar los elementos utilizando cssSelectors", () => {
        cy.visit('')
        cy.get('button') // por tagname
        cy.get('[name="user"]') // por atributo
        cy.get('#user') //por id
        cy.get('input#user') //agregamos el tagname
        cy.get("input[cy-get='user']") //agregamos tagname y atributo
        cy.get('.password') // por clase
        cy.get('input.password') //agregamos el tagname
        cy.get("input[class='chakra-input password css-1ekf6i8']") // agregamos tagname y atributo
        cy.get('fieldset > div > div > label > input') //encontramos input descendiendo desde fieldset
        cy.get('[class*="password"]')  //encontramos valor de forma parcial en cualquier lugar
        cy.get('[name^="pa"]')//encontramos valor de forma parcial que esta al comienzo
        cy.get('[name$="ss"]')//encontramos valor de forma parcial que esta al final

    })

    it('Deberia encontrar el input value male utilizando find', () =>{
        cy.visit('')
        cy.get('fieldset').find('input[value="Male"]')
    })

    it('Deberia encontrar el legend utilizando children', () =>{
        cy.visit('')
        cy.get('fieldset').children('legend')
    })

    it('Deberia encontrar el fieldset utilizando parent', () =>{
        cy.visit('')
        cy.get('legend').parent('fieldset')
    })

    it('Deberia encontrar el div  utilizando siblings', () =>{
        cy.visit('')
        cy.get('legend').siblings('div')
    })

    it('Deberia encontrar el button register utilizando contains', () =>{
        cy.visit('')
        cy.contains("register", {matchCase:false}) //sin respetar mayusuclas
        cy.contains("Register") // respetando mayusuclas
    })
})