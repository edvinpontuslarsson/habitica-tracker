'use strict';

require('dotenv').config();

const getHabiticaData = require('./getHabiticaData');
const getTimeObj = require('./getTimeObj');
const getAccountabilityObj = require('./getAccountabilityObj');
const getAccountabilityTxt = require('./getAccountabilityTxt');
const writeOutput = require('./writeOutput');

getHabiticaData().then((data) => {
  const currentWorkDir = process.cwd();

  writeOutput(
    `${currentWorkDir}/habitica-data.json`,
    JSON.stringify(data)
  );

  const timeObj = getTimeObj();
  const accObj = getAccountabilityObj(data);

  const output = getAccountabilityTxt(timeObj, accObj);
  writeOutput(`${currentWorkDir}/output.txt`, output);
});
