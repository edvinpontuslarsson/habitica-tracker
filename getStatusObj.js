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
      .join(':white_check_mark:\n'),
    // todo: for habits in string add x <counterUp>
    habits: habiticaData.data
      .filter(
        (obj) => obj.type === 'habit' && obj.counterUp > 0
      )
      .map(
        (habit) => `${habit.text} times ${habit.counterUp}`
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
