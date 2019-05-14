
var Yox = require("yox")

module.exports = function(content) {
  return `module.exports = '${Yox.cmpile(content, true)}';`
}