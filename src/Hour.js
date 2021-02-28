/**
 * @author Jerson Morocho
 */

// declare modules
const utils = require("./utils");
const DateRange = require("./DateRange");
const Price = require("./Price");

class Hour {
  constructor(data) {
    this.data = data;
  }

  /**
   * calculates working hours by time range
   * @returns {Object}
   */
  calcWorkHours() {
    let workhours = Object.create({});

    for (let day in this.data) {
      let [init_time, end_time] = this.data[day];
      let init_date = utils.createDate(init_time, day);
      let end_date = utils.createDate(end_time, day);

      const dates_range = new DateRange(day);

      const range_workhours = dates_range.getHoursByRange(init_date, end_date);

      workhours[day] = range_workhours;
    }

    return workhours;
  }

  /**
   * calculates prices according to range of working hours and number of hours worked
   * @returns {Object}
   */
  calcPricesByWorkHours() {
    let workhours = { ...this.calcWorkHours() };

    let diary_price = Object.create({});

    for (const day in workhours) {
      const _hours_per_day = workhours[day];

      const price = new Price(day, _hours_per_day);

      diary_price[day] = price.calcPrices();
    }

    return diary_price;
  }
}

module.exports = Hour;
