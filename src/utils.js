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
