const Employee = require("../src/Employee");
const Hour = require("../src/Hour");

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

      expect(employee_test.getWeekHours()).toEqual(output);
    });
  });

  test("should calculate the working hours", () => {
    // RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
    // input separa el string en employees, luego envia los datos de cada employee por separado
    // el employee extrae el nombre, y luego separa los dias y horas de trabajo y envia los datos a horas
    // para que procese:
    //   - horas de trabajo
    //   - En que rango de precio esta: precio1, precio2, precio3
    // Una vez que se tengan estos dos valores, se calcula el día que trabajo
    // Con las horas de trabajo y el precio se calcula el pago.
    let input = {
      MO: ["10:00", "12:00"],
      TU: ["10:00", "12:00"],
      TH: ["01:00", "03:00"],
      SA: ["14:00", "18:00"],
      SU: ["20:00", "21:00"],
    };

    let output = {
      MO: [0, 2, 0], // second_range
      TU: [0, 2, 0], // second_range
      TH: [2, 0, 0], // first_range
      SA: [0, 4, 0], // second_range
      SU: [0, 0, 1], // third_range
    };

    const hour_test = new Hour(input);

    expect(hour_test.calcWorkingHours()).toEqual(output);
  });

  test("should find the price based by day", () => {
    let input = {
      MO: ["18:00", "23:00"],
      TH: ["00:01", "09:00"],
      SA: ["09:01", "12:00"],
    };

    let output = { MO: 100, TH: 225, SA: 60 };
    
    const hour_test = new Hour(input);

    expect(hour_test.findRangePrice()).toEqual(output);
  });

  // test("should associate the price according to the day of the week", () => {});

  test("should make the payment calculation", () => {
    let input_hours = { MO: 2, TU: 2, TH: 2, SA: 4, SU: 1 };
    let input_price = { MO: 15, TU: 15, TH: 25, SA: 20, SU: 25 };

    expect(proccessPayment(input_hours, input_price)).toBe(215);
  });
});
