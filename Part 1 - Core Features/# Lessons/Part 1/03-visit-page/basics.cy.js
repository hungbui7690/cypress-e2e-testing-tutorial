// cy.visit() -> visit any page we want to test

describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/')
  })
})
