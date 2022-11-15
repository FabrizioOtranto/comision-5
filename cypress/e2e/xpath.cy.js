/// <reference types="cypress" />
describe('xpath', () => {

    it('xpath absoluto' ,  () =>{
        cy.visit('')
        cy.xpath('html/body/div/div/div/div/form/div[1]/input');
    })

    it('xpath relativo', () =>{
        cy.visit('')
        cy.xpath('//input[@id="user"]')
    })

    it('Combinar xpath relativo con absoluto', () =>{
        cy.visit('')
        cy.xpath("//div[@role='group']/input[@id='user']")
    })

    
    it('Contains', () =>{
        cy.visit('')
        cy.xpath("//input[contains(@class, 'password')]")
    })

    it('Starts-with', () =>{
        cy.visit('')
        cy.xpath("//button[starts-with(@type,'sub')]")
    })

    it('text', () =>{
        cy.visit('')
        cy.xpath("//button[text()='Register']")
    })

    it('text + starts-with', () =>{
        cy.visit('')
        cy.xpath("//button[starts-with(text(),'Reg')]")
    })

    it('Operador logico and', () =>{
        cy.visit('')
        cy.xpath("//input[@id='user' and @name='user']")
    })

    it('Operador logico or', () =>{
        cy.visit('')
        cy.xpath("//input[@id='user' or @name='passs']")
    })

    it('Operador logico not', () =>{
        cy.visit('')
        cy.xpath("//input[@id='user' and not(@name='pass')]")
    })

    it('Deberia encontrar el legend utilizando child', () =>{
        cy.visit('')
        cy.xpath('//fieldset//child::legend')
    })

    it('Deberia encontrar el fieldset utilizando parent', () =>{
        cy.visit('')
        cy.xpath("//legend//parent::fieldset")
    })

    it('Deberia encontrar el input user  utilizando following-sibling', () =>{
        cy.visit('')
        cy.xpath("//label[@for='user']//following-sibling::input")
    })

    it('Deberia encontrar el input user  utilizando preceding-sibling', () =>{
        cy.visit('')
        cy.xpath("//input[@id='user']//preceding-sibling::label")
    })
})