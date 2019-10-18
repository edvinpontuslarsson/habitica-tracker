'use strict';

const fs = require('fs');

const templateFilePath = process.cwd() + '/template.md';
let template = fs.readFileSync(templateFilePath, 'utf8', (err, data) => data);
