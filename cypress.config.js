const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    pageLoadTimeout: 8000,
    setupNodeEvents(on, config) {
      return config
    },
    fixturesFolder: false
  },
});
