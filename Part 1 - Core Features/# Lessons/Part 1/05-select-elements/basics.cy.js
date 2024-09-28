/*
  Selecting Elements & Evaluating Test Results  


*/

/// <reference types="cypress" />

describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/')
    // cy.get('.main-header') // select the .main-header element -> similar to querySelector
    // cy.get('img') // select all img tags in the document
    cy.get('.main-header img') // select the .main-header img -> it should be safer to use this
  })
})
