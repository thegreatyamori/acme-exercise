// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules
const globals = require("../globals");

/**
 * create regex & test input
 * @param {String} data A data input to test
 * @param {RegExp} regex Receive a `RegExp` Object
 * @param {String} flags Receive a `string` object of regex flags. Default `global`
 */
exports.checkInput = (data, regex, flags = "g") => {
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
