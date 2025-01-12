// Refactor following solution
// Get day number

let DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (day) => {
  let index;
  for (index = 0; index < DAYS.length; index++) {
    if (day.startsWith(DAYS[index].toLowerCase())) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
