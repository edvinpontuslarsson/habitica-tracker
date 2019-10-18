'use strict';

module.exports = (habiticaData) => {
  return {
    dailies: habiticaData.data
      .filter(
        // text
        (obj) =>
          obj.type === 'daily' && obj.completed === true
      )
      .map((daily) => daily.text)
      .join(' :white_check_mark:\n'),
    habits: habiticaData.data
      .filter(
        (obj) => obj.type === 'habit' && obj.counterUp > 0
      )
      .map(
        (habit) =>
          `${habit.text} ${
            habit.counterUp > 1 ? `${habit.counterUp} ` : ''
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
