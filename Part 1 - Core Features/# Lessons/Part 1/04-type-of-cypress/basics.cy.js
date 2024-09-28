// sometimes, we vs code does not show the methods of cypress -> add this line
/// <reference types="cypress" />

describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/')
    cy.get('img') // get the element -> similar to querySelector
  })
})
