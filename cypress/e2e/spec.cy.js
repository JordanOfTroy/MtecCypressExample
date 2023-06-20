describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('will pass the test', () => {
    expect(true).to.equal(true)
  })

  it('will fail the test', () => {
    // expect(true).to.equal(false) // will fail and throw error
    expect(false).to.equal(false) // passed to keep gui pretty
  })

})

describe('my first test', () => {
  it('visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    // cy.pause() // Allows you to step through test in GUI
    cy.contains('type').click()

    // should be on a new URL containing '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('HenryCavillSimp9000@email.com')
      .should('have.value', 'HenryCavillSimp9000@email.com')

  })
})