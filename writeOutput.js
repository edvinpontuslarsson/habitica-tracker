'use strict';

const fs = require('fs');

module.exports = (output) => {
  const currentWorkDir = process.cwd();
  const outputFilePath = `${currentWorkDir}/output.md`;

  fs.writeFileSync(outputFilePath, output);
};
