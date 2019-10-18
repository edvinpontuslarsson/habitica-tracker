'use strict';

module.exports = (timeObj, statusObj) => {
  return `${timeObj.day}/${timeObj.month}/${timeObj.year}
  
${timeObj.streak} days now

**Healthy Coping Mechanisms**

***Dailies:***
${statusObj.dailies}

***Bonus:***
${statusObj.habits}

**To Improve**
${statusObj.missedDailies}
I can always be more present. 
`;
};
