/*
  get() vs find() 


*/

/// <reference types="cypress" />

describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.main-header img')
    cy.get('.main-header').get('img') // This is wrong -> <img> in this case is not inside .main-header -> if we move img outside of .main-header, this line still returns true
    cy.get('.main-header').find('img') // This is correct -> <img> inside .main-header
  })

  it('should display the page title', () => {
    cy.visit('http://localhost:5173/')

    cy.get('h1').should('have.length', 1)
    cy.get('.main-header h1').should('have.text', 'My Cypress Course Tasks')
  })
})
