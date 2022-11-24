export class LoginPage {
    constructor() {
        this.usuario = '#user';
        this.contraseña = '#pass';
        this.loginButton = '#submitForm'
    };

    escribirUsuario(usuario) {
        cy.get(this.usuario).type(usuario);
    };

    escribirContraseña(contraseña) {
        cy.get(this.contraseña).type(contraseña);
    };

    clickLoginButton() {
        cy.get(this.loginButton).click();
    };
};

