'use strict';

const fs = require('fs');

module.exports = (outputFilePath, output) => {
  fs.writeFileSync(outputFilePath, output);
};
