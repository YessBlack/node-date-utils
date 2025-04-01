const DateParser = require("./DateParser");
const DateFormatter = require("./DateFormatter");
const DateConverter = require("./DateConverter");

class DateUtils {
  constructor(timezone = "UTC") {
    this.timezone = timezone;
  }

  parse(date) {
    return DateParser.parse(date);
  }

  format(date, format) {
    return DateFormatter.format(date, format);
  }

  toTimezone(date, timezone) {
    return DateConverter.toTimezone(date, timezone);
  }

  static create(timezone = "UTC") {
    return new DateUtils(timezone);
  }
}

module.exports = DateUtils;
