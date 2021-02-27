// ---------------------------
// Author: Jerson Morocho
// ---------------------------

// declare modules
const utils = require("./utils");
const globals = require("../globals");

class Price {
  constructor(day, indexes) {
    this.day = day;
    this.indexes = indexes;
  }

  get calc() {
    return this.calcPrices();
  }

  calcPrices() {
    let _total_price = 0;

    this.indexes.forEach((value, index) => {
      let price = this.priceByDayOfWeekAndIndex(this.day, index);
      _total_price += price * value;
    });

    return _total_price;
  }

  priceByDayOfWeekAndIndex(day, index) {
    let price;
    const prices = globals.PRICES;

    switch (day) {
      case "MO":
      case "TU":
      case "WE":
      case "TH":
      case "FR":
        price = prices[index];
        break;
      case "SA":
      case "SU":
        price = prices[index] + 5;
        break;
      default:
        break;
    }

    return price;
  }
}

module.exports = Price;
