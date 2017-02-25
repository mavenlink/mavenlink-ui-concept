'use strict';

const merge = require('deepmerge');
const path = require('path');
const CWD = process.cwd();
const SRC = path.join(CWD, 'src');
const LIB = path.join(CWD, 'lib');

module.exports = neutrino => {
  // Configure Webpack to process our lib/ directory, in addition to src/.
  neutrino.config.module.rule('compile').include(SRC, LIB);

  // Configure Neutrino to use our own ESLint rules.
  neutrino.config.module.rule('lint').loader('eslint', ({options}) => {
    return {
      options: merge(options, {
        rules: {
          "babel/object-curly-spacing": "off",
          "comma-dangle": ["error", "never"],
          "func-names": "off",
          "import/extensions": "off",
          "import/no-extraneous-dependencies": "off",
          "import/no-unresolved": "off",
          "no-multiple-empty-lines": ["error", {"max": 1, "maxEOF": 1, "maxBOF": 0}],
          "object-curly-spacing": ["error", "never"],
          "quotes": ["error", "double", {"avoidEscape": true}],
          "semi": ["error", "never"]
        }
      })
    };
  });
};
