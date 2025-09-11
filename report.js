const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",           
  reportPath: "reports/html",   
  reportName: "Cucumber Report", 
  pageTitle: "Resultados de pruebas",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11 Enterprise",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Workflow" },
      { label: "Release", value: "1.0.0" },
      { label: "Environment", value: process.env.ENV.toUpperCase() },
      { label: "SDET Engineer", value: "Ezequiel Medina Adames" },
      { label: "Executed", value: new Date().toLocaleString() },
    ],
  },
});
