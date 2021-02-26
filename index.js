// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules

const fs = require("fs");
const Input = require("./src/Input");

// read file, return string

fs.readFile("employees.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    const input = new Input(data);

    input.process();
  }
});
