var desvg = require('.')
var React = require('react')

module.exports = desvg.bind(null, React.createElement.bind(React))
