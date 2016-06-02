const inspect = require('./inspect')
const isPositiveInfinity = require('./isPositiveInfinity')

function expectPositiveInfinity(value) {
	if (isPositiveInfinity(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to be positive infinity.`)
}

module.exports = expectPositiveInfinity
