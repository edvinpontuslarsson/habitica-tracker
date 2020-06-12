'use strict';

// optionally insert this back
// Streak: ${getStreakTxt(timeObj)}

module.exports = (timeObj, accObj) =>
  `${timeObj.day}/${timeObj.month}/${timeObj.year}

**Healthy Coping Mechanisms**
${accObj.dailies.join('\n')}
${getHabitsTxt(accObj.habits).join('\n')}

**To Improve**
${accObj.missedDailies.join('\n')}
${accObj.badHabits
  .map((badHabit) => badHabit.text)
  .join('\n')}
`;

function getStreakTxt(timeObj) {
  return timeObj.streak === 0
    ? '0 days'
    : timeObj.streak % 7 === 0
    ? `${timeObj.streak / 7} week${
        timeObj.streak !== 7 ? 's' : ''
      }`
    : `${timeObj.streak} days`;
}

function getHabitsTxt(habits) {
  return habits.map(
    (habit) =>
      `${habit.text} ${
        habit.counterUp > 1 ? `${habit.counterUp}` : ''
      } ${habit.notes}`
  );
}
