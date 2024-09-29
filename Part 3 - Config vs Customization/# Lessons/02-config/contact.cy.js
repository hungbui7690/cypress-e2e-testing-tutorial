/*
  Timeout
  - cypress will wait for a response from the server before it marks the test as passed or failed
  - cypress.config.js
    - defaultCommandTimeout: 5000
    - requestTimeout: 5000
    - responseTimeout: 5000
    ...
  - we can change the value in cypress.config.js if we need to 


*******************************

  Global vs Local Config 
  - global config is applied to all tests -> cypress.config.js
  - local config is applied to a single test or just a single case -> below


*******************************

  Setting the Test Browser 
  - can be set in the cypress.config.js
  - or when run: "npx cypress run --browser firefox"


*******************************

  Configuring the baseURL
  - when run: "npx cypress run --config baseUrl="
  - or in global cypress.config.js -> inside "e2e" object
      e2e: {
        baseUrl: '',
      },
  - after set the baseURL:
    -> cy.visit('/about') but not cy.visit('/about')


*/

/// <reference types="Cypress" />

// # config can be set here
describe('contact page', { browser: 'firefox' }, () => {
  // or can be set here
  it('should submit the form', { requestTimeout: 5000 }, () => {})
})

describe('contact form', () => {
  it('should submit the form', () => {
    cy.visit('/about')
    cy.get('[data-cy="contact-input-message"]').type('Hello world!')
    cy.get('[data-cy="contact-input-name"]').type('John Doe')
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el.attr('disabled')).to.be.undefined
      expect(el.text()).to.eq('Send Message')
    })
    cy.screenshot()
    cy.get('[data-cy="contact-input-email"]').type('test@example.com{enter}')
    // cy.get('[data-cy="contact-btn-submit"]')
    //   .contains('Send Message')
    //   .should('not.have.attr', 'disabled');
    cy.screenshot()
    cy.get('[data-cy="contact-btn-submit"]').as('submitBtn')
    // cy.get('@submitBtn').click();
    cy.get('@submitBtn').contains('Sending...')
    cy.get('@submitBtn').should('have.attr', 'disabled')
  })

  it('should validate the form input', () => {
    cy.visit('/about')
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
