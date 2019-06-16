
const Yox = require('yox')

module.exports = function (content) {
  return `module.exports = \`${Yox.compile(content, true)}\`;`
}