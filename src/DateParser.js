class DateParser {
  static parse(dateString) {
    if (dateString instanceof Date) {
      if (isNaN(dateString.getTime())) {
        throw new Error("Invalid date");
      }

      return dateString;
    }

    if (typeof dateString === "number") {
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }

      return date;
    }

    if (typeof dateString === "string") {
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }

      return date;
    }

    throw new Error("Invalid date");
  }
}

module.exports = DateParser;
