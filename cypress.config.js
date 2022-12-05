const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        // testomat.io reporter plugin:
        require('@testomatio/reporter/lib/adapter/cypress-plugin')(on, config);
    },
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    "baseUrl":"https://pushing-front.vercel.app/"
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true
  }
});

