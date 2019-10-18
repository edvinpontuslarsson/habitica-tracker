'use strict';

module.exports = (timeObj, accObj) => {
  return `${timeObj.day}/${timeObj.month}/${timeObj.year}
  
${timeObj.streak} days now

**Healthy Coping Mechanisms**

***Dailies:***
${accObj.dailies}

***Bonus:***
${accObj.habits}

**To Improve**
${accObj.missedDailies}
I can always be more present. 
`;
};
