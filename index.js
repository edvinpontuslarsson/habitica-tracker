'use strict';

const fs = require('fs');

const date = new Date();
const oneDay = 24 * 60 * 60 * 1000;

const seconds = date.getSeconds();
const minutes = date.getMinutes();
const hours = date.getHours();
const day = date.getDate();
const month = date.getMonth() + 1; // getMonth() returns 0-based month number
const year = date.getFullYear();

// streak start time here below
// year, month, day, hours, minutes, seconds
const myStreakStart = new Date(2019, 9, 20, 9, 20, 0);

const today = new Date(
  year,
  month,
  day,
  hours,
  minutes,
  seconds
);

const streak = Math.round(
  Math.abs(myStreakStart - today) / oneDay - 1
);

const templateFilePath = process.cwd() + '/template.md';

const template = fs.readFileSync(
  templateFilePath,
  'utf8',
  (err, data) => data
);

const mapObj = {
  DD: day,
  MM: month,
  YY: year,
  XX: streak,
};

const output = template.replace(
  /DD|MM|YY|XX/gi,
  (match) => mapObj[match]
);

const outputFilePath = process.cwd() + '/output.md';

fs.writeFileSync(outputFilePath, output);
