const inspect = require('./inspect')
const isFloat64Array = require('./isFloat64Array')

function expectFloat64Array(value) {
	if (isFloat64Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Float64Array.`)
}

module.exports = expectFloat64Array
