const inspect = require('./inspect')
const isUint16Array = require('./isUint16Array')

function expectUint16Array(value) {
	if (isUint16Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Uint16Array.`)
}

module.exports = expectUint16Array
