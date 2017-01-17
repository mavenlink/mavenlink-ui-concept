module.exports = function () {
  const path = this.request.split('!').pop();
  return `module.exports = "${path}"`;
};
