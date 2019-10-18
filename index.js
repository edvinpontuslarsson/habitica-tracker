'use strict';

const fs = require('fs');

const templateFilePath = process.cwd() + '/template.md';
const outputFilePath = process.cwd() + '/output.md';

let template = fs.readFileSync(templateFilePath, 'utf8', (err, data) => data);

const date = new Date();
const oneDay = 24 * 60 * 60 * 1000;

const day = date.getDate();
const month = date.getMonth() + 1; // getMonth() returns 0-based month number
const year = date.getFullYear();

const myStreakStart = new Date(2019, 9, 21);
const today = new Date(year, month, day);
const streak = Math.round(Math.abs(myStreakStart - today) / oneDay);

console.log(streak);
