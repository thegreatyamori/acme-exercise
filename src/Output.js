/**
 * @author Jerson Morocho
 */

// declare modules

class Output {
  /**
   * print employee name and pay
   * @param {String} name The employee's name
   * @param {Number} total The total payment
   */
  static print(name, total) {
    console.log(`The amount to pay ${name} is: ${total} USD`);
  }
}

module.exports = Output;
