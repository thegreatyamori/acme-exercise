// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules
const utils = require("./utils");
const Range = require("./Range");

class Hour {
  constructor(data) {
    this.data = data;
  }

  calcWorkingHours() {
    // create empty object
    let work_hours = Object.create({});

    for (let day in this.data) {
      // create dates
      let [s_time, f_time] = this.data[day];
      let s_date = utils.createDate(s_time, day);
      let f_date = utils.createDate(f_time, day);

      // get range dates with current day
      const range_dates = new Range(day);

      // get hours by range
      const range_hours = range_dates.getHoursByRange(s_date, f_date);

      // build schema
      work_hours[day] = range_hours;
    }

    return work_hours;
  }

  findRangePrice() {}
}

module.exports = Hour;

// Day
//   findPrice
