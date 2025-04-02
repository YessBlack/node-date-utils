class DateFormatter {
  static format(date, format = "YYYY-MM-DD") {
    const d = new Date(date);

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");

    const formatMap = {
      "DD/MM/YYYY": `${dd}/${mm}/${yyyy}`,
      "DD-MM-YYYY": `${dd}-${mm}-${yyyy}`,
      "MM/DD/YYYY": `${mm}/${dd}/${yyyy}`,
      "MM-DD-YYYY": `${mm}-${dd}-${yyyy}`,
      "YYYY-MM-DD": `${yyyy}-${mm}-${dd}`,
      "YYYY/MM/DD": `${yyyy}/${mm}/${dd}`,
    };

    if (!formatMap[format]) {
      throw new Error("Invalid format");
    }

    return formatMap[format];
  }
}

module.exports = DateFormatter;
