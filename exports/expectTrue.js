const inspect = require('./inspect')

function expectTrue(value) {
	if (value === true) return value
	throw new RangeError(`Expected ${inspect(value)} to equal true.`)
}

module.exports = expectTrue