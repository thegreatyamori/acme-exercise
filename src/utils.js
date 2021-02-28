/**
 * @author Jerson Morocho
 */

// declare modules
const globals = require("../globals");

/**
 * create regex & test input
 * @param {String} data A data input to test
 * @param {RegExp} regex Receive a `RegExp` Object
 * @param {String} flags Receive a `string` object of regex flags. Default `global`
 */
exports.isValidInput = (data, regex = globals.INPUT_REGEX, flags = "gm") => {
  if (data === "") return false;

  let reg = new RegExp(regex, flags);

  let data_passed = data.match(reg) == null ? 0 : data.match(reg).length;

  let data_original = data.split("\n").length;

  if (data_original != data_passed) {
    return false;
  }
  return true;
};

/**
 * Create & return a new Date instance with exactly hour & day
 *
 * @param {String} time A string time. Format: `hh:mm`
 * @param {String} day A string day to set, default `MO`
 */
exports.createDate = (time, day = "MO") => {
  let date = new Date();
  let regex = new RegExp("\\d+", "g");
  let [h, m] = time.match(regex);

  // set time
  date.setUTCHours(h, m, 0, 0);

  // set day given an integer representing the week day
  var day_to_set = globals.DAYS.indexOf(day);

  let currentDay = date.getUTCDay();
  let distance = day_to_set - currentDay;
  date.setUTCDate(date.getUTCDate() + distance);

  return date;
};

exports.replacementIndexes = (init_date, end_date, _range_dates) => {
  const _ranges = [..._range_dates];
  let pos_init = this.lessThan(init_date, _ranges);
  let pos_end = this.lessThan(end_date, _ranges);

  return [pos_init - 1, pos_end];
};

/**
 * Returns an index where the given date is less
 * than the evaluated date in an array
 * @param {Date} date The current date
 * @param {Number} position The position of date: init-end
 * @param {Array} _range The dates array
 */
exports.lessThan = (date, _ranges) => {
  const rule = (item) => date < item ||date.getTime() == item.getTime();
  return _ranges.findIndex(rule);
};

/**
 * Get the price by day of week
 * @param {String} day the reference day
 * @param {*} index an index to help locate the exact price
 * @returns {Number} base price
 */
exports.getPriceByDayOfWeek = (day, index) => {
  switch (day) {
    case "MO":
    case "TU":
    case "WE":
    case "TH":
    case "FR":
      return globals.PRICES[index];
    case "SA":
    case "SU":
      return globals.PRICES[index] + 5;
    default:
      break;
  }
};

exports.transformToDates = (_ranges, day) => {
  return _ranges
    .reduce((a, b) => a.concat(b))
    .map((x) => this.createDate(x, day));
};
