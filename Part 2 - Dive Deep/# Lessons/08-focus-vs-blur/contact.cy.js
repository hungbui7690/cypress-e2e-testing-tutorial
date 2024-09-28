/*
  Losing & Gaining Focus 
  - blur(): lose focus
  - focus()
  - parent()
  - children()


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

  it('should validate the form input', () => {
    cy.visit('http://localhost:5173/about')
    cy.get('[data-cy="contact-btn-submit"]').click()
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el).to.not.have.attr('disabled')
      expect(el.text()).to.not.equal('Sending...')
    })

    // # go to the app to see the validation -> if we focus on the input, then lose focus -> the style will be changed -> class will also be changed to invalid
    cy.get('[data-cy="contact-btn-submit"]').contains('Send Message')
    cy.get('[data-cy="contact-input-message"]').as('msgInput')
    cy.get('@msgInput').focus().blur()
    cy.get('@msgInput')
      .parent()
      .then((el) => {
        expect(el.attr('class')).to.contains('invalid')
      })

    cy.get('[data-cy="contact-input-name"]').focus().blur()
    cy.get('[data-cy="contact-input-name"]')
      .parent()
      .then((el) => {
        expect(el.attr('class')).to.contains('invalid')
      })

    cy.get('[data-cy="contact-input-email"]').focus().blur()
    cy.get('[data-cy="contact-input-email"]')
      .parent()
      .then((el) => {
        expect(el.attr('class')).to.contains('invalid')
      })
  })
})
