export class TodoListPage {
    constructor() {
        this.Inputaskt = '#task';
        this.sendtaskButton = '#sendTask';
        this.completedButton = '#completed'
    };

    escribirTarea(tarea) {
        cy.get(this.taskInput).type(tarea);
    };

    clickSendTaskButton() {
        cy.get(this.sendtaskButton).click();
    };

    completarTarea(tarea) {
        cy.contains(tarea).click();
    };

    clickCompletedButton() {
        cy.get(this.completedButton).click();
    };

    retornartarea(tarea) {
       return cy.contains(tarea);
    };
};