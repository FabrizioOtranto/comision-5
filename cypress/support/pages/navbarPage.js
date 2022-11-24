export class NavbarPage {

    retornarUsuario(usuario){
        return cy.xpath(`//h2[starts-with(@id,'user_${usuario}')]`);
    };
};