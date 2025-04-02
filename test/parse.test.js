const DateUtils = require("../src/DateUtils");

describe("DateUtils.parse", () => {
  test("Parsea fecha correctamente", () => {
    const dateUtils = DateUtils.create("UTC");
    const date = new Date("2024-03-31T12:00:00Z");
    const parsedDate = dateUtils.parse(date, "YYYY-MM-DD");

    expect(parsedDate.toISOString()).toBe(
      new Date("2024-03-31T12:00:00Z").toISOString()
    );
  });

  test("Debería parsear un número correctamente", () => {
    const dateUtils = DateUtils.create("UTC");
    const date = new Date("2024-03-31T12:00:00Z");
    const parsedDate = dateUtils.parse(date.getTime());
    expect(parsedDate.toISOString()).toBe(date.toISOString());
  });
});
