// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules

const fs = require('fs');
const globals = require('./globals');
const utils = require('./src/utils');

// read file, return string

fs.readFile("employees.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error: ", err);
  } else {

    // create a regex to test input

    console.log(utils.testInput(data, globals.reg, "gm"));

  }
});
