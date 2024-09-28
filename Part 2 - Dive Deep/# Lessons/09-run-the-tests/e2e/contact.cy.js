/*
  Run the Tests
  - 2 ways: 
    -> npx cypress open
    -> npx cypress run
      # this will create 2 folders in cypress/ -> screenshots and videos
      # this should return error at .then() 

  - we should run the tests in both methods


****************************
  
  For the error when we use "npx cypress run":
  - it is because sometimes, cypress cannot select the element
  - to fix this:
    -> we can set "data-cy" attribute to the parent element 
    -> or we can use .should() instead of .then()


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

    // # screenshot
    cy.screenshot()
    cy.get('[data-cy="contact-btn-submit"]').contains('Send Message')
    cy.get('[data-cy="contact-input-message"]').as('msgInput')
    cy.get('@msgInput').focus().blur()
    cy.get('@msgInput')
      .parent()

      // # this will return error -> this is because sometimes cypress will not be able to find the element -> solution is to add data-cy to this element
      // .then((el) => {
      //   expect(el.attr('class')).to.contains('invalid')
      // })

      // # this works fine
      .should('have.attr', 'class')
      .and('match', /invalid/) // ether use <match>, or use <contains>
    // .and('contains', 'invalid')

    cy.get('[data-cy="contact-input-name"]').focus().blur()
    cy.get('[data-cy="contact-input-name"]')
      .parent()
      .should('have.attr', 'class')
      .and('contains', 'invalid')
    // .then((el) => {
    //   expect(el.attr('class')).to.contains('invalid')
    // })

    cy.get('[data-cy="contact-input-email"]').focus().blur()
    cy.get('[data-cy="contact-input-email"]')
      .parent()
      .should('have.attr', 'class')
      .and('contains', 'invalid')
    // .then((el) => {
    //   expect(el.attr('class')).to.contains('invalid')
    // })
  })
})
