class DateConverter {
  static toTimezone(date, timezone) {
    return date.toLocaleString("en-US", { timeZone: timezone });
  }
}

module.exports = DateConverter;
