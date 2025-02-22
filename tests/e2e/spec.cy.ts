/// <reference types="cypress" />

describe('Prueba End-to-End del Frontend', () => {
  it('Debe cargar la página principal y mostrar opiniones y trending topics', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Análisis de Sentimientos')
    // Verificar la existencia de tarjetas (asumiendo que los componentes tienen clases distintivas)
    cy.get('.ReviewCard, .TrendingCard').should('exist')
  })
}) 