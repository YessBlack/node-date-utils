const DateUtils = require("../src/DateUtils");

describe("DateUtils.timezone", () => {
  test("Convierte fecha a UTC correctamente", () => {
    const dateUtils = DateUtils.create("UTC");
    const date = new Date("2024-03-31T12:00:00Z");
    const timezone = "UTC";

    const convertedDate = dateUtils.toTimezone(date, timezone);

    expect(typeof convertedDate).toBe("string");
  });

  test("Convierte fecha a otro timezone correctamente", () => {
    const dateUtils = DateUtils.create("UTC");

    const utcDate = new Date("2024-03-31T12:00:00Z"); // 12:00 UTC
    const timezoneBogota = "America/Bogota"; // UTC-5
    const timezoneTokyo = "Asia/Tokyo"; // UTC+9

    const convertedBogota = dateUtils.toTimezone(utcDate, timezoneBogota);
    const convertedTokyo = dateUtils.toTimezone(utcDate, timezoneTokyo);

    expect(typeof convertedBogota).toBe("string");
    expect(typeof convertedTokyo).toBe("string");

    // Bogotá (UTC-5): 12:00 UTC → 07:00 AM Bogotá
    expect(convertedBogota).toBe("3/31/2024, 7:00:00 AM");

    // Tokio (UTC+9): 12:00 UTC → 09:00 PM Tokio
    expect(convertedTokyo).toBe("3/31/2024, 9:00:00 PM");
  });

  test("Convierte fecha desde Tokio a Bogotá sin cambiar el día", () => {
    const dateUtils = DateUtils.create("Asia/Tokyo");
    const tokyoDate = new Date("2024-03-31T12:00:00Z");
    const timezoneBogota = "America/Bogota";

    const convertedBogota = dateUtils.toTimezone(tokyoDate, timezoneBogota);

    expect(typeof convertedBogota).toBe("string");

    expect(convertedBogota).toBe("3/31/2024, 7:00:00 AM");
  });
});
