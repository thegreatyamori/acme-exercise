/**
 * @author Jerson Morocho
 */

// declare modules

const utils = require("./utils");
const Employee = require("./Employee");
const Hour = require("./Hour");
const Price = require("./Price");
const Output = require("./output");

class Input {
  constructor(data) {
    this.data = data;
  }

  /**
   * Determine if input is a valid data
   * @returns {Boolean} a boolean value
   */
  isValid() {
    return utils.isValidInput(this.data);
  }

  /**
   * process input & send data to Employee
   */
  process() {
    if (this.isValid()) {
      let _data_employees = this.data.split("\n");

      _data_employees.forEach((data) => {
        const employee = new Employee(data);
        const weekly_workhours = employee.getWeeklyWorkHours();

        const hours = new Hour(weekly_workhours);
        const weekly_workhours_prices = hours.calcPricesByWorkHours();

        const total_payment = Price.total(weekly_workhours_prices);

        Output.print(employee.getName(), total_payment);
      });
    } else {
      throw new Error('Sorry, the input data is corrupted');
    }
  }
}

module.exports = Input;
