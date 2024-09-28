/*
  .then() 
  - Use then() for more direct element access
  - https://docs.cypress.io/guides/references/assertions
  - https://docs.cypress.io/api/commands/then#Whats-the-difference-between-then-and-shouldand

*/

/// <reference types="Cypress" />

describe('contact form', () => {
  it('should submit the form', () => {
    cy.visit('http://localhost:5173/about')

    cy.get('[data-cy="contact-input-message"]').type('Hello world!')
    cy.get('[data-cy="contact-input-name"]').type('John Doe')
    cy.get('[data-cy="contact-input-email"]').type('test@example.com')
    cy.get('[data-cy="contact-btn-submit"]').as('submitButton')
    cy.get('@submitButton')
      .contains('Send Message')
      .should('not.have.attr', 'disabled')
    cy.get('@submitButton')
      .click()
      .contains('Sending...')
      .should('have.attr', 'disabled')

    // .then -> access the element directly
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      // we can access many properties of the element
      // el[0]
      // el.hasClass('disabled')
      // el.attr('disabled')
      el.text()

      // in the callback we cannot use .should -> but we need to use expect()
      expect(el.attr('disabled')).to.not.be.undefined
      expect(el.text()).to.eq('Sending...')

      // to log out -> use cy.log()
      cy.log(el.text())
    })
  })
})
