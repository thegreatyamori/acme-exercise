const utils = require("../src/utils");
const regex = require("../globals").reg;

describe("Input", () => {
  test("Should check if the wrong day is entered", () => {
    const input = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
    JERSON=MO5:00-11:00,TH8:00-17:00,SU01:00-05:00
    MERCY=MO4:00-10:00,TH14:00-18:00,SA10:00-05:00
    JOSE=MO1:00-3:00,TF14:00-11:00,SA10:00-05:00
    ALBERTO=MO7:00-11:00,TU14:00-16:00,TH12:00-16:00`;

    expect(utils.testInput(input, regex, "gm")).toBeFalsy();
  });

  test("Should Check if you enter wrong range of hours", () => {
    const input = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
    JERSON=MO5:00-11:00,TH8:00-17:00,SU01:00-05:00
    MERCY=MO4:00-10:00,TH14:00-18:00,SA10:00-05:00
    JOSE=MO1:00-3:00,TH14:00-11:00,SA10:00-05:00
    ALBERTO=MO7:00-11:00,TU14:00-36:00,TH12:00-16:00`;

    expect(utils.testInput(input, regex, "gm")).toBeFalsy();
  });

  test("Should Check if nothing is entered", () => {
    const input = "";

    expect(utils.testInput(input, regex, "gm")).toBeFalsy();
  });

  test("Should check if entered in a different format", () => {
    const input = `RENE=MO10:00-12:00;TU10:00-12:00;TH01:00-03:00;SA14:00-18:00;SU20:00-21:00
    ASTRID=MO10:00-12:00;TH12:00-14:00;SU20:00-21:00
    JERSON=MO5:00-11:00;TH8:00-17:00;SU01:00-05:00
    MERCY=MO4:00-10:00;TH14:00-18:00;SA10:00-05:00
    JOSE=MO1:00-3:00;TH14:00-11:00;SA10:00-05:00
    ALBERTO=MO7:00-11:00;TU14:00-16:00;TH12:00-16:00`;

    expect(utils.testInput(input, regex, "gm")).toBeFalsy();
  });

  test("Should check for correct data entry", () => {
    const input = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
    JERSON=MO5:00-11:00,TH8:00-17:00,SU01:00-05:00
    MERCY=MO4:00-10:00,TH14:00-18:00,SA10:00-05:00
    JOSE=MO1:00-3:00,TH14:00-11:00,SA10:00-05:00
    ALBERTO=MO7:00-11:00,TU14:00-16:00,TH12:00-16:00`;

    expect(utils.testInput(input, regex, "gm")).toBeTruthy();
  });

  // TODO: Activar cuando se tenga la funcion printPayment
  // test("Should check for correct data output", () => {
  //   const input = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
  //   ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
  //   JERSON=MO5:00-11:00,TH8:00-17:00,SU01:00-05:00
  //   MERCY=MO4:00-10:00,TH14:00-18:00,SA10:00-05:00
  //   JOSE=MO1:00-3:00,TH14:00-11:00,SA10:00-05:00
  //   ALBERTO=MO7:00-11:00,TU14:00-16:00,TH12:00-16:00`;

  //   const output = `The amount to pay RENE is: 215 USD
  //   The amount to pay ASTRID is: 85 USD
  //   The amount to pay JERSON is: 215 USD
  //   The amount to pay MERCY is: 215 USD
  //   The amount to pay JOSE is: 215 USD
  //   The amount to pay ALBERTO is: 215 USD`;

  //   expect(printPayments(input)).toBe(output);
  // });
});
