import 'faker';

Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para prevenir que o Cypress falhe o teste em qualquer exceção não tratada
  //teste
  return false
})
