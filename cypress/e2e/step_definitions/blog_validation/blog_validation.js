// Importa os passos Given, When, Then 
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// Define o passo Given que estabelece que estou na página inicial do blog da Narwal Sistemas
Given('que estou na página inicial do blog da Narwal Sistemas', () => {
  // Acessa a URL da página inicial do blog
  cy.visit('https://www.narwalsistemas.com.br/blog/')
})

// Define o passo Then que verifica se o logotipo da empresa está visível
Then('eu devo ver o logotipo da empresa visível', () => {
  // Verifica se o elemento 'a > .attachment-large' está visível
  cy.get('a > .attachment-large')
    .should('be.visible')
})

// Define o passo Then que verifica se o título 'Blog' está presente na página
Then('eu devo ver o título Blog na página', () => {
  // Verifica se o elemento '.elementor-heading-title' contém o texto 'Blog'
  cy.get('.elementor-heading-title')
    .contains('Blog')
})

// Define o passo Then que verifica se há um link para o catálogo de produtos na página do blog
Then('eu devo ver o link para o catálogo de produtos na página do blog', () => {
  // Verifica se há um link específico 'a[href="https://www.narwalsistemas.com.br/blog/catalogodeprodutos/"]' na página
  cy.get('a[href="https://www.narwalsistemas.com.br/blog/catalogodeprodutos/"]')
    .should('exist')
})
