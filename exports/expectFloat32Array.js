const inspect = require('./inspect')
const isFloat32Array = require('./isFloat32Array')

function expectFloat32Array(value) {
	if (isFloat32Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Float32Array.`)
}

module.exports = expectFloat32Array
