const inspect = require('./inspect')

function expectAtLeast(least, value) {
	if (value >= least) return value
	throw new RangeError(`Expected ${inspect(value)} to be at least ${inspect(least)}.`)
}

module.exports = expectAtLeast
