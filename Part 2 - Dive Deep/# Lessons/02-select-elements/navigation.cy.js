/*
  Selecting Elements - The Best Practice Way 
  - <a data-cy="header-about-link" href="/about">About</a>
    -> cy.get([data-cy="header-about-link"])

  🌿 when we select element by data-cy attribute -> if it has multiple elements with the same data-cy attribute, it will select all of them
  📌 click on the "aiming icon" in cypress browser -> it will suggest us the best class name we should use to select that element

*/

/// <reference types="Cypress" />

describe('page navigation', () => {
  it('should navigate between pages', () => {
    cy.visit('http://localhost:5173/')

    // these 2 methods are not good -> since it is not specific
    // cy.get('header a').click()
    // cy.get('header a').last().click()

    // we add the custom attributes to the elements -> <data-cy> -> inspect element to see
    cy.get('[data-cy="header-about-link"]').click()
  })
})
