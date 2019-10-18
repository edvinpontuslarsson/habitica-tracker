'use strict';

module.exports = (habiticaData) => {
  return {
    dailies: habiticaData.data
      // filter out relevant dailies
      .filter(
        (obj) =>
          obj.type === 'daily' && obj.completed === true
      )

      // sorts dailies based on number in notes
      .sort(compareOrder)

      // generates text
      .map((daily) => `${daily.text} :white_check_mark:`)

      // join dailies, separated by line breaks, into a string
      .join('\n'),

    habits: habiticaData.data
      .filter(
        (obj) => obj.type === 'habit' && obj.counterUp > 0
      )
      .map(
        (habit) =>
          `${habit.text} ${
            habit.counterUp > 1 ? `${habit.counterUp}` : ''
          } ${habit.notes}`
      )
      .join(`\n`),

    missedDailies: habiticaData.data
      .filter(
        (obj) =>
          obj.type === 'daily' &&
          obj.completed === false &&
          obj.isDue === true
      )
      .map((daily) => daily.text)
      .join('\n'),
  };
};

/**
 * compares based on number in notes
 */
function compareOrder(a, b) {
  if (Number.parseInt(a.notes) < Number.parseInt(b.notes)) {
    return -1;
  }

  if (Number.parseInt(a.notes) < Number.parseInt(b.notes)) {
    return 1;
  }

  return 0;
}