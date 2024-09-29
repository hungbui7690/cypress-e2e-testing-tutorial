// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('submitForm', () => {
  cy.get('form button[type="submit"]').click()
})

// Method 1: cy.now() -> if the test finishes and I want to visit the base URL -> cy.now('visit', '/')
// Cypress.Commands.addQuery('getById', (id) => {
//   const getFn = cy.now('get', `[data-cy="${id}"]`) // exec when we call getById() in our tests
//   return () => {
//     return getFn() // exec when cypress actually runs our test instruction
//   }
// })

// Method 2:
Cypress.Commands.add('getById', (id, ...args) => {
  return cy.get(`[data-cy=${id}]`, ...args)
})
