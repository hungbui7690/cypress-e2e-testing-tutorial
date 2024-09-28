/*
  Repetition and More Assertions 


*/

/// <reference types="Cypress" />

describe('page navigation', () => {
  it('should navigate between pages', () => {
    cy.visit('http://localhost:5173/')

    // navigate to About page
    cy.get('[data-cy="header-about-link"]').click()
    cy.location('pathname').should('eq', '/about') // pathname === /about -> About page

    // back to Home page
    cy.go('back') // simulate browser back button
    cy.location('pathname').should('eq', '/') // / => Home page

    // go to About page -> then go back to Home page
    cy.get('[data-cy="header-about-link"]').click()
    cy.get('[data-cy="header-home-link"]').click()
    cy.location('pathname').should('eq', '/')
  })
})
