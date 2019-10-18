'use strict';

const fs = require('fs');
const tmpData = require('./tmpDataObj');
const getStatusObj = require('./getStatusObj');
const getTimeObj = require('./getTimeObj');
const getAccountabilityTxt = require('./getAccountabilityTxt');

const currentWorkDir = process.cwd();
const outputFilePath = `${currentWorkDir}/output.md`;

// fs.writeFileSync(outputFilePath, output);

const timeObj = getTimeObj();
const statusObj = getStatusObj(tmpData);

const text = getAccountabilityTxt(timeObj, statusObj);

console.log(text);
