// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// Regex constants

const r_days = "(MO|TU|WE|TH|FR|SA|SU)"; // DAY
const r_hours = "(?:[01]?\\d|2[0-3])(?::[0-5]\\d)"; // hh:mm
const r_work_day = `${r_days}(${r_hours}-${r_hours})`; // DAYhh:mm-hh:mm
const reg = `^\\w+=(${r_work_day},)*(${r_work_day})$`; // NAME=DAYhh:mm-hh:mm,...

// Range hours

const start_hours = ["00:01", "09:01", "18:01"];
const finish_hours = ["09:00", "18:00", "00:00"];

// Prices

const prices = [25,15,20];

// Days

const days = ["MO",	"TU",	"WE",	"TH",	"FR",	"SA",	"SU"];


exports.R_DAYS = r_days;
exports.R_HOURS = r_hours;
exports.R_WORK_DAY = r_work_day;
exports.INPUT_REGEX = reg;
exports.START_HOURS = reg;
exports.FINISH_HOURS = reg;
exports.PRICES = reg;
exports.DAYS = reg;