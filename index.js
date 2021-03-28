const Yox = require('yox')

Yox.config.uglifyCompiled = true
Yox.config.minifyCompiled = true

module.exports = function (content) {
  return `module.exports = ${Yox.compile(content, true)};`
}