'use strict';

module.exports = (timeObj, statusObj) => {
  return `${timeObj.day}/${timeObj.month}/${timeObj.year}
  
${timeObj.streak} days now

**Healthy Coping Mechanisms**
${statusObj.dailies}
${statusObj.habits}

**To Improve**
${statusObj.missedDailies}
And I can always be more present. 
  `;
};
