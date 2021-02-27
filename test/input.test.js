const utils = require("../src/utils");
const globals = require("../globals");

describe("Input", () => {
  test("Should check if the wrong day is entered", () => {
    const input =
      "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\n" +
      "ASTRID=MO10:00-12:00,TD12:00-14:00,SU20:00-21:00\n" +
      "JERSON=MO5:00-11:00,TH8:00-17:00,SU01:00-05:00\n" +
      "MERCY=MO4:00-10:00,TH14:00-18:00,SA10:00-05:00\n" +
      "JOSE=MO1:00-3:00,TH14:00-11:00,SA10:00-05:00\n" +
      "ALBERTO=MO7:00-11:00,TU14:00-16:00,TH12:00-16:00";

    expect(utils.checkInput(input, globals.INPUT_REGEX, "gm")).toBeFalsy();
  });

  test("Should Check if you enter wrong range of hours", () => {
    const input =
      "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\n" +
      "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\n" +
      "JERSON=MO5:00-11:00,TH8:00-17:00,SU01:00-05:00\n" +
      "MERCY=MO4:00-10:00,TH14:00-28:00,SA10:00-05:00\n" +
      "JOSE=MO1:00-3:00,TH14:00-11:00,SA10:00-05:00\n" +
      "ALBERTO=MO7:00-11:00,TU14:00-16:00,TH12:00-16:00";

    expect(utils.checkInput(input, globals.INPUT_REGEX, "gm")).toBeFalsy();
  });

  test("Should Check if nothing is entered", () => {
    const input = "";

    expect(utils.checkInput(input, globals.INPUT_REGEX, "gm")).toBeFalsy();
  });

  test("Should check if entered in a different format", () => {
    const input =
      "RENE=MO10:00-12:00;TU10:00-12:00;TH01:00-03:00;SA14:00-18:00;SU20:00-21:00\n" +
      "ASTRID=MO10:00-12:00;TH12:00-14:00;SU20:00-21:00\n" +
      "JERSON=MO5:00-11:00;TH8:00-17:00;SU01:00-05:00\n" +
      "MERCY=MO4:00-10:00;TH14:00-18:00;SA10:00-05:00\n" +
      "JOSE=MO1:00-3:00;TH14:00-11:00;SA10:00-05:00\n" +
      "ALBERTO=MO7:00-11:00;TU14:00-16:00;TH12:00-16:00";

    expect(utils.checkInput(input, globals.INPUT_REGEX, "gm")).toBeFalsy();
  });

  test("Should check for correct data entry", () => {
    const input =
      "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\n" +
      "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\n" +
      "JERSON=MO5:00-11:00,TH8:00-17:00,SU01:00-05:00\n" +
      "MERCY=MO4:00-10:00,TH14:00-18:00,SA10:00-05:00\n" +
      "JOSE=MO1:00-3:00,TH14:00-11:00,SA10:00-05:00\n" +
      "ALBERTO=MO7:00-11:00,TU14:00-16:00,TH12:00-16:00";

    expect(utils.checkInput(input, globals.INPUT_REGEX, "gm")).toBeTruthy();
  });
});
