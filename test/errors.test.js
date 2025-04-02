const DateUtils = require("../src/DateUtils");

describe("DateUtils.errors", () => {
  test("Lanza error cuando se pasa una fecha inválida", () => {
    const dateUtils = DateUtils.create("UTC");
    const invalidDate = "Invalid date";

    expect(() => {
      dateUtils.parse(invalidDate);
    }).toThrowError("Invalid date");
  });

  test("Deberia parsear un número correctamente", () => {
    const dateUtils = DateUtils.create("UTC");
    const date = new Date("2024-03-31T12:00:00Z");

    const parsedDate = dateUtils.parse(date.getTime());

    expect(parsedDate.toISOString()).toBe(date.toISOString());
  });
});
