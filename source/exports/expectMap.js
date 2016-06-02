const inspect = require('./inspect')
const isMap = require('./isMap')

function expectMap(value) {
	if (isMap(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Map.`)
}

module.exports = expectMap
