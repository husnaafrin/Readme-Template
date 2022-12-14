// cypress - Spec

describe('first testcase' , function(){
    it('first testcase' , function () {
      
        cy.visit("https://app.devagilibo.com/login")
        cy.get('#email').type('husnaafrin@gmail.com')
        cy.get('#password').type('1234')

    })
}


)