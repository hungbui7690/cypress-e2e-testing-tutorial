/*
  Repetition and More Assertions 
  - test the contact form in /about page


*/

/// <reference types="Cypress" />

describe('contact form', () => {
  it('should submit the form', () => {
    cy.visit('http://localhost:5173/about')

    // test the inputs fields
    cy.get('[data-cy="contact-input-message"]').type('Hello world!')
    cy.get('[data-cy="contact-input-name"]').type('John Doe')
    cy.get('[data-cy="contact-input-email"]').type('test@example.com')

    // test the button
    // cy.get('[data-cy="contact-btn-submit"]').contains('Send Message')
    // cy.get('[data-cy="contact-btn-submit"]').should('not.have.attr', 'disabled')
    // cy.get('[data-cy="contact-btn-submit"]').click()
    // cy.get('[data-cy="contact-btn-submit"]').contains('Sending...')
    // cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled')

    // chaining the cy commands
    cy.get('[data-cy="contact-btn-submit"]')
      .contains('Send Message')
      .should('not.have.attr', 'disabled')
    cy.get('[data-cy="contact-btn-submit"]')
      .click()
      .contains('Sending...')
      .should('have.attr', 'disabled')
  })
})
