// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules

const fs = require("fs");
const Input = require("./src/Input");
const readline = require("readline");
const { exec } = require("child_process");

// read input & process
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// clear screen
exec("cls", (err, stdout, stderr) => {
  if (err) {
    console.log(`error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  fs.readFile("init.txt", "utf-8", (err, data) => {
    if (err) throw err;
    // print init.txt
    console.log(data);

    rl.question(`Path (test/employees.txt): `, (file) => {
      // read file, return string
      if (file === "") file = "test/employees.txt"

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) throw err;
        const input = new Input(data);

        input.process();
      });

      rl.close();
    });
  });
});
