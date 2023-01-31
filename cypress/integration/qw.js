




  describe ('logIn', ()=>{
    it ('code', ()=>{
        cy.visit('https://demo.realworld.io/')
        cy.get ('a[href="#/login"]').click()
        cy.get('form input[type="email"]').type('tim491@mail.ru')
        cy.get('form input[type="password"]').type('tim491')
        cy.get('button[type="submit"]').click();
        })
    it ('code2',()=>{
        cy.get ('nav > div > ul:nth-child(3) > li:nth-child(2)').click()
        
        let f = 'fieldset:nth-child'
        let title = 'test '  + new Date().toUTCString()
        cy.log(title)
        let body = `
## Hello **World**
*Italic*
### My list
- Item 1
  - 1.1 todo
  - 1.2 todo
  - 1.3 todo
- Item 2
        `
        
        cy.get (`${f}(1) > input`).type(title)
        //cy.get ('fieldset:nth-child(1) > input').type('Test')
        cy.get ('fieldset:nth-child(2) > input').type('comment')
        cy.get ('fieldset:nth-child(3) > textarea').type(body)
        cy.get ('fieldset:nth-child(4) > input').type ("It")
        cy.get (' fieldset > button').click()
        cy.get ('div.row.article-content > div').invoke('html')
          .should('contain', '<strong>World</strong>')
          .should('contain', '<em>Italic</em>')
        cy.get ('form > div.card-block > textarea').type('sometext').clear().type("asdveavefvdsafvsdfvsd")
        cy.get ('form > div.card-footer > button').click()
      })
    it ('Delete article', () =>{
      cy.get ('.article-actions span[class="ng-scope"] button').click()

    })

  })