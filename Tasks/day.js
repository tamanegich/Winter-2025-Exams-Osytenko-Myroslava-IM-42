const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function parseDay(day) {
  const index = DAYS.findIndex(d => day.startsWith(d.toLowerCase()));
  return index + 1 || -1;
}

module.exports = parseDay;
