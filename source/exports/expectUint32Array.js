const inspect = require('./inspect')
const isUint32Array = require('./isUint32Array')

function expectUint32Array(value) {
	if (isUint32Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Uint32Array.`)
}

module.exports = expectUint32Array
