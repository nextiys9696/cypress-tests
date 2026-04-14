describe('Поиск в Google', () => {
  it('находит Cypress', () => {
    cy.visit('https://www.google.com')
    cy.get('textarea[name="q"]').type('Cypress{enter}')
    cy.contains('Cypress').should('be.visible')
    //тестовый коммент в google тест.
  })
})