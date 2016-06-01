const inspect = require('./inspect')

function expectNull(value) {
	if (value === null) return value
	throw new RangeError(`Expected ${inspect(value)} to equal null.`)
}

module.exports = expectNull
