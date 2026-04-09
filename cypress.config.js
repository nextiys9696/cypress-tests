const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // можно оставить пустым или добавить настройки
    },
    baseUrl: "https://www.google.com",
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",       // папка для отчётов
    overwrite: false,                   // не перезаписывать старые
    html: true,                         // создавать HTML
    json: true,                         // создавать JSON
    timestamp: "yyyy-mm-dd_HH-MM-ss"    // добавить время к имени
  }
});
