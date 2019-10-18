'use strict';

module.exports = (habiticaData) => {
  return {
    dailies: habiticaData.data.filter(
      (obj) =>
        obj.type === 'daily' && obj.completed === true
    ),
    // todo: for habits in string add x <counterUp>
    habits: habiticaData.data.filter(
      (obj) => obj.type === 'habit' && obj.counterUp > 0
    ),
    missedDailies: habiticaData.data.filter(
      (obj) =>
        obj.type === 'daily' &&
        obj.completed === false &&
        obj.isDue === true
    ),
  };
};
