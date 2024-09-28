/*
  Checking For Partial Text 
  - Note: we can clearly see that when we run tests, it will run from top to bottom
    -> The 2nd test, we have added a new task 
    -> But the 3rd task, we don't see that new task from 2nd test
  - It it because each test case is isolated from each other. They are independent from each other


*/

/// <reference types="cypress" />

describe('tasks management', () => {
  it('should open and close the new task modal', () => {
    cy.visit('http://localhost:5173/')

    // Method 1
    cy.contains('Add Task').click()
    cy.get('.backdrop').click({ force: true })
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')

    // Method 2
    cy.contains('Add Task').click()
    cy.contains('Cancel').click()
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')
  })

  it('should create a new task', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Add Task').click()
    cy.get('#title').type('New Task')
    cy.get('#summary').type('Some description')
    cy.get('.modal').contains('Add Task').click()
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')
    cy.get('.task').should('have.length', 1)
    cy.get('.task h2').contains('New Task')
    cy.get('.task p').contains('Some description')
  })

  // # if there's no value in the input field, it should show an error
  it('should validate user input', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Add Task').click()
    cy.get('.modal').contains('Add Task').click()
    cy.contains('Please provide values') // Please provide values for task title, summary and category! -> no need to be this long
  })
})
