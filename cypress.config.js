const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/index.js',
    experimentalRunAllSpecs: true // permite rodar todos os testes visuais de uma vez só
  }
})
