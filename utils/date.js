// I took it from stackoverflow
// https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd

function formatDate(yourDate) {
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
  return yourDate.toISOString().split("T")[0];
}

module.exports = formatDate;
