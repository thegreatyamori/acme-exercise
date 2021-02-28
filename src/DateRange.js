/**
 * @author Jerson Morocho
 */

// declare modules
const utils = require("./utils");
const globals = require("../globals");

/**
 * DateRange works like this  
 *
 * In the constructor an array is created with the
 * ranges of workhours converted to dates.
 *
 * ```
 * {                                |=> ["2021-02-27 00:01",
 *    range_1: ["00:01", "09:00"],  |=> "2021-02-27 09:00",
 *    range_2: ["09:01", "18:00"],  |=> "2021-02-27 09:01",
 *    range_3: ["18:01", "00:00"],  |=> "2021-02-27 18:00",
 * };                               |=> "2021-02-27 18:01",
 *                                  |=> "2021-02-27 00:00"]
 * ```
 *
 * This array is updated with the same date for each daily
 * working hour.
 * 
 * The purpose is to replace in this array the start and
 * end time to simplify the exact calculation of hours
 * worked in a day, also allowing to work with a shared
 * range of schedules.
 * 
 */
class DateRange {
  range_dates = [];

  constructor(day) {
    let _ranges  = Object.values(globals.RANGE_HOURS);
    this.range_dates = utils.transformToDates(_ranges,day);
  }

  getHoursByRange(init_date, end_date) {
    let positions = utils.replacementIndexes(init_date, end_date, this.range_dates);

    // calculate the hours of each range and store in an array
    return this.calcHoursPerDay(positions, init_date, end_date);
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
  calcHoursPerDay([pos_init, pos_end], init_date, end_date) {
    let _ranges = [...this.range_dates];
    let _work_hours = [];

    // replace strings in _ranges
    _ranges.splice(pos_init, 1, init_date);
    _ranges.splice(pos_end, 1, end_date);


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

module.exports = DateRange;
