describe('Мой первый тест', () => {
  it('открывает страницу и проверяет заголовок', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain').should('be.visible')
    //тестовый коммент в first тест
  })
})