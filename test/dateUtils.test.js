const DateUtils = require("../src/DateUtils");

test("Convierte fecha a UTC correctamente", () => {
  const dateUtils = DateUtils.create("UTC");
  const date = new Date("2024-03-31T12:00:00Z");
  const timezone = "UTC";

  const convertedDate = dateUtils.toTimezone(date, timezone);

  expect(typeof convertedDate).toBe("string");
});

test("Formatea fecha correctamente", () => {
  const dateUtils = DateUtils.create("UTC");
  const date = new Date("2024-03-31T12:00:00Z");
  const format = "YYYY-MM-DD";

  const formattedDate = dateUtils.format(date, format);

  expect(formattedDate).toBe("2024-03-31");
});

test("Parsea fecha correctamente", () => {
  const dateUtils = DateUtils.create("UTC");
  const date = new Date("2024-03-31T12:00:00Z");

  const parsedDate = dateUtils.parse(date, "YYYY-MM-DD");

  expect(parsedDate.toISOString()).toBe(
    new Date("2024-03-31T12:00:00Z").toISOString()
  );
});

test("Convierte fecha a otro timezone correctamente", () => {
  const dateUtils = DateUtils.create("UTC");
  const date = new Date("2024-03-31T12:00:00Z");
  const timezone = "America/Bogota";

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
  const dateUtils = DateUtils.create("UTC");

  const tokyoDate = new Date("2024-03-31T12:00:00Z");
  const timezoneTokyo = "Asia/Tokyo";
  const timezoneBogota = "America/Bogota";

  const convertedBogota = dateUtils.toTimezone(tokyoDate, timezoneBogota);

  expect(typeof convertedBogota).toBe("string");

  expect(convertedBogota).toBe("3/31/2024, 7:00:00 AM");
});

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
