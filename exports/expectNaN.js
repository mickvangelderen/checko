const inspect = require('./inspect')

function expectNaN(value) {
	if (isNaN(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to be NaN.`)
}

module.exports = expectNaN
