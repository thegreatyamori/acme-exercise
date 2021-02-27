// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules
const utils = require("./utils");
const globals = require("../globals");

class Range {
  range_dates = [];

  constructor(day) {
    // parse start & finish time to Dates Array
    const _range = globals.RANGE_HOURS;

    for (const key in _range) {
      const [s_time, f_time] = _range[key];
      this.range_dates = [
        ...this.range_dates,
        utils.createDate(s_time, day),
        utils.createDate(f_time, day),
      ];
    }
  }

  getHoursByRange(first_date, second_date) {
    // calculate indexes where to put dates
    let pos_init = utils.lessThan(first_date, 0, this.range_dates);
    let pos_end = utils.lessThan(second_date, 1, this.range_dates);

    // calculate the hours of each range and store in an array
    return this.calcHoursPerDay(pos_init, pos_end, first_date, second_date);
  }


  /**
   * Determine the hours of work in the week.
   * @param {Number} pos_init
   * @param {Number} pos_end
   * @param {Date} init_date
   * @param {Date} end_date
   * @returns  an Array `[hour,hour,hour]` where each index is
   * associate with price `[25,15,20]`
   */
  calcHoursPerDay(pos_init, pos_end, init_date, end_date) {
    let _ranges = [...this.range_dates];
    let _work_hours = [];

    // replace strings in _ranges
    _ranges.splice(pos_init, 1, init_date);
    _ranges.splice(pos_end, 1, end_date);

    // console.log(pos_init, pos_end);

    let [a, b, c, d, e, f] = _ranges;
    let hour;
    let hour_1;
    let hour_2;

    switch (`${pos_init},${pos_end}`) {
      // first range
      case "0,1":
      case "-1,1":
        hour = this.diffHour(a, b);

        _work_hours = [hour, 0, 0];
        break;

      // second range
      case "2,3":
      case "1,3":
        hour = this.diffHour(c, d);

        _work_hours = [0, hour, 0];
        break;

      // third range
      case "-1,-2":
      case "-2,-1":
      case "3,-1":
        hour = this.diffHour(e, f);

        _work_hours = [0, 0, hour];
        break;

      // first & second range
      case "0,3":
        hour = this.diffHour(a, b);
        hour_1 = this.diffHour(c, d);

        _work_hours = [hour, hour_1, 0];
        break;

      // second & third range
      case "2,-1":
        hour = this.diffHour(c, d);
        hour_1 = this.diffHour(e, f);

        _work_hours = [0, hour, hour_1];
        break;

      // first & third range
      case "-2,1":
        hour = this.diffHour(a, b);
        hour_1 = this.diffHour(e, f);

        _work_hours = [hour, 0, hour_1];
        break;

      // all ranges
      case "0,-1":
        hour = this.diffHour(a, b);
        hour_1 = this.diffHour(c, d);
        hour_2 = this.diffHour(e, f);

        _work_hours = [hour, hour_1, hour_2];
        break;

      default:
        break;
    }

    return _work_hours;
  }

  /**
   * calculate the hours of difference
   *
   * */
  diffHour(init_date, end_date) {
    let diff = end_date.getTime() - init_date.getTime();
    let diff_as_date = new Date(diff);

    const diff_hours = diff_as_date.getUTCHours();

    if (diff_as_date.getUTCMinutes() == 59) {
      return diff_hours + 1;
    }

    return diff_hours;
  }
}

module.exports = Range;
