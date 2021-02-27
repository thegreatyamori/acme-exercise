// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules

const globals = require("../globals");

class Employee {
  constructor(data) {
    this.data = data;
  }

  /**
   * extract name from data string
   * @returns NAME
   */
  getName() {
    let [_name] = this.data.match(globals.R_NAME);

    return _name;
  }

  /**
   * extract DAYS & WORK HOURS from data string
   * @returns {Object} `{ DAY: [START_HOUR, FINISH_HOUR], ... }`
   */
  getWeekHours() {
    // create empty object
    let work_hours = Object.create({});
    // match all coincidences of week hours
    let regex = new RegExp(globals.R_WORK_DAY, "g");
    let _unformatted_week_hours = this.data.match(regex);

    // iterate & format data
    _unformatted_week_hours.forEach((item) => {
      // extract coincidences of day & hours
      let regex_day = new RegExp(globals.R_DAYS, "g");
      let regex_hours = new RegExp(globals.R_HOURS, "g");
      let day = item.match(regex_day);
      let _hours = item.match(regex_hours);

      // build schema
      work_hours[day] = _hours;
    });

    return work_hours;
  }
}

module.exports = Employee;
