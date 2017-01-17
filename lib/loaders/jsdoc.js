const glob = require('glob');
const path = require('path');

module.exports = function () {
  const callback = this.async();
  const resource = this.request.split('!').pop();
  const directory = path.dirname(resource);

  glob(`${directory}/**/*.{js,jsx}`, (err, files) => {
    if (err) {
      return callback(err);
    }
    return callback(null, `module.exports = ${JSON.stringify(files)};`);
  });
};
