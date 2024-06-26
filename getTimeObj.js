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
  const year = parseInt(process.env.STREAK_START_YEAR);
  const month = parseInt(process.env.STREAK_START_MONTH);
  const day = parseInt(process.env.STREAK_START_DAY);

  const streakStart = moment([year, month - 1, day]);

  const today = moment([
    timeObj.year,
    timeObj.month - 1,
    timeObj.day,
  ]);

  const streak = today.diff(streakStart, 'days');

  return streak;
}
