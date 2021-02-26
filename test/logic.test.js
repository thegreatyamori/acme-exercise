describe("Logic Bussiness", () => {
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

    let output = { MO: 2, TU: 2, TH: 2, SA: 4, SU: 1 };

    expect(calcWorkingHours(input)).toEqual(output);
  });

  describe("should find the price per hour according to the range", () => {
    test("should find the range: 0,1,3", () => {
      let input = {
        MO: ["10:00", "12:00"],
        TU: ["10:00", "12:00"],
        TH: ["01:00", "03:00"],
        SA: ["14:00", "18:00"],
        SU: ["20:00", "21:00"],
      };

      let output = { MO: 1, TU: 1, TH: 0, SA: 2, SU: 0 };

      expect(findRangePrice(input)).toEqual(output);
    });

    test("should find the price based by day", () => {
      let input = { MO: 1, TU: 1, TH: 0, SA: 2, SU: 0 };

      let output = { MO: 15, TU: 15, TH: 25, SA: 20, SU: 25 };

      expect(findPrice(input)).toEqual(output);
    });
  });

  // test("should associate the price according to the day of the week", () => {});

  test("should make the payment calculation", () => {
    let input_hours = { MO: 2, TU: 2, TH: 2, SA: 4, SU: 1 };
    let input_price = { MO: 15, TU: 15, TH: 25, SA: 20, SU: 25 };

    expect(proccessPayment(input_hours, input_price)).toBe(215);
  });
});
