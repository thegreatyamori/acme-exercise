// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules

const globals = require("../globals");
const utils = require("./utils");
const Employee = require("./Employee");
const WeekHour = require("./Hour");
const Price = require("./Price");
const Output = require("./output");

class Input {
  constructor(data) {
    this.data = data;
  }

  /**
   * Determine if input is a valid data
   * @returns a boolean value
   */
  isValid() {
    return utils.checkInput(this.data, globals.INPUT_REGEX, "gm");
  }

  /**
   * process input & send data to employee
   */
  process() {
    if (this.isValid()) {
      // split data
      let _data_employees = this.data.split("\n");

      // send to Employee
      _data_employees.forEach((data) => {
        // create Employee Object
        const employee = new Employee(data);
        const work_hours = employee.getWeekHours();

        // create Hour Object
        const _week_hours = new WeekHour(work_hours);
        const week_hours = _week_hours.findRangePrice();

        // calculate total
        const total = Price.total(week_hours);

        // print output

        Output.print(employee.getName(), total);
      });
    } else {
      // TODO: Complete this
      throw err;
    }
  }
}

module.exports = Input;
