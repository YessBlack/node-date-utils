class DateFormatter {
  static format(date, format = "YYYY-MM-DD") {
    const d = new Date(date);

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");

    const formatMap = {
      "YYYY-MM-DD": `${yyyy}-${mm}-${dd}`,
      "DD/MM/YYYY": `${dd}/${mm}/${yyyy}`,
      "MM-DD-YYYY": `${mm}-${dd}-${yyyy}`,
      "YYYY/MM/DD": `${yyyy}/${mm}/${dd}`,
    };

    return formatMap[format];
  }
}

module.exports = DateFormatter;
