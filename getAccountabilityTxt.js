'use strict';

module.exports = (timeObj, accObj) =>
  `${timeObj.day}/${timeObj.month}/${timeObj.year}
  
Current NF Streak: ${getStreakTxt(timeObj)}

**Healthy Coping Mechanisms**
${getDailiesTxt(accObj.dailies).join('\n')}

${getHabitsTxt(accObj.habits).join('\n')}

**To Improve**
${accObj.missedDailies
  .map((daily) => daily.text)
  .join('\n')}
`;

function getStreakTxt(timeObj) {
  return timeObj.streak % 7 === 0
    ? `${timeObj.streak / 7} weeks`
    : `${timeObj.streak} days`;
}

function getDailiesTxt(dailies) {
  return dailies.map(
    (daily) =>
      `${daily.text}${
        daily.text.length < 30
          ? ' '.repeat(30 - daily.text.length)
          : ' '
      }:white_check_mark:`
  );
}

function getHabitsTxt(habits) {
  return habits.map(
    (habit) =>
      `${habit.text} ${
        habit.counterUp > 1 ? `${habit.counterUp}` : ''
      } ${habit.notes}`
  );
}
