// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// Regex constants
// ========================================

/**
 * extracting NAME
 */
const r_name = "^\\w+";
/**
 * extracting DAY: MO | TU | WE | TH | FR | SA | SU
 */
const r_days = "(MO|TU|WE|TH|FR|SA|SU)";
/**
 * extracting HOURS: hh:mm
 */
const r_hours = "(?:[01]?\\d|2[0-3])(?::[0-5]\\d)";
/**
 * extracting WORK DAYS: DAYhh:mm-hh:mm
 */
const r_work_day = `${r_days}(${r_hours}-${r_hours})`;
/**
 * extracting EMPLOYEE: NAME=DAYhh:mm-hh:mm,...
 */
const reg = `${r_name}=(${r_work_day},)*(${r_work_day})$`;

// Range hours
// ========================================

/**
 * Object of RANGE HOURS: `{
  first_range: ["00:01", "09:00"],
  second_range: ["09:01", "18:00"],
  third_range: ["18:01", "00:00"]
}`
 */
const range_hours = {
  fst_range: ["00:01", "09:00"],
  second_range: ["09:01", "18:00"],
  th_range: ["18:01", "00:00"]
}

// Prices
// ========================================

/**
 * Array of PRICES: `25,15,20`
 */
const prices = [25, 15, 20];

// Days
// ========================================

/**
 * Array of DAYS: SU | MO | TU | WE | TH | FR | SA
 */
const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

// Exports
// ========================================

module.exports.R_NAME = r_name;
module.exports.R_DAYS = r_days;
module.exports.R_HOURS = r_hours;
module.exports.R_WORK_DAY = r_work_day;
module.exports.INPUT_REGEX = reg;
module.exports.RANGE_HOURS = range_hours;
module.exports.PRICES = prices;
module.exports.DAYS = days;
