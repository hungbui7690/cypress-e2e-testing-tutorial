/*
  Proper Assertions Are Key


*/

/// <reference types="cypress" />

describe('tasks management', () => {
  it('should open and close the new task modal', () => {
    cy.visit('http://localhost:5173/')

    // # Method 1
    // 1. Open the new task modal
    cy.contains('Add Task').click()
    cy.get('.backdrop').should('exist')
    cy.get('.modal').should('exist')

    // 2. Close the new task modal by click on the backdrop
    cy.get('.backdrop').click({ force: true })
    cy.get('.backdrop').should('not.exist') // when close the backdrop, .backdrop and .modal should disappear
    cy.get('.modal').should('not.exist')

    // # Method 2
    // 1. Open the new task modal
    cy.contains('Add Task').click()
    // 2. Close the new task modal by click on the cancel button
    cy.contains('Cancel').click()
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')
  })
})
