// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// Regex constants

const r_name = "^\\w+";
const r_days = "(MO|TU|WE|TH|FR|SA|SU)"; // DAY
const r_hours = "(?:[01]?\\d|2[0-3])(?::[0-5]\\d)"; // hh:mm
const r_work_day = `${r_days}(${r_hours}-${r_hours})`; // DAYhh:mm-hh:mm
const reg = `${r_name}=(${r_work_day},)*(${r_work_day})$`; // NAME=DAYhh:mm-hh:mm,...

// Range hours

const start_hours = ["00:01", "09:01", "18:01"];
const finish_hours = ["09:00", "18:00", "00:00"];

// Prices

const prices = [25, 15, 20];

// Days

const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

// Exports

module.exports.R_NAME = r_name;
module.exports.R_DAYS = r_days;
module.exports.R_HOURS = r_hours;
module.exports.R_WORK_DAY = r_work_day;
module.exports.INPUT_REGEX = reg;
module.exports.START_HOURS = start_hours;
module.exports.FINISH_HOURS = finish_hours;
module.exports.PRICES = prices;
module.exports.DAYS = days;
