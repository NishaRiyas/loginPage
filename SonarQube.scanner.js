const scanner = require("sonarqube-scanner");

scanner(

  {

    serverUrl: "http://localhost:9000",

    login: "admin",

    password: "admin123",

    token:"sqa_c8d9d005c2fd94f12be1f84752f67304e68c1c65",

    options: {

      "sonar.sources": "./src",

    },

  },

  () => process.exit()

);

