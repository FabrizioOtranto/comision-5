describe("Describe con Mocha", () => {
    let curso;

    it.skip("Primer test con Mocha", () => {
        cy.log("Primer test con mocha");
    });

    it("Segundo test con Mocha", () => {
        curso = 'Pushing IT';
        const profesor = "Fabrizio Otranto";
        cy.log(`Segundo test con mocha en ${curso} con ${profesor}`);
    });

    it("Tercer test con Mocha", () => {
        curso = 'Pushing IT 2';
        cy.log("Tercer test con mocha en " + curso);
    });
});
