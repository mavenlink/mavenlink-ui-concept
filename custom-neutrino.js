'use strict';

const path = require('path');
const CWD = process.cwd();
const SRC = path.join(CWD, 'src');
const LIB = path.join(CWD, 'lib');

module.exports = neutrino => {
  // Configure Webpack to process our lib/ directory, in addition to src/.
  neutrino.config.module.rule('compile').include(SRC, LIB);
};
