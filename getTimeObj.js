'use strict';

const moment = require('moment');

module.exports = () => {
  const timeObj = {
    day: moment().date(),
    month: moment().month() + 1, // month() returns 0-based month number
    year: moment().year(),
  };

  timeObj.streak = getStreak(timeObj);

  return timeObj;
};

function getStreak(timeObj) {
  // year, month-1, day
  const streakStart = moment([2020, 0, 17]); // ca 10:30

  const today = moment([
    timeObj.year,
    timeObj.month - 1,
    timeObj.day,
  ]);

  const streak = today.diff(streakStart, 'days');

  return streak;
}
