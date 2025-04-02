const DateUtils = require("../src/DateUtils");

describe("DateUtils.format", () => {
  test("Formatea fecha en diferentes formatos", () => {
    const dateUtils = DateUtils.create("UTC");
    const date = new Date("2024-03-31T12:00:00Z");

    const format1 = "YYYY-MM-DD";
    const format2 = "DD/MM/YYYY";
    const format3 = "MM-DD-YYYY";

    const formattedDate1 = dateUtils.format(date, format1);
    const formattedDate2 = dateUtils.format(date, format2);
    const formattedDate3 = dateUtils.format(date, format3);

    expect(formattedDate1).toBe("2024-03-31");
    expect(formattedDate2).toBe("31/03/2024");
    expect(formattedDate3).toBe("03-31-2024");
  });
});
