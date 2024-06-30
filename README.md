# Cypress Tests for Narwal Sistemas

Este repositório contém testes automatizados usando Cypress para verificar elementos nas páginas do blog e de vagas da Narwal Sistemas.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

- Node.js: [Instalação](https://nodejs.org/)

## Instalação

Clone o repositório e instale as dependências necessárias.

```bash
git clone https://github.com/seu-usuario/narwal-sistemas-tests.git
cd narwal-sistemas-tests
npm install
```

## Executando os Testes

Para executar os testes, utilize o comando Cypress.

```bash
npm run cypress:open
```

Isso abrirá a interface do Cypress. Selecione o teste que deseja executar na interface.

## Testes Disponíveis

### Verificação da Página Inicial do Blog

Este teste verifica elementos na página inicial do blog da Narwal Sistemas.

```gherkin
Feature: Verificação da página inicial do blog da Narwal Sistemas

Scenario: Verificar elementos na página inicial do blog
    Given que estou na página inicial do blog da Narwal Sistemas
    Then eu devo ver o logotipo da empresa visível
    And eu devo ver o título Blog na página
    And eu devo ver o link para o catálogo de produtos na página do blog
```

### Verificação da Página de Vagas

Este teste verifica elementos na página de vagas da Narwal Sistemas.

```gherkin
Feature: Verificação da página de Vagas da Narwal Sistemas

Scenario: Verificar elementos na página de Vagas
    Given que estou na página de vagas da Narwal Sistemas
    Then eu devo ver o logotipo da empresa visível
    And eu devo ver o título De um match com a vaga que você busca! na página de vagas
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias, sugestões ou correções de bugs.

---

Este README fornece uma visão geral clara de como configurar, executar e contribuir para o projeto de testes usando Cypress. Certifique-se de personalizar as URLs e outros detalhes conforme necessário para refletir precisamente o ambiente e os testes que você está realizando.