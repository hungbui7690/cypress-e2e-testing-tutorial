/*
  Simulating User Interaction 
  - .click()

  - Flows: user visit the page -> click add task button -> modal & backdrop will appear -> enter title and summary -> submit form -> new task should be added

  ## 2 ways to close the modal after clicking Add Task button: 
  - click on the backdrop
  - click on the Cancel button


*/

/// <reference types="Cypress" />

describe('tasks management', () => {
  it('should open and close the new task modal', () => {
    cy.visit('http://localhost:5173/')

    // 1. open the modal
    cy.contains('Add Task').click() // find and click on the button -> it will open the modal

    // 2. close the modal by click on the backdrop
    // cy.get('.backdrop').click() // here, when we click on the backdrop -> it actually not click on the backdrop but on the text fields in the modal
    cy.get('.backdrop').click({ force: true }) // force: true will help us click on the backdrop below the text fields in the modal
  })
})
