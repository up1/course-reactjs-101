describe('template spec', () => {
  it('passes', () => {

    cy.intercept(
      {
        method: 'GET', // Route all GET requests
        url: 'https://jsonplaceholder.typicode.com/users', // that have a URL that matches '/users/*'
      },
      [{
        id: 1,
        name: 'Somkiat',
        email: 'xxx'
      }] // and force the response to be: []
    ).as('getUsers') // and assign an alias

    cy.visit('http://localhost:3000/')
    cy.get('#outlined-basic').should('have.value', '')
    cy.get('#outlined-basic').type('Somkiat')
    cy.get('#result').should('have.text', 'Hello Somkiat')
  })
})