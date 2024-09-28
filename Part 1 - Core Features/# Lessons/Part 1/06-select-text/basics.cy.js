/*
  Selecting By Text 


*/

/// <reference types="cypress" />

describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.main-header img')
  })

  it('should display the page title', () => {
    cy.visit('http://localhost:5173/')

    // Method 1
    // cy.get('.main-header h1').contains('My Cypress Course Tasks')

    // Method 2
    cy.contains('My Cypress Course Tasks')
  })
})
