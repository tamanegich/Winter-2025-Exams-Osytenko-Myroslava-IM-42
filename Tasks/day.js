// Refactor following solution
// Get day number

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function parseDay(day) {
  let index = DAYS.findIndex(d => day.startsWith(d.toLowerCase()));
  return index + 1 || -1;
}

module.exports = parseDay;
