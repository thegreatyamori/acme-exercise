// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules

const globals = require("../globals");
const utils = require("./utils");

class Input {
  constructor(data) {
    this.data = data;
  }

  /**
   * Determine if input is a valid data
   * @returns a boolean value
   */
  isValid() {
    return utils.testInput(this.data, globals.INPUT_REGEX, "gm");
  }

  /**
   * process input & send data to employee
   */
  process() {
    console.log(this.isValid());
    if (this.isValid()) {
      // split data & send to Employee
      return this.data.split("\n");
      // [].forEach
    } else {
      // TODO: Complete this
      throw err;
    }
  }
}

module.exports = Input;



// Hour
//   calcWorkingHours
//   findRangePrice
// Day
//   findPrice
