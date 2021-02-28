const Employee = require("../src/Employee");
const Hour = require("../src/Hour");
const Price = require("../src/Price");

describe("Logic Bussiness", () => {
  test("should format input data ", () => {
    const input = ["MERCY=MO4:00-10:00,TH14:00-18:00,SA10:00-05:00"];
    const output = {
      MO: ["4:00", "10:00"],
      TH: ["14:00", "18:00"],
      SA: ["10:00", "05:00"],
    };

    input.forEach((item) => {
      const employee_test = new Employee(item);

      expect(employee_test.getWeeklyWorkHours()).toEqual(output);
    });
  });

  test("should calculate the working hours", () => {
    const input = {
      MO: ["10:00", "12:00"],
      TU: ["10:00", "12:00"],
      TH: ["01:00", "03:00"],
      SA: ["14:00", "18:00"],
      SU: ["20:00", "21:00"],
    };

    const output = {
      //  1️⃣ 2️⃣ 3️⃣ range
      MO: [0, 2, 0],
      TU: [0, 2, 0],
      TH: [2, 0, 0],
      SA: [0, 4, 0],
      SU: [0, 0, 1],
    };

    const hour_test = new Hour(input);

    expect(hour_test.calcWorkHours()).toEqual(output);
  });

  test("should find the price based by day", () => {
    const input = {
      MO: ["18:00", "23:00"],
      TH: ["00:01", "09:00"],
      SA: ["09:01", "12:00"],
    };

    const output = { MO: 100, TH: 225, SA: 60 };

    const hour_test = new Hour(input);

    expect(hour_test.calcPricesByWorkHours()).toEqual(output);
  });

  test("should make the payment calculation", () => {
    const input = { MO: 100, TH: 225, SA: 60 };

    const total_price_test = Price.total(input);

    expect(total_price_test).toBe(385);
  });
});
