'use strict';

const getHabiticaData = require('./getHabiticaData');
const getStatusObj = require('./getStatusObj');
const getTimeObj = require('./getTimeObj');
const getAccountabilityTxt = require('./getAccountabilityTxt');
const writeOutput = require('./writeOutput');

getHabiticaData().then((data) => {
  const timeObj = getTimeObj();
  const statusObj = getStatusObj(data);

  const output = getAccountabilityTxt(timeObj, statusObj);
  writeOutput(output);
});
