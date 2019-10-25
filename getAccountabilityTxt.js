'use strict';

module.exports = (timeObj, accObj) =>
  `${timeObj.day}/${timeObj.month}/${timeObj.year}
  
Current NF Streak: ${timeObj.streak} days

**Healthy Coping Mechanisms**
${accObj.dailies}
${accObj.habits}

**To Improve**
${accObj.missedDailies}
`;
