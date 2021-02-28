/**
 * @author Jerson Morocho
 */

// declare modules
const utils = require('./utils');

class Price {
  constructor(day, indexes) {
    this.day = day;
    this.indexes = indexes;
  }

  /**
   * Calculates the total pay for weekly
   * working hours for an employee.
   * @param {Object} prices An object of prices per day `{day: price,...}`
   * @returns {Number} Number
   */
  static total(prices) {
    let sum_total = 0;

    for (const key in prices) {
      sum_total += prices[key];
    }

    return sum_total;
  }

  /**
   * calculates the total price per workday
   * @returns {Number} Number
   */
  calcPrices() {
    let total_price = 0;

    this.indexes.forEach((hour, index) => {
      let price = utils.getPriceByDayOfWeek(this.day, index);

      total_price += price * hour;
    });

    return total_price;
  }

}

module.exports = Price;
