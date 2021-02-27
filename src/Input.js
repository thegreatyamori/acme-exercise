// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules

const globals = require("../globals");
const utils = require("./utils");
const Employee = require("./Employee");
const WeekHour = require("./Hour");

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
    console.log(this.isValid());
    if (this.isValid()) {
      // split data
      let _data_employees = this.data.split("\n");

      // send to Employee
      _data_employees.forEach((data) => {
        // create Employee Object
        const employee = new Employee(data);
        let work_hours = employee.getWeekHours();

        // create Hour Object
        const _week_hours = new WeekHour(work_hours);
        let week_hours = _week_hours.calcWorkingHours();
        // _week_hours.findRangePrice();

        console.log("NAME: ", employee.getName());
        console.log(week_hours);
      });
    } else {
      // TODO: Complete this
      throw err;
    }
  }
}

module.exports = Input;
