'use strict';

module.exports = () => {
  const date = new Date();

  const timeObj = {
    seconds: date.getSeconds(),
    minutes: date.getMinutes(),
    hours: date.getHours(),
    day: date.getDate(),
    month: date.getMonth() + 1, // getMonth() returns 0-based month number
    year: date.getFullYear(),
  };

  timeObj.streak = getStreak(timeObj);

  return timeObj;
};

function getStreak(timeObj) {
  // streak start time here below
  // year, month, day, hours, minutes, seconds
  const myStreakStart = new Date(2019, 9, 20, 9, 20, 0);

  const today = new Date(
    timeObj.year,
    timeObj.month,
    timeObj.day,
    timeObj.hours,
    timeObj.minutes,
    timeObj.seconds
  );

  const oneDay = 24 * 60 * 60 * 1000;

  const streak = Math.floor(
    Math.abs(myStreakStart - today) / oneDay
  );

  return streak;
}
