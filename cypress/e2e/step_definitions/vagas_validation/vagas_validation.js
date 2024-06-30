import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// Dado que estou na página de vagas da Narwal Sistemas
Given('que estou na página de vagas da Narwal Sistemas', () => {
  // Acesse a URL da página de vagas
  cy.visit('https://www.narwalsistemas.com.br/vagas/')
})

// Então, eu devo ver o logotipo da empresa visível
Then('eu devo ver o logotipo da empresa visível', () => {
  // Verifique se o logotipo da empresa está visível na página
  cy.get('a > .attachment-large')
    .should('be.visible')
})

// Então, eu devo ver o título "De um match com a vaga que você busca!" na página de vagas
Then('eu devo ver o título De um match com a vaga que você busca! na página de vagas', () => {
  // Verifique se o título específico está visível na página e contém o texto correto
  cy.get('.elementor-heading-title')
    .should('be.visible') // O título deve estar visível
    .and('contain.text', 'De um match com a vaga que você busca!') // O título deve conter o texto especificado
})
