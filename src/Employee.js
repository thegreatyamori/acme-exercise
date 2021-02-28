/**
 * @author Jerson Morocho
 */

// declare modules

const constants = require("../globals");

class Employee {
  constructor(data) {
    this.data = data;
  }

  /**
   * extract name from data input
   * @returns {String} NAME
   */
  getName() {
    let [_name] = this.data.match(constants.R_NAME);

    return _name;
  }

  /**
   * extract DAYS & WORK HOURS from data string
   * @returns {Object} `{ DAY: [START_HOUR, FINISH_HOUR], ... }`
   */
  getWeeklyWorkHours() {
    let weekly_workhours = Object.create({});

    // match all coincidences of week hours
    let r_workday = new RegExp(constants.R_WORKDAY, "g");
    let _workdays = this.data.match(r_workday);

    _workdays.forEach((workday) => {
      let r_day = new RegExp(constants.R_DAYS, "g");
      let r_hours = new RegExp(constants.R_HOURS, "g");
      let day = workday.match(r_day);
      let _hours = workday.match(r_hours);

      weekly_workhours[day] = _hours;
    });

    return weekly_workhours;
  }
}

module.exports = Employee;
