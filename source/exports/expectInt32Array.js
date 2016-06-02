const inspect = require('./inspect')
const isInt32Array = require('./isInt32Array')

function expectInt32Array(value) {
	if (isInt32Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Int32Array.`)
}

module.exports = expectInt32Array
