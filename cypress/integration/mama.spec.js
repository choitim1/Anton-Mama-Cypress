

/// <reference types="cypress" />

import meUser from "../fixtures/me-user.json"
describe ('Sign Up',() =>{

 
    //beforeEach(() => {cy.visit('/')});
    // beforeEach(() => {
    //     cy.clearCookies()
    //     cy.clearLocalStorage()
    // })

let num = Math.floor(Math.random()*1000+1)
    it ('Registration', () => {
        cy.visit('/');
        cy.get ('a[href="#/register"]').click();
        cy.url ().should('include', '/#/register');
        cy.get ('.auth-page').as('register page');
        cy.get ('@register page').find('h1').should('have.text','Sign up');
        cy.get ('@register page').find('form').should('be.visible');
        
        const name = `Tim${num}`
        cy.log(name)
        
        cy.get ('@register page').find('input[ng-model$=username]').type(name)
        cy.get ('@register page').find('input[ng-model$=email]').type(`tim${num}@mail.ru`)
       
        let password = `tim${num}`
        cy.log (password)
        
        cy.get ('@register page').find('input[ng-model$=password]').type(password)
        cy.get ('@register page').find ('button[type=submit]').click()
        cy.get('a[ href*="#/@"]').should('be.visible')
        cy.get('.navbar').should('contain.text',name)



    })
    it ('Sign in', () => {
        cy.visit ('/')
        cy.login('tim902@mail.ru', 'tim902')
        //cy.get ('a[href="#/login"]').click()
        cy.url().should('include','/#/login')
        cy.get('.auth-page h1').should('have.text','Sign in');
        //cy.get ('@register page').find ('h1').should('have.text','Sign in');
        cy.get('.auth-page form').should('be.visible');
        //cy.get('form input[type="email"]').type('tim902@mail.ru')
        //cy.get('form input[type="password"]').type('tim902')
        //cy.get('button[type="submit"]').click()
        cy.get ('div.container li a[href="#/@Tim902"]').should('contain.text','Tim902')
    })
    it ('Log Out',() =>{
        cy.get ('div.container li a[href="#/@Tim902').click()
        cy.get('a.btn').click()
        cy.get ('a[href="#/login"]').should('contain.text','Sign in')
    })
    it('Read a article', () => {
        cy.get (' div.container.page > div > div.col-md-9 > div > ul > li:nth-child(2) > a').click();
        cy.get ('nav >ul li:nth-child(15) a').click()
        cy.get ('article-preview:nth-child(1) > div > a > h1').scrollIntoView()
        cy.get ('article-preview:nth-child(1) > div > a > h1').should('contain.text','dicta et')
       
        

        //cy.get('[show-authed="true"] > :nth-child(2) > .nav-link').click()
    })
    

    

})