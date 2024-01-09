describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#outlined-basic').should('have.value', '')
    cy.get('#outlined-basic').type('Somkiat')
    cy.get('#result').should('have.text', 'Hello Somkiat')
  })
})