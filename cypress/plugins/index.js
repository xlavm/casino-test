//uso cucumber para leer el lenguaje Gherkin en Cypress
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
