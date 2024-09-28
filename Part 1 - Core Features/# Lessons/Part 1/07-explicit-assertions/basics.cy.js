/*
  Implicit and Explicit Assertions
  - https://docs.cypress.io/guides/references/assertions


*/

/// <reference types="cypress" />

describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.main-header img')
  })

  it('should display the page title', () => {
    cy.visit('http://localhost:5173/')

    // implicit
    cy.get('.main-header h1').contains('My Cypress Course Tasks')

    // explicit
    cy.get('.main-header h1')
      .contains('My Cypress Course Tasks')
      .should('exist')

    cy.get('h1').should('have.length', 1) // only one h1 element in the page

    cy.get('.main-header h1').should('have.text', 'My Cypress Course Tasks')
  })
})
