/*
  Understanding Tasks 
  - cy.task()
  - allow us to run predefined tasks in our tests
  - run outside of the browser -> eg. nodejs 
  - ex: seed database, store data in files...


  1. cypress.config.js
  2. contact.cy.js


************************

  seedDatabase() {},
  -> cy.task('seedDatabase')
    
  seedDatabase(fileName) {}
  -> cy.task('seedDatabase', 'contact.json')
  
  seedDatabase(fileName) {
    return fileName
  }
  -> cy.task('seedDatabase', 'contact.json').then((returnValue) => {
    ...
    })


*/

/// <reference types="Cypress" />

describe('contact form', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('should submit the form', () => {
    // 2.
    cy.task('seedDatabase', 'contact.json')
    cy.getById('contact-input-message').type('Hello world!')
    cy.getById('contact-input-name').type('John Doe')
    cy.getById('contact-btn-submit').then((el) => {
      expect(el.attr('disabled')).to.be.undefined
      expect(el.text()).to.eq('Send Message')
    })
    cy.get('[data-cy="contact-input-email"]').type('test@example.com{enter}')

    // #
    cy.get('[data-cy="contact-btn-submit"]').as('submitBtn')
    cy.get('@submitBtn').contains('Sending...')
    cy.get('@submitBtn').should('have.attr', 'disabled')
  })

  it('should validate the form input', () => {
    cy.get('[data-cy="contact-btn-submit"]').click()
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el).to.not.have.attr('disabled')
      expect(el.text()).to.not.equal('Sending...')
    })
    cy.get('[data-cy="contact-btn-submit"]').contains('Send Message')
    cy.get('[data-cy="contact-input-message"]').as('msgInput')
    cy.get('@msgInput').focus().blur()
    cy.get('@msgInput')
      .parent()
      .should((el) => {
        expect(el.attr('class')).not.to.be.undefined
        expect(el.attr('class')).contains('invalid')
      })

    cy.get('[data-cy="contact-input-name"]').focus().blur()
    cy.get('[data-cy="contact-input-name"]')
      .parent()
      .should((el) => {
        expect(el.attr('class')).not.to.be.undefined
        expect(el.attr('class')).contains('invalid')
      })

    cy.get('[data-cy="contact-input-email"]').focus().blur()
    cy.get('[data-cy="contact-input-email"]')
      .parent()
      .should((el) => {
        expect(el.attr('class')).not.to.be.undefined
        expect(el.attr('class')).contains('invalid')
      })
  })
})
