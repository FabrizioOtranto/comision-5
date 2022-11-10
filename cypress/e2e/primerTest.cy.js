describe("Primer test", () =>{

    it("Deberia registrarse satisfactoriamente en la aplicacion", () =>{
        const numero = Math.floor(Math.random() * 1000)
        cy.visit("");
        cy.get('#user').type("pushingit" + numero);
        cy.get('#user').clear();
        cy.get('#user').type("pushingit" + numero);
        cy.get('#pass').type("123456!");
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select("4");
        cy.get('#month').select("March");
        cy.get('#year').select(55);
        cy.get('#submitForm').click();
    });
});