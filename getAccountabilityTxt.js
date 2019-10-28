'use strict';

module.exports = (timeObj, accObj) =>
  `${timeObj.day}/${timeObj.month}/${timeObj.year}
  
Current NF Streak: ${getStreakTxt(timeObj)}

**Healthy Coping Mechanisms**

***Dailies***
${accObj.dailies}

***Bonus***
${accObj.habits}

**To Improve**
${accObj.missedDailies}
`;

function getStreakTxt(timeObj) {
  return timeObj.streak % 7 === 0
    ? `${timeObj.streak / 7} weeks`
    : `${timeObj.streak} days`;
}
