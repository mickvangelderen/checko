const inspect = require('./inspect')
const isUint8ClampedArray = require('./isUint8ClampedArray')

function expectUint8ClampedArray(value) {
	if (isUint8ClampedArray(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Uint8ClampedArray.`)
}

module.exports = expectUint8ClampedArray
