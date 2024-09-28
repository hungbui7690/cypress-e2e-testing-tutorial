/*
  Simulating Special Key Presses
  - https://docs.cypress.io/api/commands/type


*/

/// <reference types="Cypress" />

describe('contact form', () => {
  it('should submit the form', () => {
    cy.visit('http://localhost:5173/about')

    cy.get('[data-cy="contact-input-message"]').type('Hello world!')
    cy.get('[data-cy="contact-input-name"]').type('John Doe')
    cy.get('[data-cy="contact-input-email"]').type('test@example.com{enter}') // ~~ type: enter
    cy.get('[data-cy="contact-btn-submit"]').as('submitButton')

    cy.get('@submitButton')
      .contains('Sending...')
      .should('have.attr', 'disabled')
  })
})
