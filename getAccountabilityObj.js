'use strict';

module.exports = (habiticaData) => {
  const obj = {
    dailies: habiticaData.data
      // filters out relevant dailies
      .filter(
        (obj) =>
          obj.type === 'daily' &&
          obj.completed === true &&
          obj.priority >= 1 // difficulty is at least easy
      )
      .sort(compareOrder),
    habits: habiticaData.data.filter(
      (obj) => obj.type === 'habit' && obj.counterUp > 0
    ),
    badHabits: habiticaData.data.filter(
      (obj) => obj.type === 'habit' && obj.counterDown > 0
    ),
    missedDailies: habiticaData.data
      .filter(
        (obj) =>
          obj.type === 'daily' &&
          obj.completed === false &&
          obj.isDue === true &&
          obj.priority >= 1
      )
      .sort(compareOrder),
  };

  return obj;
};

/**
 * compares based on number in notes
 */
function compareOrder(a, b) {
  if (Number.parseInt(a.notes) < Number.parseInt(b.notes)) {
    return -1;
  }

  if (Number.parseInt(a.notes) > Number.parseInt(b.notes)) {
    return 1;
  }

  return 0;
}
