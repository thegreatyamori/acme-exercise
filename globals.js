/**
 * @author Jerson Morocho
 */

const r_name = "^\\w+";

const r_days = "(MO|TU|WE|TH|FR|SA|SU)";

const r_hours = "(?:[01]?\\d|2[0-3])(?::[0-5]\\d)";

const r_workday = `${r_days}(${r_hours}-${r_hours})`;

const reg = `${r_name}=(${r_workday},)*(${r_workday})$`;

// Range hours
// ========================================

const range_hours = {
  range_1: ["00:01", "09:00"],
  range_2: ["09:01", "18:00"],
  range_3: ["18:01", "00:00"],
};

// Prices
// ========================================

const prices = [25, 15, 20];

// Days
// ========================================

const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

// Exports
// ========================================

module.exports.R_NAME = r_name;
module.exports.R_DAYS = r_days;
module.exports.R_HOURS = r_hours;
module.exports.R_WORKDAY = r_workday;
module.exports.INPUT_REGEX = reg;
module.exports.RANGE_HOURS = range_hours;
module.exports.PRICES = prices;
module.exports.DAYS = days;
